var contextMenuItem = {
    "id": "searchSocial",
    "title": "Search for social media",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);
var contextMenuItem2 = {
    "id": "searchGh",
    "title": "Search in Greenhouse",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem2);


chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "searchSocial"){
        chrome.tabs.create({  
            url: "https://www.google.com/search?q=(site:linkedin.com/in+OR+site:facebook.com+OR+site:instagram.com+OR+site:twitter.com+OR+site:tiktok.com)+" + encodeURIComponent(info.selectionText)
        });
    }
    if (info.menuItemId === "searchGh"){
        chrome.tabs.create({
            url: "https://app4.greenhouse.io/people?job_status=all&search_terms=" + encodeURIComponent(info.selectionText) + "&sort_by=last_activity&sort_order=desc&type=all"
        })
    }
})