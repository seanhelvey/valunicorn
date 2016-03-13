$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var dada = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  var body = "";
  if (dada === "Meter") {
  	title = "Value Meter";
  	body = "A higher level on the meter indicates good value, while a lower level implies relatively poor value. The meter is based on risk adjusted changes in credit spreads." 
  } else if (dada === "Vane") {
  	title = "Price Forecast";
  	body = "More info coming soon!";  	
  } else if (dada === "Allocation") {
  	title = "Asset Allocation";
  	body = "More info coming soon!";  	
  } else if (dada === "Ranking") {
  	title = "Selection Process";
  	body = "More info coming soon!";  	
  }
  modal.find('.modal-title').text(title);
  modal.find('.modal-body p').text(body);
})    