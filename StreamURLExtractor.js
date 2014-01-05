function searchURL() {
	var result = "";
	
	var possibleNames = new Array("player", "videoPlayer");
	
	for (var i = 0; i < possibleNames.length; i++) {
		if (typeof document.getElementById(possibleNames[i]) == "function") {
			result = document.getElementById(possibleNames[i]).GetVariable("file");
		}
	}
	
	if (result != "" && result.search("/") == -1) {
		result = getVideoURLWithAPI();
		return;
	}
	
	if (typeof flowplayer == "function") {
		result = flowplayer().getConfig().clip.url;
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

function getVideoURLWithAPI() {
	var file = document.getElementById("videoPlayer").GetVariable("file");
	var key = document.getElementById("videoPlayer").GetVariable("filekey");
	var domain = document.getElementById("videoPlayer").GetVariable("domain");
	var request = domain+"/api/player.api.php?user=undefined&pass=undefined&file="+file+"&key="+key;
	
	var r = window.confirm("You have to copy the url from this page:\n"+request+"\nIt's between 'url=' and '&title'\nDo you want to open the page?");
	if (r == 1) {
		window.open(request);
	}
}