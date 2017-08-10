function onExecuted(result) {
}

function onError(error) {
    console.log(`Error: ${error}`);
}

var scrollUp = 'scrollTo(0,0)';

function runAction() {
    browser.tabs.executeScript({
        code: scrollUp
    }).then(onExecuted, onError);
}

browser.browserAction.onClicked.addListener(runAction);