(function (window) {
	//Init
	var trackerName = objectExist(window['HeapAnalyticsObject']) && trimName(window['HeapAnalyticsObject']) || "eca";
	var actions =  window[trackerName].q || [];
	var DOMAIN = 'https://ecomm.events';
	var actionsProcessor = new ActionProcessor();

	window[trackerName] = processAction;

	for (var i = 0; i < actions.length; i++) {
		processAction.apply( null, [].slice.call(actions[i]));
	}

	function processAction(actionType) {
		if (!actionsProcessor.hasOwnProperty(actionType)) {
			try {console.warn("Can't send action", actionType)} catch(e) {}
			return;
		}
		return actionsProcessor[actionType].apply(actionsProcessor, arguments)
	}

	function ActionProcessor() {
		var context = {};
		init();
		context.send = function() { send.apply(null, arguments); };
		context.config = function() { config.apply(null,[].slice.call(arguments,1)); };
		context.get = function() { return get.apply(null,[].slice.call(arguments,1)); }
		return context;

		function send() {
			var args = arguments;
			var json = args[1];
			if (!!window.navigator.sendBeacon) {
				json.visitorId = context.visitorId;
				if (isExpired(context.sessionId)) {
					resetSession();
				}
				json.sessionId = context.sessionId;
				window.navigator.sendBeacon(DOMAIN+"/register", JSON.stringify(json));
				logger('send', json);
			}
		}

		function config(key, value) {
			logger('config', key + '=' + value);
			if (key === 'visitorId' && (value == null || typeof value == 'number')) {
				updateVisitorId(value);
			}
			if (key === 'sessionId' && (value == null || typeof value == 'number')) {
				updateSessionId(value);
			}
			if (key === 'allowCookies' && (typeof value == 'boolean')) {
				updateAllowCookies(value);
			}
			if (key === 'verbose' && (typeof value == 'boolean')) {
				updateVerbose(value);
			}
		}

		function get(key) {
			if (key === 'visitorId') {
				return context.visitorId;
			}
			if (key === 'sessionId') {
				return context.sessionId;
			}
		}

		function init() {
			updateVerbose(false);
			updateAllowCookies(false);
			var currentVisitorId = getVisitorIdFromStorage();
			updateVisitorId(currentVisitorId);
			var currentSessionId = getSessionIdFromStorage();
			updateSessionId(currentSessionId);
		}

		function recoveryIds() {
			var currentVisitorId = context.visitorId;
			updateVisitorId(currentVisitorId);
			var currentSessionId = context.sessionId;
			updateSessionId(currentSessionId);
		}

		function updateAllowCookies(allowCookies) {
			context.allowCookies = allowCookies;
			if (allowCookies) {
				recoveryIds();
			}
		}

		function updateVisitorId(value) {
			logger('updateVisitorId', value);
			if (value == null) {
				resetVisitorId();
			} else {
				context.visitorId = initStorage("__eca_v_id_", value);
			}
		}

		function updateSessionId(value) {
			logger('updateSessionId', value);
			if (value == null) {
				resetSession();
			} else {
				context.sessionId = initStorage("__eca_s_id_", value);
			}
			if (!context.sessionId || isExpired(context.sessionId.substring(0, context.sessionId.length - 6))){
				resetSession();
			}
		}

		function updateVerbose(value) {
			context.verbose = value;
		}

		function isExpired(timestamp) {
			return (1 * (new Date())) - timestamp >  30 * 60 * 1000;
		}

		function resetSession() {
			logger('resetSession');
			context.sessionId = initStorage("__eca_s_id_", generateIdValue());
		}

		function resetVisitorId() {
			logger('resetVisitorId');
			context.visitorId = initStorage("__eca_v_id_", generateIdValue());
		}

		function initStorage(key, value) {
			if (!value) {
				value = generateIdValue();
			}
			if (context.allowCookies) {
				logger('localStorage.setItem', key + '=' + value);
				localStorage.setItem(key, value);
			}
			return value;
		}

		function logger(event, message) {
			if (context && context.verbose) {
				var snapshot = { visitorId: context.visitorId, sessionId: context.sessionId, allowCookies: context.allowCookies };
				console.log(event, snapshot, message);
			}
		}
	}

	function getSessionIdFromStorage (){
		return localStorage.getItem("__eca_s_id_");
	}

	function getVisitorIdFromStorage (){
		return localStorage.getItem("__eca_v_id_");
	}

	function generateIdValue() {
		var random = Math.floor( Math.pow(10, 6) * Math.random()) + ""
		//pad left with zero
		while (random.length < 6) {
			random = "0" + random;
		}
		return 1 * (new Date()) + "" + random;
	}

	function objectExist(a) {
		return !!a && (a.constructor +"" === "String")
	}

	function trimName(a) {
		return !!a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
	}
})(window);
