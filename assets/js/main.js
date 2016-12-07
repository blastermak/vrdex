$(document).ready(function() {
	$(".arrowUpOnes").on("click", function(){
		var textHolder = $("#textOnes").attr("bmfont-text");
		if (parseInt(textHolder.text) == 9){
			var number = 1;
		} else {
			var number = parseInt(textHolder.text) + 1;
		}
		$("#textOnes").attr("bmfont-text","color: black; text: " + number + ";");
	});
	$(".arrowUpTens").on("click", function(){
		var textHolder = $("#textTens").attr("bmfont-text");
		if (parseInt(textHolder.text) == 5){
			var number = 0;
		} else {
			var number = parseInt(textHolder.text) + 1;
		}
		$("#textTens").attr("bmfont-text","color: black; text: " + number + ";");
	});
	$(".arrowUpHundreds").on("click", function(){
		var textHolder = $("#textHundreds").attr("bmfont-text");
		if (parseInt(textHolder.text) == 1){
			var number = 0;
		} else {
			var number = parseInt(textHolder.text) + 1;
		}
		$("#textHundreds").attr("bmfont-text","color: black; text: " + number + ";");
	});
	
	$(".arrowDownOnes").on("click", function(){
		var textHolder = $("#textOnes").attr("bmfont-text");
		if (parseInt(textHolder.text) == 0){
			var number = 9;
		} else {
			var number = parseInt(textHolder.text) - 1;
		}
		$("#textOnes").attr("bmfont-text","color: black; text: " + number + ";");
	});
	$(".arrowDownTens").on("click", function(){
		var textHolder = $("#textTens").attr("bmfont-text");
		if (parseInt(textHolder.text) == 0){
			var number = 5;
		} else {
			var number = parseInt(textHolder.text) - 1;
		}
		$("#textTens").attr("bmfont-text","color: black; text: " + number + ";");
	});
	$(".arrowDownHundreds").on("click", function(){
		var textHolder = $("#textHundreds").attr("bmfont-text");
		if (parseInt(textHolder.text) == 0){
			var number = 1;
		} else {
			var number = parseInt(textHolder.text) - 1;
		}
		$("#textHundreds").attr("bmfont-text","color: black; text: " + number + ";");
	});
	
	$("#okButton").on("click", function(){
		var textOnes = $("#textOnes").attr("bmfont-text").text;
		var textTens = $("#textTens").attr("bmfont-text").text;
		var textHundreds = $("#textHundreds").attr("bmfont-text").text;
		
		var number = textHundreds + textTens + textOnes;
		getData(number);
	});
});

function hoofdLetterGebruik(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function getData(dataString){
	$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon/' + dataString,
		method: 'GET',
		dataType: "json",
		success: function(msg) {
			$("#pokeImgEntity").attr('src', msg['sprites']['front_default']);
			
			
			$("#nameText").attr('bmfont-text', "text: Name: " + hoofdLetterGebruik(msg['name']) + "; color:black;");
			var types = msg['types']
			if (types[1]){
				$("#typeText").attr('bmfont-text', "text: Type: " + hoofdLetterGebruik(types[1]['type']['name']) + "/" + hoofdLetterGebruik(types[0]['type']['name']) + "; color:black;");
			} else {
				$("#typeText").attr('bmfont-text', "text: Type: " + hoofdLetterGebruik(types[0]['type']['name']) + "; color:black;");
			}
		}
	});
}