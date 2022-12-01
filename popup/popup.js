document.getElementById('view-version').innerText =
  "version-" + chrome.runtime.getManifest().version;

const keyScroll = document.getElementById('key-scroll');
const kScroll = document.getElementById('k-scroll');
document.addEventListener('DOMContentLoaded', (_) => {
  chrome.storage.local.get(
    {
      keyScroll: 2,
      kScroll: true,
    },
    (items) => {
      keyScroll.value = items.keyScroll;
      kScroll.checked = items.kScroll;
    }
  );
  keyScroll.addEventListener('change', (_) => {
    chrome.storage.local.set({ keyScroll: keyScroll.value });
  });
  kScroll.addEventListener('click', (_) => {
    chrome.storage.local.set({ kScroll: kScroll.checked });
  });
}, false);
