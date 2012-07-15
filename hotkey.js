/**
 * Extension Hotkey - Press a custom hotkey to open extension page;
 *
 * @author Lucas Monteverde <monteverde13@yahoo.com.br>
 * @license GPLv3
**/ 

chrome.extension.sendRequest({localStorage: "hotkey"}, function(data) {

	var ctrl = /ctrl/.test(data),
		shift = /shift/.test(data),
		alt = /alt/.test(data),
		code = data.substr(data.lastIndexOf('+') + 2);
	
	//console.log(ctrl,shift,alt,code);

	document.addEventListener("keydown", function (e){
		if(e.keyCode == code && e.ctrlKey == ctrl && e.shiftKey == shift && e.altKey == alt){
			e.preventDefault();
			chrome.extension.sendRequest({action:"keydown"});
			return false;
		}
	}, false);
});

