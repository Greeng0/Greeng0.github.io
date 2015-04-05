var mdbViewModel = (function mdbModel() {
	var self = {};
	
	self.language = ko.observable("en");
	self.tab = ko.observable("home");
	
	self.enMap = {
		labelLang: "FRANÇAIS",
		labelNavHome: "HOME",
		labelNavServices: "EXPERTISE",
		labelNavContent: "INFORMATION",
		labelNavContact: "CONTACT US",
		labelRights: "All rights reserved",
		labelDesignedBy: "Web Design:",
		labelBGLicense: "\"Canada Montreal Panorama\" by G. Baranski is licensed under Creative Commons Attribution-Share Alike 3.0 Unported.",
		labelHomeTitle: "Title of stuff",
		labelHomeP1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas adipiscing at arcu ut vulputate. Cras enim tellus, scelerisque vitae accumsan ac, laoreet tempus enim. Nam adipiscing dictum augue, egestas feugiat nibh interdum et. Nam aliquam fermentum aliquet. Morbi id massa consequat, suscipit sem ut, scelerisque justo. Phasellus quis porta tortor. Praesent nec mauris laoreet, luctus diam sagittis, vehicula ante. Suspendisse ullamcorper varius purus vitae ultrices. Sed vel condimentum metus, vitae laoreet est. Proin at rutrum massa, in sodales sapien. Suspendisse ornare eros sagittis augue lobortis, vel venenatis sapien tincidunt. Praesent sed sodales eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		labelHomeP2: "Donec eu arcu venenatis, egestas risus eget, pretium est. Donec commodo in nisl non iaculis. Vestibulum quis enim sit amet ante iaculis eleifend sed ut nisi. Sed luctus tellus urna. Vivamus semper lacinia mauris, eu cursus dui imperdiet vel. Morbi scelerisque, nisi feugiat euismod congue, eros metus vestibulum lorem, eget dignissim leo massa id lorem. Cras accumsan lectus eu eros ultricies aliquet. Nulla ante lacus, vehicula porta iaculis eget, pellentesque vel nisl. Etiam imperdiet interdum pretium. Cras ultricies eu diam in feugiat. Vivamus scelerisque viverra neque, nec bibendum lorem tempor id. Nulla et arcu ac purus pharetra dignissim. Sed cursus dui eu nisl consectetur imperdiet. In hendrerit facilisis lacus, et commodo magna fringilla sed. Integer facilisis dignissim leo, ac fringilla augue pretium ac.",
		labelServices: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas adipiscing at arcu ut vulputate. Cras enim tellus, scelerisque vitae accumsan ac, laoreet tempus enim. Nam adipiscing dictum augue, egestas feugiat nibh interdum et. Nam aliquam fermentum aliquet. Morbi id massa consequat, suscipit sem ut, scelerisque justo. Phasellus quis porta tortor. Praesent nec mauris laoreet, luctus diam sagittis, vehicula ante. Suspendisse ullamcorper varius purus vitae ultrices. Sed vel condimentum metus, vitae laoreet est. Proin at rutrum massa, in sodales sapien. Suspendisse ornare eros sagittis augue lobortis, vel venenatis sapien tincidunt. Praesent sed sodales eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		labelContent: "Donec eu arcu venenatis, egestas risus eget, pretium est. Donec commodo in nisl non iaculis. Vestibulum quis enim sit amet ante iaculis eleifend sed ut nisi. Sed luctus tellus urna. Vivamus semper lacinia mauris, eu cursus dui imperdiet vel. Morbi scelerisque, nisi feugiat euismod congue, eros metus vestibulum lorem, eget dignissim leo massa id lorem. Cras accumsan lectus eu eros ultricies aliquet. Nulla ante lacus, vehicula porta iaculis eget, pellentesque vel nisl. Etiam imperdiet interdum pretium. Cras ultricies eu diam in feugiat. Vivamus scelerisque viverra neque, nec bibendum lorem tempor id. Nulla et arcu ac purus pharetra dignissim. Sed cursus dui eu nisl consectetur imperdiet. In hendrerit facilisis lacus, et commodo magna fringilla sed. Integer facilisis dignissim leo, ac fringilla augue pretium ac."
	};
	self.frMap = {
		labelLang: "ENGLISH",
		labelNavHome: "ACCUEIL",
		labelNavServices: "CHAMPS D'EXPERTISE",
		labelNavContent: "INFORMATION",
		labelNavContact: "NOUS REJOINDRE",
		labelRights: "Tous droits réservés",
		labelDesignedBy: "Réalisation:",
		labelBGLicense: "\"Canada Montreal Panorama\" par G. Baranski est licencé sous Creative Commons Attribution-Share Alike 3.0 Unported.",
		labelHomeTitle: "Titre de page",
		labelHomeP1: "French ipsum dolor sit amet, consectetur adipiscing elit. Maecenas adipiscing at arcu ut vulputate. Cras enim tellus, scelerisque vitae accumsan ac, laoreet tempus enim. Nam adipiscing dictum augue, egestas feugiat nibh interdum et. Nam aliquam fermentum aliquet. Morbi id massa consequat, suscipit sem ut, scelerisque justo. Phasellus quis porta tortor. Praesent nec mauris laoreet, luctus diam sagittis, vehicula ante. Suspendisse ullamcorper varius purus vitae ultrices. Sed vel condimentum metus, vitae laoreet est. Proin at rutrum massa, in sodales sapien. Suspendisse ornare eros sagittis augue lobortis, vel venenatis sapien tincidunt. Praesent sed sodales eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		labelHomeP2: "Francais eu arcu venenatis, egestas risus eget, pretium est. Donec commodo in nisl non iaculis. Vestibulum quis enim sit amet ante iaculis eleifend sed ut nisi. Sed luctus tellus urna. Vivamus semper lacinia mauris, eu cursus dui imperdiet vel. Morbi scelerisque, nisi feugiat euismod congue, eros metus vestibulum lorem, eget dignissim leo massa id lorem. Cras accumsan lectus eu eros ultricies aliquet. Nulla ante lacus, vehicula porta iaculis eget, pellentesque vel nisl. Etiam imperdiet interdum pretium. Cras ultricies eu diam in feugiat. Vivamus scelerisque viverra neque, nec bibendum lorem tempor id. Nulla et arcu ac purus pharetra dignissim. Sed cursus dui eu nisl consectetur imperdiet. In hendrerit facilisis lacus, et commodo magna fringilla sed. Integer facilisis dignissim leo, ac fringilla augue pretium ac.",
		labelServices: "Quelque chose ipsum dolor sit amet, consectetur adipiscing elit. Maecenas adipiscing at arcu ut vulputate. Cras enim tellus, scelerisque vitae accumsan ac, laoreet tempus enim. Nam adipiscing dictum augue, egestas feugiat nibh interdum et. Nam aliquam fermentum aliquet. Morbi id massa consequat, suscipit sem ut, scelerisque justo. Phasellus quis porta tortor. Praesent nec mauris laoreet, luctus diam sagittis, vehicula ante. Suspendisse ullamcorper varius purus vitae ultrices. Sed vel condimentum metus, vitae laoreet est. Proin at rutrum massa, in sodales sapien. Suspendisse ornare eros sagittis augue lobortis, vel venenatis sapien tincidunt. Praesent sed sodales eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		labelContent: "Affaires eu arcu venenatis, egestas risus eget, pretium est. Donec commodo in nisl non iaculis. Vestibulum quis enim sit amet ante iaculis eleifend sed ut nisi. Sed luctus tellus urna. Vivamus semper lacinia mauris, eu cursus dui imperdiet vel. Morbi scelerisque, nisi feugiat euismod congue, eros metus vestibulum lorem, eget dignissim leo massa id lorem. Cras accumsan lectus eu eros ultricies aliquet. Nulla ante lacus, vehicula porta iaculis eget, pellentesque vel nisl. Etiam imperdiet interdum pretium. Cras ultricies eu diam in feugiat. Vivamus scelerisque viverra neque, nec bibendum lorem tempor id. Nulla et arcu ac purus pharetra dignissim. Sed cursus dui eu nisl consectetur imperdiet. In hendrerit facilisis lacus, et commodo magna fringilla sed. Integer facilisis dignissim leo, ac fringilla augue pretium ac."
	};
	
	self.getTranslation = function (key) {
		var map;
		if (self.language() === "en")
			map = self.enMap;
		else if (self.language() === "fr")
			map = self.frMap;
			
		return map[key];
	};
	self.currentYear = ko.computed(function () { return new Date().getFullYear(); });

	
	self.init = function () {
		var $document = $(document);
		
		$document.on("click", "#lang", self.langClickedHandler);
		$document.on("click", "#homeLangs span", self.homeLangClickedHandler);
		$document.on("click", "#navbar a", self.navClickHandler);
		
		// Get and save the height of each page element
		$(".markdown-body > div").each(function () {
			this.setAttribute("data-height", $(this).height() - 75);
		});
		// Set all page heights to 0
		$(".markdown-body > div").height(0).css("display", "none");
		
		var hashObj = self.convertURLHashToObject();
		
		// Get the language from the url or from local storage
		if (hashObj.l) 
			self.language(hashObj.l);
		else {
			if (localStorage && localStorage.language)
				self.language(localStorage.language);
			else
				self.language("en");
		}
		if (localStorage)
			localStorage.language = self.language();
		
		// Get the tab from the url or default to the home page
		if (hashObj.t) {
			self.tab(hashObj.t);
			self.setupMainPage();
		}
		else {
			self.tab("homeLangs");
			self.openTab();
		}
	};
	
	self.openTab = function () {
		var $newTab = $(document.getElementById(self.tab()));
		var wWidth = $(window).width();
		if (self.tab() !== "homeLangs") {
			if (wWidth >= 800)
				$(".content")[0].style.width = "675px";	
			$("#navbar a[data-tab='" + self.tab() + "']").addClass("navSelected");
		}
		
		$newTab[0].style.display = "";
		$newTab.animate({ height: Number($newTab[0].getAttribute("data-height")) }, 400);
		setTimeout(function () {
			$newTab[0].style.height = "auto";
		}, 500);
		
		if (self.tab() === "about") 
			self.insertGoogleMap();
	};
	
	self.homeLangClickedHandler = function () {
		self.language(this.getAttribute("data-lang"));
		if (localStorage)
			localStorage.language = self.language();
		self.tab("home");
		self.setupMainPage();
	};
	self.setupMainPage = function () {
		document.getElementById("main").style.display = "";
		document.getElementById("navbar").style.display = "";
		document.getElementById("homeLangs").style.display = "none";
		$(".content").removeClass("middlething");
		
		self.openTab();
	};
	
	self.langClickedHandler = function () {
		self.language(self.language() === "en" ? "fr" : "en");
		if (localStorage)
			localStorage.language = self.language();
	};
	// KO observable event handler which updates the url hash whenever the language is changed
	self.language.subscribe(function (value) {
		var hashObj = self.convertURLHashToObject();
		hashObj.l = self.language();
		var newLocation = window.location.href;
		if (window.location.hash)
			newLocation = newLocation.replace(window.location.hash, "");
		newLocation = newLocation.replace("#", "");
		newLocation += "#" + $.param(hashObj);
		window.location.href = newLocation;
	});
	
	self.navClickHandler = function () {
		var $navBtn = $(this);
		var newTab = $navBtn[0].getAttribute("data-tab");
		var $currentNavBtn = $(".navSelected");
		
		if (newTab !== $currentNavBtn[0].getAttribute("data-tab")) {	
			$currentNavBtn.removeClass("navSelected");
			$navBtn.addClass("navSelected");
			var $currentTab = $("#" + $currentNavBtn[0].getAttribute("data-tab"));
			$currentTab.animate({ height: 0 }, 400);
			setTimeout(function () {
				$currentTab[0].style.display = "none";
				
				setTimeout(function () {
					var $newTab = $("#" + newTab);
					$newTab[0].style.display = "";
					$newTab.animate({ height: Number($newTab[0].getAttribute("data-height")) }, 400);
					if (newTab === "about" && !$("iframe").length)
						self.insertGoogleMap();
						
					setTimeout(function () {
						$newTab[0].style.height = "auto";
					}, 500);
				}, 100);
			}, 400);
			
			// set the new tab in url hash in case of page refresh
			var hashObj = self.convertURLHashToObject();
			hashObj.t = newTab;
			var newHash = $.param(hashObj);
			window.location.hash = newHash;
		}
	};
	
	self.insertGoogleMap = function () {
		var mapContent = "<br><iframe src=\"https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x4cc9176c57ff4075%3A0x8ceea7c908a962d2!2s6807+Chemin+Heywood%2C+C%C3%B4te+Saint-Luc%2C+QC+H4W+2W2%2C+Canada!5e0!3m2!1sen!2s!4v1388633171678\"></iframe>";
		$("#map-container").html(mapContent);
	};
	
	self.convertURLHashToObject = function () {
		var oResult = {};
		var queryString = window.location.hash;
		if (queryString) {
			var aQueryString = (queryString.substr(1)).split("&");
			for (var i = 0; i < aQueryString.length; i++) {
				var aTemp = aQueryString[i].split("=");
				if (aTemp[1].length > 0) {
					oResult[aTemp[0]] = unescape(aTemp[1]);
				}
			}
		}
		return oResult;
	};
	
	return {
		initialize: self.init,
		getTranslation: self.getTranslation,
		currentYear: self.currentYear
	};
})();

ko.applyBindings(mdbViewModel);
$(document).ready(function () {
	mdbViewModel.initialize();
});