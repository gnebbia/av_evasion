function addHashChangeEventListener(type) {
	$(window).on('hashchange', function() {
		if (!!window.location.hash && window.location.hash != '#') {
			addCurrentPageToStorage(type);
			Wix.navigateToPage(getPageId());
			Wix.PubSub.publish('ecwid_page_changed',
				{type: type,
					hash: window.location.hash
				}, true);
			window.location.hash = ""
		}
	});	
}

$(window).ready(function() {
	if (window.location.search.indexOf("send-refresh=true") > 0) {
		Wix.PubSub.publish('settings_changed', {}, false);
	}
	Wix.PubSub.subscribe('settings_changed', function(event) {
		window.location.href = window.location.href.replace("send-refresh=true", "");
	}, false);
});
