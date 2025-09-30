function determineGiscusTheme() {
  
    return "light";
  
}

(function setupGiscus() {
  let giscusTheme = determineGiscusTheme();

  let giscusAttributes = {
    src: "https://giscus.app/client.js",
    "data-repo": "maximelucas/maximelucas.github.io",
    "data-repo-id": "MDEwOlJlcG9zaXRvcnk2MDAyNDM2NQ",
    "data-category": "Comments",
    "data-category-id": "DIC_kwDOA5PmLc4CTBt6",
    "data-mapping": "title",
    "data-strict": "1",
    "data-reactions-enabled": "1",
    "data-emit-metadata": "0",
    "data-input-position": "bottom",
    "data-theme": giscusTheme,
    "data-lang": "en",
    crossorigin: "anonymous",
    async: true,
  };

  let giscusScript = document.createElement("script");
  Object.entries(giscusAttributes).forEach(([key, value]) =>
    giscusScript.setAttribute(key, value)
  );
  document.getElementById("giscus_thread").appendChild(giscusScript);
})();

