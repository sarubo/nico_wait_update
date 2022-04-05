document.getElementById('view-version').innerText =
    "version-" + chrome.runtime.getManifest().version;

const keyScroll = document.getElementById('key-scroll');
document.addEventListener('DOMContentLoaded', (_) => {
    chrome.storage.local.get(
        { keyScroll: 2, },
        (items) => {
            keyScroll.value = items.keyScroll;
        }
    );
    keyScroll.addEventListener('change', (_) => {
        chrome.storage.local.set({ keyScroll: keyScroll.value })
    });
}, false);