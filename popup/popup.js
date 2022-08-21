document.getElementById('view-version').innerText =
    "version-" + chrome.runtime.getManifest().version;

const keyScroll   = document.getElementById('key-scroll');
const kScroll     = document.getElementById('k-scroll');
const delNeta     = document.getElementById('del-neta');
document.addEventListener('DOMContentLoaded', (_) => {
    chrome.storage.local.get(
        {
            keyScroll: 2,
            kScroll: true,
            delNeta: false,
        },
        (items) => {
            keyScroll.value = items.keyScroll;
            kScroll.checked = items.kScroll;
            delNeta.checked = items.delNeta;
        }
    );
    keyScroll.addEventListener('change', (_) => {
        chrome.storage.local.set({ keyScroll: keyScroll.value });
    });
    kScroll.addEventListener('click', (_) => {
        chrome.storage.local.set({ kScroll:   kScroll.checked });
    });
    delNeta.addEventListener('click', (_) => {
        chrome.storage.local.set({ delNeta:   delNeta.checked });
    });
}, false);
