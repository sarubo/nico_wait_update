console.log = () => {}

console.log("script/remove_ad.js");

const remover = (classNames) => {
    document.addEventListener("keyup", (en) => {
        console.log("keyup");
        if (en.key !== "Escape") {
            return;
        }
        console.log("Escape");
        for (const className of classNames) {
            const ads = document.getElementsByClassName(className);
            console.log(ads.length);
            for (const iterator of ads) {
                console.log(iterator);
                const dummy = document.createElement("div");
                dummy.id = iterator.id;
                dummy.className = iterator.className;
                iterator.replaceWith(dummy);
                console.log("remove");
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("load");
    remover(["Ads", "ads", "nicoadVideoItem"]);
});
