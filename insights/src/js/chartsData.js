var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var chartsData = [
	{
		bindto: '#chart-1',
		data: {
			type: 'bar',
			x: 'x',
			columns: [
				['x', '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01'],
				['users', 30, 200, 100, 400, 150]
			],
			colors: {
				'users' : '#00bcd4'
			}
		},
		grid: {
			x: {
				show: false
			},
			y: {
				show: true
			}
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: function(x) {
						return months[x.getMonth()] + ' ' + x.getFullYear();
					}
				}
			}
		},
		bar: {
			width: {
				ratio: 0.30
			}
		},
		legend: {
			show: false
		}
	},

	{
		bindto: '#chart-2',
		data: {
			type: "bar",
			types: {
				"login %" : "spline"
			},
			axes: {
				"login %": "y2"
			},
			x: 'x',
			columns: [
				['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
				['logins', 30, 200, 100, 400, 150, 250],
				['login %', 5, 20, 10, 40, 15, 25]
			],
			colors: {
				'logins' : '#8d6e63',
				'login %' : '#ff5722'
			}
		},
		grid: {
			x: {
				show: true
			},
			y: {
				show: true
			}
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y-%m-%d'
				}
			},
			y2: {
				show: true
			}
		},
		point: {
			show: true
		}
	},

	{
		bindto: '#chart-4',
		data: {
			type: 'bar',
			x: 'x',
			columns: [
				['x', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				['nps', 5, 10, 15, 25, 35, 50, 65, 70, 95, 70, 40]
			]
		},
		regions: [
			{axis: 'x', end: 6.5, class: 'region-passives'},
			{axis: 'x', start: 6.5, end: 8.5, class: 'region-detractors'},
			{axis: 'x', start: 8.5, class: 'region-promoters'}
		],
		legend: {
			show: false
		},
		axis: {
			x: {
				tick: {
					outer: false,
					culling: false
				}
			}
		}
	},

	{
		bindto: '#chart-5',
		data: {
			type: 'pie',
			x: 'x',
			columns: [
				['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
				['male', 120, 20, 100, 400, 150, 150],
				['female', 30, 200, 200, 40, 150, 250],
				['unknown', 30, 90, 0, 150, 50, 25]
			],
			groups: [
				['male', 'female', 'unknown']
			],
			colors: {
				'male' : '#2196f3',
				'female' : '#f48fb1',
				'unknown' : '#90a4ae'
			}
		},
		grid: {
			x: {
				show: false
			},
			y: {
				show: true
			}
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%d-%m-%Y'
				}
			}
		},
		bar: {
			width: {
				ratio: 0.60
			}
		}
	},
];