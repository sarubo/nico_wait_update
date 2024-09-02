console.log = () => { }

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

/**
 * @param {number} loopCount
 * @returns {void}
 */
const onLoadForScroll = (loopCount) => {
  const player = document.querySelector(".grid-area_\\[player\\]")
  if (!player) {
    setTimeout(onLoadForScroll, loopCount * loopCount * 1000, loopCount + 1);
    return;
  }
  document.addEventListener("keyup", (event) => {
    const activeElement = document.activeElement
    const activeElementTag = activeElement?.tagName.toLowerCase()
    if (
      activeElementTag
      && (activeElementTag == "input" || activeElementTag == "textarea")
    ) {
      return;
    }
    switch (event.key) {
      case "p":
      case "k":
      case " ":
        player.scrollIntoView();
        break;
      default:
        break;
    }
  });
}

console.log("start loaded www_nico_watch.js");
onLoadForClick(1);
onLoadForScroll(1);
console.log("finish loaded www_nico_watch.js");
