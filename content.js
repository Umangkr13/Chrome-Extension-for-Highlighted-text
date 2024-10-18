var pageTitle = document.title;
var pageUrl = window.location.href;

chrome.runtime.sendMessage({ title: pageTitle, url: pageUrl });