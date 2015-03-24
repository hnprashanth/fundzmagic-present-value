$(document).ready(function(){
	var investTotal = 0;
	var currentTotal = 0;
	$("td:contains('00.00')").each(function() {
	  var units = Number($(this).next().attr('uv'));
	  var nav = Number($("nobr:contains('Closing Balance')").parent().next().attr('uv'));
	  var currentValue = (units*nav).toFixed(0);
	  if (!isNaN(currentValue)) {
		  var investValue = Number($(this).attr('uv'));
		  var percent = (((currentValue*100)/investValue)-100).toFixed(0);
		  if (currentValue < Number($(this).attr('uv'))) {
		    $(this).append('<strong style="color:red"> - '+currentValue+' ('+percent+'%)</strong>');	
		  }
		  else if (currentValue > Number($(this).attr('uv'))) {
		    $(this).append('<strong style="color:green"> - '+currentValue+' ('+percent+'%)</strong>');	
		  }
		  else {
		  	$(this).append('<strong> - '+currentValue+' ('+percent+'%)</strong>');	
		  }
	    investTotal = investTotal + Number($(this).attr('uv'));
		currentTotal = currentTotal + Number(currentValue);	
      }
	});
	var totalPercent = (((currentTotal*100)/investTotal)-100).toFixed(0);
	$("td:contains('00.00')").last().width(700);
	$("nobr:contains('Closing Balance')").parent().next().next().next().append("<strong>Total</strong>");
	$("nobr:contains('Closing Balance')").parent().next().next().next().next().append(investTotal+" - "+currentTotal.toFixed(0)+" ("+totalPercent+"%)");
});