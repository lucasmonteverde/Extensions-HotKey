chrome.extension.onRequest.addListener(function(request, sender, callback) {
	if(request && request.localStorage) {callback( localStorage.hotkey?localStorage.hotkey:"ctrl + shift + 69" ); return; };
	
	var chromeExtURL="chrome://extensions/";
	var chromeNewExtURL = "chrome://chrome/extensions/";
	chrome.tabs.getAllInWindow(null,function(tabs){
		for (var i=0;i<tabs.length;i++){
			if (tabs[i].url == chromeExtURL || tabs[i].url == chromeNewExtURL){
				chrome.tabs.update(tabs[i].id, {selected:true})
				return;
			}
		}
		chrome.tabs.create({url:chromeExtURL,selected:true})
	})
});