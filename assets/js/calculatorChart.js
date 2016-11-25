var chart = c3.generate({
    data: {
      x: 'x',
      columns: columns,
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%m/%Y',
                count: 10
            }
        },
        y: {
            max: 13,
            min: 0,
            padding: {top: 5, bottom: -10},
        }
    },
});

$("#calculatorChart").append(chart.element);