console.log = () => {}

console.log("script/remove_ad_on_anime.js");

document.addEventListener("DOMContentLoaded", () => {
    console.log("load");
    document.addEventListener("keyup", (en) => {
        if (en.key !== "Escape") {
            return;
        }
        const asides = document.getElementsByTagName("aside");
        for (const aside of asides) {
            for (const iterator of aside.children) {
                console.log(iterator.tagName);
                if (iterator.tagName !== "SECTION") {
                    console.log("remove");
                    const dummy = document.createElement("div");
                    dummy.id = iterator.id;
                    dummy.className = iterator.className;
                    iterator.replaceWith(dummy);
                }
            }
        }
    })
});
