/* console.log = () => { } */

/**
 * @param {number} loopCount
 * @returns {void}
 */
const onLoadForClick = (loopCount) => {
  const clickable = document.querySelector(".cursor_inherit.ring_none");
  if (!clickable) {
    setTimeout(onLoadForClick, loopCount * loopCount * 1000, loopCount + 1);
    return;
  }
  clickable.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
  });
}

console.log("start loaded www_nico_watch.js");
onLoadForClick(1);
console.log("finish loaded www_nico_watch.js");
