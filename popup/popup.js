function enableAutoTakeover() {
  chrome.storage.local.set({ 'autoTakeoverEnabled': true }).then(() => {
    chrome.action.setBadgeText({ text: 'ON' });
  });
}

function disableAutoTakeover() {
  chrome.storage.local.set({ 'autoTakeoverEnabled': false }).then(() => {
    chrome.action.setBadgeText({ text: 'OFF' });
  });
}

function updateAutoTakeover(event) {
  if (event.target.checked) {
    enableAutoTakeover();
  }
  else {
    disableAutoTakeover();
  }
}

document.getElementById('autoTakeover')
        .addEventListener('change', updateAutoTakeover);

chrome.storage.local.get(['autoTakeoverEnabled']).then((result) => {
  if (result.autoTakeoverEnabled) {
    document.getElementById('autoTakeover').checked = true;
  }
});
