$('#good').hammer();
$('#good').on('tap', function(e){
    e.preventDefault();
    //$('#thermo1 > div > div.goal > div').text(13);
    thermometer("thermo1", 13, 13, true);

    chart.load({
        columns: [
            ['Cash', 0],
            ['Stock', 100]
        ]
    });

    $('#weather-vane').css({
        '-ms-transform': 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)',
        'transform': 'rotate(45deg)',
    });

    return false;
});

$('#bad').hammer();
$('#bad').on('tap', function(e){
    e.preventDefault();
    //$('#thermo1 > div > div.goal > div').text(13);
    thermometer("thermo1", 13, 1, true);

    chart.load({
        columns: [
            ['Cash', 100],
            ['Stock', 0]
        ]
    });

    $('#weather-vane').css({
        '-ms-transform': 'rotate(-45deg)',
        '-webkit-transform': 'rotate(-45deg)',
        'transform': 'rotate(-45deg)',
    });

    return false;
});

$('#current').hammer();
$('#current').on('tap', function(e){
    e.preventDefault();
    //$('#thermo1 > div > div.goal > div').text(13);
    loadCurrent();

    return false;
});

function loadCurrent() {
    thermometer("thermo1", 13, 6, true);

    chart.load({
        columns: [
            ['Cash', 58],
            ['Stock', 42]
        ]
    });

    $('#weather-vane').css({
        '-ms-transform': 'rotate(-7.5deg)',
        '-webkit-transform': 'rotate(-7.5deg)',
        'transform': 'rotate(-7.5deg)',
    });
}

loadCurrent();
