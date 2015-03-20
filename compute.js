$(document).ready(function(){
	$("td:contains('00.00')").each(function() {
	  var units = $(this).next().attr('uv');
	  var nav = $("nobr:contains('Closing Balance')").parent().next().attr('uv');
	  var currentValue = (units*nav).toFixed(2);
	  if (!isNaN(currentValue)) {
	    $(this).append("<b> - "+currentValue+"</b>");
  }
      $("td:contains('00.00')").last().width(350);
	});
});