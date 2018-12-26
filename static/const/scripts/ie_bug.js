var BrowserDetect = { 
	init: function () { 
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; 
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; 
		this.OS = this.searchString(this.dataOS) || "an unknown OS"; 
	}, 
	searchString: function (data) { 
		for (var i=0;i<data.length;i++) { 
			var dataString = data[i].string; 
			var dataProp = data[i].prop; 
			this.versionSearchString = data[i].versionSearch || data[i].identity; 
			if (dataString) { 
				if (dataString.indexOf(data[i].subString) != -1) 
					return data[i].identity; 
			} 
			else if (dataProp) 
				return data[i].identity; 
		} 
	}, 
	searchVersion: function (dataString) { 
		var index = dataString.indexOf(this.versionSearchString); 
		if (index == -1) return; 
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); 
	}, 
	dataBrowser: [ 
	{ 
		string: navigator.userAgent, 
		subString: "Chrome", 
		identity: "Chrome" 
	}, 
	{ string: navigator.userAgent, 
		subString: "OmniWeb", 
		versionSearch: "OmniWeb/", 
		identity: "OmniWeb" 
	}, 
	{ 
		string: navigator.vendor, 
		subString: "Apple", 
		identity: "Safari", 
		versionSearch: "Version" 
	}, 
	{ 
		prop: window.opera, 
		identity: "Opera", 
		versionSearch: "Version" 
	}, 
	{ 
		string: navigator.vendor, 
		subString: "iCab", 
		identity: "iCab" 
	}, 
	{ 
		string: navigator.vendor, 
		subString: "KDE", 
		identity: "Konqueror" 
	}, 
	{ 
		string: navigator.userAgent, 
		subString: "Firefox", 
		identity: "Firefox" 
	}, 
	{ 
		string: navigator.vendor, 
		subString: "Camino", 
		identity: "Camino" 
	}, 
	{  
		/* For Newer Netscapes (6+) */ 
		string: navigator.userAgent, 
		subString: "Netscape", 
		identity: "Netscape" 
	}, 
	{ 
		string: navigator.userAgent, 
		subString: "MSIE", 
		identity: "Internet Explorer", 
		versionSearch: "MSIE" 
	}, 
	{ 
		string: navigator.userAgent, 
		subString: "Gecko", 
		identity: "Mozilla", 
		versionSearch: "rv" 
	}, 
	{  
		/* For Older Netscapes (4-) */ 
		string: navigator.userAgent, 
		subString: "Mozilla", 
		identity: "Netscape", 
		versionSearch: "Mozilla" 
	} 
	], 
	dataOS : [ 
	{ 
		string: navigator.platform, 
		subString: "Win", 
		identity: "Windows" 
	}, 
	{ 
		string: navigator.platform, 
		subString: "Mac", 
		identity: "Mac" 
	}, 
	{ 
		string: navigator.userAgent, 
		subString: "iPhone", 
		identity: "iPhone/iPod" 
	}, 
	{ 
		string: navigator.platform, 
		subString: "Linux", 
		identity: "Linux" 
	} 
	] 

}; 
BrowserDetect.init(); 

if ((BrowserDetect.browser === 'Mozilla') && (BrowserDetect.version === 11) || (BrowserDetect.version === 10) ) {
	var body = document.getElementsByClassName('loader')[0]
	var loader = document.getElementsByClassName('loaderArea')[0]
	var popUp = document.getElementsByClassName('pop_up__browser')[0]
	var event

	body.classList.remove('loader')
	loader.classList.add('loaderArea__closed')
	popUp.classList.add('pop_up_active')
	body.classList.add('pop_up_cond')

	var closePopUpBtn = document.getElementById('ie_close_btn')
	var closePopUpIcon = document.getElementById('ie_close_icon')
	closePopUpBtn.onclick = function  (event) {
		event = event || window.event;
		event.preventDefault();

		body.classList.remove('pop_up_cond');
		popUp.classList.remove('pop_up_active');
	};
	closePopUpIcon.onclick = function  (event) {
		event = event || window.event;
		event.preventDefault();

		body.classList.remove('pop_up_cond');
		popUp.classList.remove('pop_up_active');
	};
}
