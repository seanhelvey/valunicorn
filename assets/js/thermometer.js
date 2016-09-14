    /**
     * Thermometer Progress meter.
     * This function will update the progress element in the "thermometer"
     * to the updated percentage.
     * If no parameters are passed in it will read them from the DOM
     *
     * @param {Number} goalAmount The Goal amount, this represents the 100% mark
     * @param {Number} progressAmount The progress amount is the current amount
     * @param {Boolean} animate Whether to animate the height or not
     *
     */
    function thermometer(id, goalAmount, progressAmount, animate) {
        "use strict";

        var $thermo = $("#"+id),
            $progress = $(".progress", $thermo),
            $goal = $(".goal", $thermo),
            percentageAmount,
            isHorizontal = $thermo.hasClass("horizontal"),
            newCSS = {};

        goalAmount = goalAmount || parseFloat( $goal.text() ),
        progressAmount = progressAmount || parseFloat( $progress.text() ),
        percentageAmount =  Math.min( Math.round(progressAmount / goalAmount * 1000) / 10, 100); //make sure we have 1 decimal point

        //let's format the numbers and put them back in the DOM
        // $goal.find(".amount").text( goalAmount );
        // $progress.find(".amount").text( progressAmount );

        //let's set the progress indicator
        $progress.find(".amount").hide();

        newCSS[ isHorizontal ? "width" : "height" ] = percentageAmount + "%";

        if (animate !== false) {
            $progress.animate( newCSS, 1200, function(){
                $(this).find(".amount").fadeIn(500);
            });
        }
        else {
            $progress.css( newCSS );
            $progress.find(".amount").fadeIn(500);
        }
    }

    $(document).ready(function(){

        //call without the parameters to have it read from the DOM
        //thermometer("thermo1");

    });