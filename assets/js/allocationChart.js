
var chart = c3.generate({
	size: {
		height: 320,
		width: 200
	},
    data: {
        columns: [
            ['Cash', 0],
            ['Stock', 0]
        ],
        type: 'bar'
    },
	axis: {
	  y: {
	  	max: 100,
	    tick: {
	      values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
	    }
	  }
	},
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
	legend: {
	  position: 'bottom'
	},
	tooltip: {
	  format: {
	    title: function () { return 'Allocation' }
	  }
	}
});

// setTimeout(function () {
//     chart.load({
//         columns: [
//             ['Cash', 33],
//             ['Stock', 67]
//         ]
//     });
// }, 500);

$("#allocationChart").append(chart.element);
