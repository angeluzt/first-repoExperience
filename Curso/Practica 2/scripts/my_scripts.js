$(document).ready(function(){
	$('#header').click(function(){
		alert('Venta nocturna hoy!');
	});
	$('.guess_box').click(function(){
		$('.guess_box p').remove();
		var discount = Math.floor((Math.random()*10 + 5));
		var discount_msg = "<p>Ganaste un descuento del"+discount+" %</p>";
		
		$(this).append(discount_msg); // This me ayuda a saber sobre que elemento estoy dando click
	});
});