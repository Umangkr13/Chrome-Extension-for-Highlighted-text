
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Page Info Received:", message);

    fetch('http://localhost:3000/page-info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server Response:', data);
        sendResponse({ status: 'Success', serverResponse: data });
    })
    .catch(error => {
        // console.error('Error:', error);
        sendResponse({ status: 'Error', error: error.message });
    });

    return true;
});
