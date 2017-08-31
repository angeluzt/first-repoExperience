//Efectos de rayoz
$(document).ready(function(){
		var createLightingEffect = function(selector, timeout){
			$(selector).fadeIn('fast').fadeOut('fast');
			setTimeout(createLightingEffect, timeout,selector,timeout);
		};

		createLightingEffect('#lightning1',4000);
		createLightingEffect('#lightning2',5000);
		createLightingEffect('#lightning3',7000);
});

// Contar los clicks sobre la cabeza del monstruo
var monster = {headClick: 0, eyeClick: 0, noseCick: 0, mouthClick: 0};
var clickCounter = function(object){
	if (monster[object.data.property] < 9) {
		monster[object.data.property] += 1;
		alert(monster[object.data.property] );
	}else{
		monster[object.data.property] = 0;
	}
};

$('#head').click({property: 'headClick'}, clickCounter);
$('#eyes').click({property: 'eyeClick'}, clickCounter);
$('#nose').click({property: 'noseClick'}, clickCounter);
$('#mouth').click({property: 'mouthClick'}, clickCounter);
