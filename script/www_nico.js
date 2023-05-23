console.log = () => { }

const scrollClassList = [
  "HeaderContainer-row",
  "TagContainer",
  "MainContainer",
  "BottomContainer"
]

const scroll = (mode) => {
  console.log("scroll start");
  const commonHeader = document.getElementById("CommonHeader");
  switch (mode) {
    case 0:
      scrollTo(0, 0);
      break;
    case 1: case 2: case 3: case 4:
      const headerHeight = (commonHeader.style.position === "sticky" ? 1 : 0)
        * commonHeader.getBoundingClientRect().height;
      scrollBy(0, document.getElementsByClassName(scrollClassList[mode - 1])[0]
        .previousElementSibling.getBoundingClientRect().bottom - headerHeight);
      break;
    default:
      console.error("unreachable!");
      break;
  }
  console.log("scroll end");
}

const scrollDefault = () => {
  chrome.storage.local.get({ keyScroll: 2 }, item =>
    scroll(parseInt(item.keyScroll))
  );
}

const kScroll = () => {
  chrome.storage.local.get({ kScroll: true }, item => {
    if (!item.kScroll) return;
    const isPlayerPlayButton =
      document.getElementsByClassName("ActionButton ControllerButton PlayerPauseButton").length > 0;
    if (!isPlayerPlayButton) {
      return;
    }
    scrollDefault();
  });
}

const removeResumeContainer = () => {
  console.log("removeResumeContainer start");
  const videoOverlayContainer = document.getElementsByClassName("VideoOverlayContainer")[0];
  console.log(videoOverlayContainer);
  if (!videoOverlayContainer) return;
  const resumeContainer = videoOverlayContainer.getElementsByClassName("ResumeContainer")[0];
  console.log(resumeContainer);
  if (!resumeContainer) return;
  videoOverlayContainer.removeChild(resumeContainer);
  console.log("removeResumeContainer end");
}

const keyupCallback = (keyBoardEvent) => {
  const controllerBoxContainer = document.getElementsByClassName("ControllerBoxContainer")[0];
  const rightFloatingPanel = document.getElementsByClassName("MainContainer-floatingPanel")[0];
  const tagContainer = document.getElementsByClassName("TagContainer")[0];
  const tagAndSearchBoxInput = document.getElementsByClassName("TagSuggestionInput SearchBox-input")[0];
  const isWriting = !controllerBoxContainer
    || !rightFloatingPanel
    || !tagContainer
    || !tagAndSearchBoxInput
    || controllerBoxContainer.classList.contains("is-active")
    || rightFloatingPanel.children.length > 0
    || tagContainer.classList.contains("is-editing")
    || tagAndSearchBoxInput.classList.contains("is-focus");
  console.log(`isWriting: ${isWriting}`);
  if (isWriting) return;
  const ownerNicoliveBannerContainer = document.getElementsByClassName("OwnerNicoliveBannerContainer")[0];
  const iconLevel = document.getElementsByClassName("Grid HeaderContainer-row")[0];
  if (ownerNicoliveBannerContainer && iconLevel) {
    console.log(`OwnerNicoliveBannerContainer`);
    iconLevel.insertAdjacentElement("beforebegin", ownerNicoliveBannerContainer.cloneNode(true));
    ownerNicoliveBannerContainer.remove();
  }
  switch (keyBoardEvent.key) {
    case "k":
      kScroll();
      removeResumeContainer();
      break;
    case "f":
      const isFullScreen = document.body.classList.contains("is-fullscreen")
      console.log(`document.body.classList.contains("is-fullscreen"): ${isFullScreen}`);
      if (isFullScreen) break;
      scrollDefault();
      console.log("keyScroll f");
      break;
    case "p":
      scrollDefault();
      console.log("keyScroll p");
      break;
    default:
      console.log("keyScroll default");
      break;
  }
}

const keyScroll = () => {
  console.log("keyScroll start");
  document.addEventListener("keyup", keyupCallback);
  console.log("keyScroll end");
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("addEventListener start");
  keyScroll();
  console.log("addEventListener end");
})
