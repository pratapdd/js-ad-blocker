chrome..webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true }
  },
  {
    urls: ["*://*.testadblock.dom/*"]
  },
  ['blocking']
)