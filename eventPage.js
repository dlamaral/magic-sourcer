var contextMenuItem = {
    "id": "searchSocial",
    "title": "Search for social media",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);


chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.create({  
        url: "https://www.google.com/search?q=(site:linkedin.com/in+OR+site:facebook.com+OR+site:instagram.com+OR+site:twitter.com+OR+site:tiktok.com)+" + encodeURIComponent(info.selectionText)
    });
})