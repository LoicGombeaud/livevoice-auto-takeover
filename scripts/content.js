function getAcceptButton() {
  var signalButtons = document.getElementsByClassName("btn-signal");
  var acceptButton = Array.from(signalButtons)
                          .filter((e) => e.textContent == "Accept")[0];
  return acceptButton;
}

function isAcceptButtonVisible() {
  return getAcceptButton().checkVisibility();
}

function acceptTakeover() {
  return getAcceptButton().click();
}

function takeoverIfRequested() {
  console.log("Checking if takeover required...");
  if (isAcceptButtonVisible()) {
    acceptTakeover();
    console.log("Takeover accepted!");
  }
  else {
    console.log("No takeover requested.");
  }
}


setInterval(
  () => {
    takeoverIfRequested();
  },
  1000
)
