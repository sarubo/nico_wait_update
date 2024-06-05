console.log = () => { }

console.log("script/remove_ad.js");

/**
 * @param {string[]} selectors
 */
const addClass = (selectors) => {
  selectors.flatMap((selector) =>
    Array.from(document.querySelectorAll(selector))
  )
    .forEach((elm) => {
      console.log(elm);
      elm.classList.add("disabled-ad");
      console.log(elm.classList);
    });
}

/**
 * @param {string[]} selectors
 */
const remove = (selectors) => {
  document.addEventListener("keyup", (en) => {
    console.log("keyup");
    if (en.key !== "Escape") {
      return;
    }
    console.log("Escape");
    addClass(selectors);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("load");
  remove([".Ads", ".ads", ".nicoadVideoItem", ".RectangleAdContainer", ".BottomSideContainer-stickyArea", ".BottomContainer-adContainer", "#LEFT_AD_ELEMENT", "#RIGHT_AD_ELEMENT", "#dic_pc_300x250_east", "#program-information-ad", "#ad-footer", ".___site-header___Vbvc8 > aside > div:nth-child(1)", "div.notice.banner", "#web_pc_sidefollow_container > ins:nth-child(1)"]);
});
