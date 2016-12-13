$(document).ready(function() {
	document.querySelector(".arrowUpOnes").addEventListener("mouseenter", function() {
		var textHolder = $("#textOnes").attr("bmfont-text");
		if (parseInt(textHolder.text) == 9){
			var number = 1;
		} else {
			var number = parseInt(textHolder.text) + 1;
		}
		$("#textOnes").attr("bmfont-text","color: black; text: " + number + ";");
	});
	document.querySelector(".arrowUpTens").addEventListener("mouseenter", function() {
		var textHolder = $("#textTens").attr("bmfont-text");
		if (parseInt(textHolder.text) == 5){
			var number = 0;
		} else {
			var number = parseInt(textHolder.text) + 1;
		}
		$("#textTens").attr("bmfont-text","color: black; text: " + number + ";");
	});
	document.querySelector(".arrowUpHundreds").addEventListener("mouseenter", function() {
		var textHolder = $("#textHundreds").attr("bmfont-text");
		if (parseInt(textHolder.text) == 1){
			var number = 0;
		} else {
			var number = parseInt(textHolder.text) + 1;
		}
		$("#textHundreds").attr("bmfont-text","color: black; text: " + number + ";");
	});
	
	document.querySelector(".arrowDownOnes").addEventListener("mouseenter", function() {
		var textHolder = $("#textOnes").attr("bmfont-text");
		if (parseInt(textHolder.text) == 0){
			var number = 9;
		} else {
			var number = parseInt(textHolder.text) - 1;
		}
		$("#textOnes").attr("bmfont-text","color: black; text: " + number + ";");
	});
	document.querySelector(".arrowDownTens").addEventListener("mouseenter", function() {
		var textHolder = $("#textTens").attr("bmfont-text");
		if (parseInt(textHolder.text) == 0){
			var number = 5;
		} else {
			var number = parseInt(textHolder.text) - 1;
		}
		$("#textTens").attr("bmfont-text","color: black; text: " + number + ";");
	});
	document.querySelector(".arrowDownHundreds").addEventListener("mouseenter", function() {
		var textHolder = $("#textHundreds").attr("bmfont-text");
		if (parseInt(textHolder.text) == 0){
			var number = 1;
		} else {
			var number = parseInt(textHolder.text) - 1;
		}
		$("#textHundreds").attr("bmfont-text","color: black; text: " + number + ";");
	});
	
	document.querySelector("#okButton").addEventListener("mouseenter", function() {
		var textOnes = $("#textOnes").attr("bmfont-text").text;
		var textTens = $("#textTens").attr("bmfont-text").text;
		var textHundreds = $("#textHundreds").attr("bmfont-text").text;
		
		var number = textHundreds + textTens + textOnes;
		$("#loadingGif").attr("visible", true);
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
			console.log(msg['sprites']['front_default']);
			$("#pokeImgEntity").attr('src', msg['sprites']['front_default']);
			
			
			
			$("#nameText").attr('bmfont-text', "text: Name: " + hoofdLetterGebruik(msg['name']) + "; color:black;");
			var types = msg['types']
			if (types[1]){
				$("#typeText").attr('bmfont-text', "text: Type: " + hoofdLetterGebruik(types[1]['type']['name']) + "/" + hoofdLetterGebruik(types[0]['type']['name']) + "; color:black;");
			} else {
				$("#typeText").attr('bmfont-text', "text: Type: " + hoofdLetterGebruik(types[0]['type']['name']) + "; color:black;");
			}
			setTimeout(function(){
				$("#loadingGif").attr("visible", false);
			},500);
		}
		
	});
	
}