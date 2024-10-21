document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('content').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            const url = activeTab.url;

            if (!url.startsWith('chrome://')) {
                chrome.scripting.executeScript({
                    target: { tabId: activeTab.id },
                    files: ['content.js'],
                });
            } else {
                document.getElementById('content').innerText = 'This action is not available on chrome:// URLs';
            }
        });
    });

    chrome.runtime.onMessage.addListener((message) => {
        document.getElementById('content').innerText = `Title: ${message.title}\nURL: ${message.url}`;

    fetch('http://localhost:3000/page-info',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    }, { title: message.title, url: message.url })
        
            .then(function (response) {
                console.log('Server response:', response.data);
            })
            .catch(function (error) {
                // console.error('Error:', error);
                console.log('the server did not response',error);
            });
    });
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'highlight') {
        const textContainer = document.getElementById('highlightedText');
        textContainer.textContent = message.text;
        sendResponse({ status: 'Text displayed in popup' });
    }
});

