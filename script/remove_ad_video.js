console.log = () => {}

document.addEventListener("DOMContentLoaded", () => {
    const adVideos = document.getElementsByClassName("nicoadVideoItem");
    for (const iterator of adVideos) {
        iterator.remove();
    }
});
