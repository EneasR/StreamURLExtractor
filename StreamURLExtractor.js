function searchURL() {
	var result = "";
	var elementName = "";
	
	var possibleNames = new Array("player", "videoPlayer");
	
	for (var i = 0; i < possibleNames.length; i++) {
		if (typeof document.getElementById(possibleNames[i]) == "function") {
			result = document.getElementById(possibleNames[i]).GetVariable("file");
			elementName = possibleNames[i];
		}
	}
	
	if (result != "" && result.search("/") == -1) {
		result = getVideoURLWithAPIFromElementNamed(elementName);
		return;
	}
	
	if (typeof flowplayer == "function") {
		if (typeof flowplayer().getClip().completeUrl == "object") {
			result = flowplayer().getClip().completeUrl;
		} else {
			result = flowplayer().getConfig().clip.url;
		}
	}
	if (typeof jwplayer == "function") {
		result = jwplayer().config.file;
	}
	
	if (result == "") {
		var alertText;
		if (document.getElementsByTagName("iframe").length > 0) {
			alertText = "Sorry -- URL not found\n\nNote that embedded players are not reachable";
		} else {
			alertText = "Sorry -- URL not found";
		}
		window.alert(alertText);
	} else {
		window.prompt("URL found! Copy to clipboard: Ctrl+C, Enter", result);
	}
}

function getVideoURLWithAPIFromElementNamed(elementName) {
	var file = document.getElementById(elementName).GetVariable("file");
	var key = document.getElementById(elementName).GetVariable("filekey");
	var domain = document.getElementById(elementName).GetVariable("domain");
	var request = domain+"/api/player.api.php?user=undefined&pass=undefined&file="+file+"&key="+key;
	
	var r = window.confirm("You have to copy the url from this page:\n"+request+"\nIt's between 'url=' and '&title'\nDo you want to open the page?");
	if (r == 1) {
		window.open(request);
	}
}