/*/escondemos el descuento en una caja de manera aleatoria
var hideCode = function(){
	var numRand = getRandom(4);
	$(".guess.box").each(function(index, value){
		if(numRand == index){
			$(this).append("<span id='has_discount'></span>");
			return false;
		}
	});
}
hideCode();*/

// manejadores a botones
$(document).ready(function(){
	 isVegetarian = false;

	//Cambiar menú vegetariano
	$("#vegOn").click(function(){
		if(isVegetarian === false){
				isVegetarian = true;
		}
	});

	//Restaurant menú
	$("#restoreMe").click(function (){
		if(isVegetarian === true){
			isVegetarian = false;
		}
	});
});//End document ready

var isVegetarian = false;
var $pescado,$carne;

var removeFish = function(){
	$pescado = $(".fish").parent().parent().detach();
};

//cambiar menú vegetariano
$("#vegOn").click(function(){
	if(isVegetarian === false){
		removeFish();
		isVegetarian = true;
	}
});

var replaceHamburger = function(){
	var portobello = '<li class="portobello"><em>Champion Portobello</em></li>';
	$(".hamburger").replaceWith(portobello);
};

//Cambiar menú vegetariano
$("#vegOn").click(function(){
	if(isVegetarian === false){
		removeFish();
		replaceHamburger();
		isVegetarian = true;
	}
});

var restoreFish = function(){
	$(".menu_entrees li").first().before($pescado);
};

//Restaurar Menú
$("#restoreMe").click(function(){
	if(isVegetarian === true){
		isVegetarian = false;
		restoreFish();
	}
});

var replacePortobello = function(){
	var hamburger = '<li class="hamburger">Carne de hamburguesa</li>';
	$(".portobello").replaceWith(hamburger);
};

//Restaurar menú
$("#restoreMe").click(function(){
	if(isVegetarian === true){
		isVegetarian = false;
		restoreFish();
		replacePortobello();
	}
});


var replaceHamburger = function(){
	var portobello = "<li class='portobello'><em>Champinon portobello</em></li>";
	$(".hamburger").replaceWith(portobello);
	//Agregar icono vegetariano
	$(".portobello").parent().parent().addClass("veg_leaf");
}

var insertTofu = function(){
	$(".meat").after('<li class="tofu"><em>Tofu</em></li>');
	$carne = $(".meat").detach();
	//Agregar ícono
	$(".tofu").parent().parent().addClass('veg_leaf');
};

var replacePortobello = function(){
	var hamburger = '<li class="hamburger">Carne de hamburguesa</li>';
	$(".hamburger").parent().parent().removeClass("veg_leaf");
};

var insertMeatInOrder = function(){
	$(".tofu").each(function(){
		$(this).after($carne[index]);
	});
	$(".tofu").remove();
	//Eliminar el ícono vegetariano a la carne
	$(".meat").parent().parent().removeClass("veg_leaf");
};
