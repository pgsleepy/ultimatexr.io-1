import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["container", "video", "trigger"];

  connect() {
    this.overlay = document.querySelector(".overlay");
    this.videoPlayer = null;

    if (!this.hasContainerTarget || !this.hasVideoTarget || !this.hasTriggerTarget) {
      return;
    }

    this.handleTriggerClick = (event) => this.open(event);
    this.triggerTarget.addEventListener("click", this.handleTriggerClick);

    this.beforeCacheHandler = () => this.close();
    document.addEventListener("turbo:before-cache", this.beforeCacheHandler);
  }

  disconnect() {
    if (this.hasTriggerTarget && this.handleTriggerClick) {
      this.triggerTarget.removeEventListener("click", this.handleTriggerClick);
    }

    document.removeEventListener("turbo:before-cache", this.beforeCacheHandler);
  }

  open(event) {
    if (event) {
      event.preventDefault();
    }

    if (!this.ensurePlayerReady()) {
      return;
    }

    this.containerTarget.classList.add("open");
    this.showOverlay();
    this.playVideo();

    this.triggerTarget.setAttribute("aria-expanded", "true");
  }

  close(event) {
    if (event) {
      event.preventDefault();
    }

    if (!this.hasContainerTarget) {
      return;
    }

    this.pauseVideo();
    this.containerTarget.classList.remove("open");
    this.hideOverlay();

    if (this.hasTriggerTarget) {
      this.triggerTarget.setAttribute("aria-expanded", "false");
    }
  }

  ensurePlayerReady() {
    if (this.videoPlayer) {
      return true;
    }

    if (typeof window === "undefined" || typeof window.videojs === "undefined") {
      return false;
    }

    this.videoPlayer = window.videojs(this.videoTarget);
    return Boolean(this.videoPlayer);
  }

  playVideo() {
    if (!this.videoPlayer) {
      return;
    }

    if (typeof this.videoPlayer.currentTime === "function") {
      this.videoPlayer.currentTime(0);
    }

    if (typeof this.videoPlayer.initChildren === "function") {
      this.videoPlayer.initChildren();
    }

    if (typeof this.videoPlayer.play === "function") {
      this.videoPlayer.play();
    }
  }

  pauseVideo() {
    if (this.videoPlayer && typeof this.videoPlayer.pause === "function") {
      this.videoPlayer.pause();
    }
  }

  showOverlay() {
    if (!this.overlay) {
      return;
    }

    this.overlay.classList.add("open");
    this.overlay.dataset.trailerActive = "true";
  }

  hideOverlay() {
    if (!this.overlay) {
      return;
    }

    delete this.overlay.dataset.trailerActive;

    if (!this.overlay.dataset.navigationActive) {
      this.overlay.classList.remove("open");
    }
  }
}
