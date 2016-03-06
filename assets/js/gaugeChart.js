var chart = c3.generate({
	size: {
	  height: 200
	},
    data: {
        columns: [
            ['cash', 25],
            ['stock', 75],
        ],
        type: 'bar',
        groups: [
            ['cash', 'stock']
        ]
    },
	axis: {
        rotated: true,
		y: {
			max: 100,
			tick: {
				values: [0,25,50,75,100],
				format: function (d) { return d + '%'; }
			},
		},
		x: {
			tick: {
				count: 0,	
			}
		}        		
    },
    bar: {
        width: {
            ratio: 1 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
	tooltip: {	
        format: {
            title: function (x) { return 'Allocation';}
        }
    }
});

setTimeout(function () {
    chart.groups([['cash', 'stock']])
}, 1000);

$("#gaugeChart").append(chart.element)