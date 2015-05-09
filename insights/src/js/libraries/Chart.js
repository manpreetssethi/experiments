;Chart = (function(){
	var Chart = function(){ return constructor.apply(this,arguments); }
	var p = Chart.prototype;
	
	//attributes
	p.version = '0.0.1'
	p.c3ChartObj;
	
	//construct
	function constructor(attributes){
		p.c3ChartObj = c3.generate(attributes);
	}

	// methods
	p.transformTo = function(type) {
		this.c3ChartObj.transform(type);
		return this;
	}
	
	//private methods
	
	//unleash your class
	return Chart;
})();