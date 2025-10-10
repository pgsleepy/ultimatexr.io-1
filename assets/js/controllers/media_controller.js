import { Controller } from '@hotwired/stimulus'

export default class MediaController extends Controller {
  static targets = ['mediaElement']

  connect () {
    this.reRenderMediaElement()
  }

  // Fix potentially blank videos due to autoplay rules?
  reRenderMediaElement () {
    if (!this.hasMediaElementTarget) {
      return
    }

    const mediaElement = this.mediaElementTarget
    const clone = mediaElement.cloneNode(true)
    mediaElement.parentNode.insertBefore(clone, mediaElement)
    mediaElement.remove()
  }
}
