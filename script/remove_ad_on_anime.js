/* console.log = () => { } */

console.log("script/remove_ad_on_anime.js");

console.log("load");
document.addEventListener("keyup", (en) => {
  if (en.key !== "Escape") {
    return;
  }
  const asides = document.getElementsByTagName("aside");
  Array.from(asides)
    .flatMap((aside) => Array.from(aside.children))
    .filter((elm) => elm.tagName !== "SECTION")
    .forEach((elm) => {
      console.log(elm);
      elm.classList.add("DelNeta");
      console.log(elm.classList);
    })
});
