function getAcceptButton() {
  var signalButtons = document.getElementsByClassName("btn-signal");
  var acceptButton = Array.from(signalButtons)
                          .filter((e) => e.textContent == "Accept")[0];
  return acceptButton;
}

function isTakeoverRequested() {
  return getAcceptButton().checkVisibility();
}

function acceptTakeover() {
  return getAcceptButton().click();
}

function takeoverIfRequested() {
  if (isTakeoverRequested()) {
    acceptTakeover();
    console.log("Takeover accepted!");
  }
}

setInterval(
  () => {
    takeoverIfRequested();
  },
  1000
)
