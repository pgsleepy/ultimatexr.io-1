import { Controller } from "@hotwired/stimulus";
import { createIcons, icons } from "lucide";

export default class extends Controller {
  connect() {
    this.renderIcons();
    this.turboRenderHandler = () => this.renderIcons();
    document.addEventListener("turbo:render", this.turboRenderHandler);
  }

  disconnect() {
    document.removeEventListener("turbo:render", this.turboRenderHandler);
  }

  renderIcons() {
    createIcons({ icons });
  }
}
