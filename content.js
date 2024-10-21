var pageTitle = document.title;
var pageUrl = window.location.href;

chrome.runtime.sendMessage({ title: pageTitle, url: pageUrl });

let popup = document.getElementById('popup');
if (!popup) {
popup = document.createElement('div');
popup.id = 'popup';
popup.style.position = 'fixed';
popup.style.top = '10%';
popup.style.right = '0';
popup.style.width = '300px';
popup.style.height = '200px';
popup.style.padding = '10px';
popup.style.backgroundColor = 'white';
popup.style.color = 'black';
popup.style.fontSize = '16px';
popup.style.boxShadow = '-2px 2px 5px rgba(0, 0, 0, 0.2)';
popup.style.borderLeft = '1px solid #ccc';
popup.style.zIndex = '99';
popup.style.fontWeight='bold';
popup.style.overflowY = 'auto';
popup.style.overflowX = 'hidden';
popup.style.wordWrap = 'break-word';
popup.style.whiteSpace = 'normal';

popup.innerHTML = '<h3 style="font-size:18px;">Highlighted Text</h3><div id="highlightedText" style="color:black;">No text highlighted yet...</div>';
document.body.appendChild(popup);
}
document.addEventListener('mouseup', () => {
const selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        const updatePopup = (text) => {
            const textContainer = document.getElementById('highlightedText');
            textContainer.textContent = text;
        };
        updatePopup(selectedText);
    }
});
