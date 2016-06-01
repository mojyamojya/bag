chrome.browserAction.onClicked.addListener(function(e) {
	var text = document.createElement("textarea");
	text.textContent = '<a href="' + e.url + '" target="_blank">' + e.title + '</a>';

	var body = document.getElementsByTagName("body")[0];
	body.appendChild(text);

	text.select();
	var retVal = document.execCommand("copy");

	body.removeChild(text);
});