var mdbViewModel = (function mdbModel() {
	var self = this;
	
	self.language = ko.observable("en");
	self.tab = ko.observable("home");
	
	self.enMap = {
		labelLang: "FRANÇAIS",
		labelNavHome: "HOME",
		labelNavServices: "SERVICES",
		labelNavContent: "INFORMATION",
		labelNavContact: "CONTACT US",
		labelRights: "All rights reserved",
		labelDesignedBy: "Web Design:"
	};
	self.frMap = {
		labelLang: "ENGLISH",
		labelNavHome: "ACCUEIL",
		labelNavServices: "SERVICES",
		labelNavContent: "INFORMATION",
		labelNavContact: "CONTACTEZ NOUS",
		labelRights: "Tous droits réservés",
		labelDesignedBy: "Réalisation:"
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
	self.labelLang = ko.computed(function () { return self.getTranslation("labelLang"); });
	self.labelNavHome = ko.computed(function () { return self.getTranslation("labelNavHome"); });
	self.labelNavServices = ko.computed(function () { return self.getTranslation("labelNavServices"); });
	self.labelNavContent = ko.computed(function () { return self.getTranslation("labelNavContent"); });
	self.labelNavContact = ko.computed(function () { return self.getTranslation("labelNavContact"); });
	self.labelRights = ko.computed(function () { return self.getTranslation("labelRights"); });
	self.labelDesignedBy = ko.computed(function () { return self.getTranslation("labelDesignedBy"); });
	
	self.init = function () {
		var $document = $(document);
		
		$document.on("click", "#lang", self.langClickedHandler);
		$document.on("click", "#navbar a", self.navClickHandler);
		
		$(".markdown-body > div").each(function () {
			this.setAttribute("data-height", $(this).height());
		});
		$(".markdown-body > div").height(0).css("display", "none");
		
		var hashObj = self.convertHashToObject();
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
		
		if (hashObj.t) 
			self.tab(hashObj.t);
		$("#navbar a[data-tab='" + self.tab() + "']").addClass("navSelected");
		var $newTab = $("#" + self.tab());
		$newTab[0].style.display = "";
		$newTab.animate({ height: Number($newTab[0].getAttribute("data-height")) }, 400);
		setTimeout(function () {
			$newTab[0].style.height = "auto";
		}, 500);
		
		if (self.tab() === "about") 
			self.insertGoogleMap();
	};
	
	self.langClickedHandler = function () {
		self.language(self.language() === "en" ? "fr" : "en");
		var hashObj = self.convertHashToObject();
		hashObj.l = self.language();
		var newLocation = window.location.href;
		if (window.location.hash)
			newLocation = newLocation.replace(window.location.hash, "");
		newLocation = newLocation.replace("#", "");
		newLocation += "#" + $.param(hashObj);
		window.location.href = newLocation;
		window.location.reload();
	};
	
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
			var hashObj = self.convertHashToObject();
			hashObj.t = newTab;
			var newHash = $.param(hashObj);
			window.location.hash = newHash;
		}
	};
	
	self.insertGoogleMap = function () {
		var mapContent = "<br><iframe src=\"https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x4cc9176c57ff4075%3A0x8ceea7c908a962d2!2s6807+Chemin+Heywood%2C+C%C3%B4te+Saint-Luc%2C+QC+H4W+2W2%2C+Canada!5e0!3m2!1sen!2s!4v1388633171678\"></iframe>";
		$("#map-container").html(mapContent);
	};
	
	self.convertHashToObject = function () {
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
		initialize: self.init
	};
})();

ko.applyBindings(mdbViewModel);
$(document).ready(function () {
	mdbViewModel.initialize();
});