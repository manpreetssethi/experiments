;FacebookPageInsights = (function(){
	var FacebookPageInsights = function(){ return constructor.apply(this,arguments); }
	var p = FacebookPageInsights.prototype;
	var _FB;
	
	//attributes
	p.version = '0.0.1'
	p.metrics = [
		{label: 'Page fans (by country)', 	value: 'page_fans_country', periods: ['day', 'week', 'days_28']},
		{label: 'PTAT (by country)', 		value: 'page_storytellers_by_country', periods: ['day', 'week', 'days_28']},
		{label: 'Page stories', 			value: 'page_stories', periods: ['day', 'week', 'days_28']},
		{label: 'Page stories (by type)', 	value: 'page_stories_by_story_type', periods: ['day', 'week', 'days_28']},
		{label: 'PTAT', 					value: 'page_storytellers', periods: ['day', 'week', 'days_28']},
		{label: 'PTAT (by type)', 			value: 'page_storytellers_by_story_type', periods: ['day', 'week', 'days_28']},
		{label: 'PTAT (by age & gender)', 	value: 'page_storytellers_by_age_gender', periods: ['day', 'week', 'days_28']},
		{label: 'PTAT (by city)', 			value: 'page_storytellers_by_city', periods: ['day', 'week', 'days_28']},
		{label: 'PTAT (by country)', 		value: 'page_storytellers_by_country', periods: ['day', 'week', 'days_28']},
		{label: 'PTAT (by language)', 		value: 'page_storytellers_by_locale', periods: ['day', 'week', 'days_28']}
	];
	
	//construct
	function constructor(attributes){
		if(typeof FB == 'undefined' || typeof FB.api == 'undefined') {
			console.error('FB is not defined');
			return;
		}

		_FB = FB;
	}

	// methods
	p.getMetrics = function() {
		return this.metrics;
	}

	p.getMetricData = function(metric, period, callback) {
		return _FB.api(
			"/403501306450320/insights/"+metric,
			{
				"period": period
			},
			function (response) {
				if (response && !response.error) {
					console.log(response);
				}
			}
		);
	}
	
	//private methods
	
	//unleash your class
	return FacebookPageInsights;
})();