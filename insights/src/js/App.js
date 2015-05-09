;App = (function(){
	var App = function(){ return constructor.apply(this,arguments); }
	var p = App.prototype;
	
	//attributes
	p.version = '0.0.1'
	p.$el;
	p.charts = {};
	
	//construct
	function constructor(attributes){
		p.$el = $('#app');

		// Initiate scrollspy
		p.$el.find('.scrollspy').scrollSpy();
		p.$el.find('.section.table-of-contents').pushpin();

		// Render charts
		for(var i in chartsData) {
			p.charts[chartsData[i].bindto] = p.renderChart(chartsData[i]);
		}

		// Change in chart type
		p.$el.find('input[name="chart-type"]').on('change', function(e){
			var type 	= e.currentTarget.value;
			var rel 	= $(this).attr('rel');
			p.changeChartType(p.charts[rel], type);
		});
	}

	// methods
	p.renderChart = function(options) {
		var chart = new Chart(options);
		return chart;
	}

	p.changeChartType = function(chartObject, to) {
		chartObject.transformTo(to);
		return this;
	}
	
	//private methods
	function _getChartData() {
		return [
			['data1', 30, 20, 50, 40, 60, 100],
			['data2', 200, 130, 90, 240, 130, 220],
			['data3', 300, 200, 160, 250, 250, 900000]
		];
	}
	
	//unleash your class
	return App;
})();