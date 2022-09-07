console.log = () => {}

console.log("script/remove_ad.js");

/**
 * @param {string[]} classNames
 * @param {string[]} idNames
 */
const addClass = (classNames, idNames) => {
    classNames.flatMap((className) =>
        Array.from(document.getElementsByClassName(className))
    )
        .concat(idNames
            .map((id) => document.getElementById(id))
            .filter((v) => v))
        .forEach((elm) => {
            console.log(elm);
            elm.classList.add("disabled-ad");
            console.log(elm.classList);
        });
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
        addClass(classNames, idNames);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("load");
    remove(["Ads", "ads", "nicoadVideoItem", "RectangleAdContainer"], ["LEFT_AD_ELEMENT", "RIGHT_AD_ELEMENT", "dic_pc_300x250_east"]);
});
