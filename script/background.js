/**
 * @param {browser.webRequest._OnBeforeRequestDetails} requestDetails
 * @returns {browser.webRequest.BlockingResponse | Promise<browser.webRequest.BlockingResponse> | void}
 */
const pushToHistory = (requestDetails) => {
  console.log(requestDetails.url);
  const addr = new URL(requestDetails.url);
  const searchParamsSize = addr.searchParams.size;
  addr.search = "";
  if (searchParamsSize > 0) {
    browser.history.addUrl({
      url: addr.href,
      title: addr.href,
    });
  }
  return;
}

browser.webRequest.onBeforeRequest.addListener(
  pushToHistory,
  {
    urls: [
      "https://www.nicovideo.jp/watch/*",
      "https://www.nicovideo.jp/user/*",
      "https://www.nicovideo.jp/tag/*",
    ],
  },
  ["blocking"],
);
