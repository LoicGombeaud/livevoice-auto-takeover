function enableAutoTakeover() {
  chrome.action.setBadgeText({ text: 'ON' });
}

function disableAutoTakeover() {
  chrome.action.setBadgeText({ text: 'OFF' });
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
