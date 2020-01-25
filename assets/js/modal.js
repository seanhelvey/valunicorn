$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var dada = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  var body = "";
  if (dada === "Meter") {
  	title = "Value Meter";
  	body = "A higher level on the meter indicates good value, while a lower level implies relatively poor value. A high level on the meter corresponds with falling market prices which present opportunities for value investors. A low value on the meter corresponds with rising market prices and less opportunities for value investors. Our meter is based on risk adjusted changes in credit spreads. These credit spreads tend to rise when there is volatility or fear in the market, and fall in more stable markets when the sentiment is more optimistic."
  } else if (dada === "Vane") {
  	title = "Price Forecast";
  	body = "The market price forecast tends to move in the opposite direction of the business value meter. When the value meter is high, the price forecast will indicate that market prices are heading down. When the value meter is low, the price forecast will point up. Don't forget that value investors want market prices to go down, so that they can purchase stable dividend paying companies at lower prices! Value investors don't want prices to go up like speculators do.";
  } else if (dada === "Allocation") {
  	title = "Asset Allocation";
  	body = "The portfolio asset allocation is an actionable indicator that will help you make investment decisions. It doesn't matter whether you have a 401k, IRA, or a brokerage account. If the value meter is high and market prices are heading down, then your investable assets should be allocated toward stable dividend paying companies. If the value meter is low and prices are heading up, then your investable assets may remain in cash until conditions become more favorable.";
  } else if (dada === "Ranking") {
  	title = "Selection Process";
  	body = "Businesses in our ranking are highly liquid and have paid increasing dividends for over two decades, in addition to meeting other criteria. Our list contains the best dividend paying stocks currently available to value investors.";
  } else if (dada === "Sustainability") {
  	title = "Sustainability";
  	body = "Our methodology for choosing investments is focused on value and sustainability.";
  }
  modal.find('.modal-title').text(title);
  modal.find('.modal-body p').text(body);
})
