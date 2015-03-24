$(document).ready(function(){
	var investTotal = 0;
	var currentTotal = 0;
	$("td:contains('00.00')").each(function() {
	  var units = Number($(this).next().attr('uv'));
	  var nav = Number($("nobr:contains('Closing Balance')").parent().next().attr('uv'));
	  var currentValue = (units*nav).toFixed(2);
	  if (!isNaN(currentValue)) {
		  if (currentValue < Number($(this).attr('uv'))) {
		    $(this).append('<strong style="color:red"> - '+currentValue+'</strong>');	
		  }
		  else if (currentValue > Number($(this).attr('uv'))) {
		    $(this).append('<strong style="color:green"> - '+currentValue+'</strong>');	
		  }
		  else {
		  	$(this).append("<strong> - "+currentValue+"</strong>");	
		  }
	    investTotal = investTotal + Number($(this).attr('uv'));
		currentTotal = currentTotal + Number(currentValue);	
      }
	});
	
	$("td:contains('00.00')").last().width(350);
	$("nobr:contains('Closing Balance')").parent().next().next().next().append("<strong>Total</strong>");
	$("nobr:contains('Closing Balance')").parent().next().next().next().next().append(investTotal+" - "+currentTotal.toFixed(2));
});