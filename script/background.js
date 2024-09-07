browser.webRequest.onBeforeRequest.addListener(
  (requestDetails) => {
    const addr = new URL(requestDetails.url);
    const playlist = addr.searchParams.get("playlist");
    addr.search = "";
    if (playlist !== null) {
      browser.history.addUrl({
        url: addr.href,
        title: addr.href,
      })
    }
    return;
  },
  {
    urls: ["https://www.nicovideo.jp/watch/*"],
  },
  [
    "blocking",
  ],
);

browser.webRequest.onBeforeRequest.addListener(
  (requestDetails) => {
    const addr = new URL(requestDetails.url);
    addr.search = "";
    if (requestDetails.url === addr.href) {
      return;
    } else {
      return {
        redirectUrl: addr.href,
      };
    }
  },
  {
    urls: ["https://www.nicovideo.jp/user/*"],
  },
  [
    "blocking",
  ],
);
