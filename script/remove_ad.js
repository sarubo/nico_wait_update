console.log = () => {}

console.log("script/remove_ad.js");

/**
 * @param {Element} ad
 */
const replace = (ad) => {
    console.log(ad);
    const dummy = document.createElement("div");
    dummy.id = ad.id;
    dummy.className = ad.className;
    ad.replaceWith(dummy);
    console.log("remove");
}

/**
 * @param {HTMLCollectionOf<Element>} ads 
 */
const replaceAll = (ads) => {
    Array.from(ads).forEach((elm) => {
        elm.remove();
    })
}

/**
 * @param {string[]} classNames
 * @param {string[]} idNames
 */
const remove = (classNames, idNames) => {
    document.addEventListener("keyup", (en) => {
        console.log("keyup");
        if (en.key !== "Escape") {
            return;
        }
        console.log("Escape");
        classNames.forEach((className) => {
            const ads = document.getElementsByClassName(className);
            console.log(ads.length);
            replaceAll(ads);
        })
        idNames.forEach((name) => {
            const ad = document.getElementById(name);
            console.log(ad);
            if (ad) {
                ad.remove();
            }
        })
        const targets = ["NC-MediaObjectTitle NC-VideoMediaObject-title NC-MediaObjectTitle_fixed2Line"];
        targets.forEach((target) => {
            Array.from(document.getElementsByClassName(target)).forEach((elm) => {
                elm.className = "";
            })
        })
    });
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("load");
    remove(["Ads", "ads", "nicoadVideoItem", "videoList01Wrap", "wrap", "itemData", "NC-MediaObject-media", "NC-MediaObject-bodySecondary", "MylistItemAddition MylistItem-addition", "NC-MediaObject-action", "SideContainer MylistSideContainer"], ["LEFT_AD_ELEMENT", "RIGHT_AD_ELEMENT", "dic_pc_300x250_east"]);
});
