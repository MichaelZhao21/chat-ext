chrome.action.onClicked.addListener(tab => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: injectOverlay
    });
});

function injectOverlay() {
    if (document.getElementById("pdf-overlay")) return;

    // Create an iframe overlay
    let iframe = document.createElement("iframe");
    iframe.src = chrome.runtime.getURL("chat.html");
    iframe.style.cssText = `
        position: fixed;
        bottom: 5vh;
        left: 25vw;
        width: 50vw;
        height: 100px;
        z-index: 1000;
        border: none;
        padding: 0;
        overflow: hidden;
    `;

    document.body.appendChild(iframe);
}
