import { Controller } from "@hotwired/stimulus";
import docsearch from "docsearch";

const DOCSEARCH_CONFIG = {
  appId: "ES5EXUJLVC",
  indexName: "ultimatexr",
  apiKey: "67ef4db06aff6a97ecbf027dce191d6c",
  placeholder: "Search the docs…",
  maxResultsPerGroup: 7,
};

export default class extends Controller {
  connect() {
    if (this.element.dataset.searchInitialized === "true") {
      return;
    }

    this.instance = docsearch({
      ...DOCSEARCH_CONFIG,
      container: this.element,
    });

    this.element.dataset.searchInitialized = "true";
  }

  disconnect() {
    if (this.instance && typeof this.instance.destroy === "function") {
      this.instance.destroy();
    }

    this.instance = null;
    delete this.element.dataset.searchInitialized;
  }
}
