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
    for (const ad of ads) {
        replace(ad);
    }
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
        for (const className of classNames) {
            const ads = document.getElementsByClassName(className);
            console.log(ads.length);
            replaceAll(ads);
        }
        for (const name of idNames) {
            const ad = document.getElementById(name);
            console.log(ad);
            if (ad) {
                replace(ad);
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("load");
    remove(["Ads", "ads", "nicoadVideoItem"], ["LEFT_AD_ELEMENT", "RIGHT_AD_ELEMENT", "dic_pc_300x250_east"]);
});
