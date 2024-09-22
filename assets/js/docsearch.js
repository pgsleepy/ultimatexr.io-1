function initializeDocSearch() {
  docsearch({
    container: "#docsearch",
    appId: "ES5EXUJLVC",
    indexName: "ultimatexr",
    apiKey: "67ef4db06aff6a97ecbf027dce191d6c",
    placeholder: "Search the docs…",
    maxResultsPerGroup: 7
  });
}

document.addEventListener("turbo:load", initializeDocSearch);
