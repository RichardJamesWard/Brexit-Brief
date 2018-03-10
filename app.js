
function getYesterdaysDate() {
    var date = new Date();
    date.setDate(date.getDate()-5);
    return date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2)  + '-' + ('0' + date.getDate()).slice(-2);
}

console.log(getYesterdaysDate());

$('#bbc-news, #independent, #the-guardian-uk, #metro, #mirror, #the-economist, #business-insider-uk, #bloomberg').attr('checked', true); 


$("#deselect").click(function() {
	$(".checkbox-custom").prop('checked', false);
});

$("#select").click(function() {
	$(".checkbox-custom").prop('checked', true);
});


/////////////////////////////////////////////////////// COUNTDOWN ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Set the date we're counting down to
var countDownDate = new Date("March 29, 2019 23:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="clock"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s until Brexit";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);



/////////////////////////////////////////////////////// CURRENCY CALCULATIONS /////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$.ajax({
 	url: `http://www.apilayer.net/api/historical&date=${getYesterdaysDate()}?access_key=`,
  	dataType: 'json',

	success: function(data) {

		let rate = data.quotes;
		let USDrate = 1;
		let GBPrate = Number(`${rate.USDGBP}`)
		let EURrate = Number(`${rate.USDEUR}`)
		let Readout = ``;

		GBP2USD= USDrate/GBPrate
		GBP2EUR= EURrate/GBPrate

		function precisionRound(number, precision) {
 			var factor = Math.pow(10, precision);
  			return Math.round(number * factor) / factor;
		}

		YGBP2USD = (precisionRound(GBP2USD, 6));
		YGBP2EUR = (precisionRound(GBP2EUR, 6));

		window.YGBP2USD = YGBP2USD;
		window.YGBP2EUR = YGBP2EUR;

	  	}	
});



$.ajax({
 	url: 'http://www.apilayer.net/api/live?access_key=',
  	dataType: 'json',

	success: function(data) {

		let rate = data.quotes;
		let USDrate = 1;
		let GBPrate = Number(`${rate.USDGBP}`)
		let EURrate = Number(`${rate.USDEUR}`)
		let Readout = ``;

		GBP2USD= USDrate/GBPrate
		GBP2EUR= EURrate/GBPrate

		function precisionRound(number, precision) {
 			var factor = Math.pow(10, precision);
  			return Math.round(number * factor) / factor;
		}

		GBP2USD = (precisionRound(GBP2USD, 6));
		GBP2EUR = (precisionRound(GBP2EUR, 6));


		Readout += `BASE GBP: £1.00 	&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp	USD: $${GBP2USD}`	

		if (YGBP2USD>GBP2USD) { Readout += `<span class="down">&#x25BC</span>`} //-${(precisionRound((YGBP2USD-GBP2USD)/YGBP2USD*100, 3))}%
			else if (YGBP2USD<GBP2USD) { Readout += `<span class="up">&#x25B2</span>`} //+${(precisionRound((GBP2USD-YGBP2USD)/YGBP2USD*100, 3))}%

		Readout += `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 	EUR: €${GBP2EUR}`
		
		if (YGBP2EUR>GBP2EUR) { Readout += `<span class="down">&#x25BC</span>`} //-${(precisionRound((YGBP2EUR-GBP2EUR)/YGBP2EUR*100, 3))}%
			else if (YGBP2EUR<GBP2EUR) { Readout += `<span class="up">&#x25B2</span>`} // +${(precisionRound((GBP2EUR-YGBP2EUR)/YGBP2EUR, 3))}%		


		$("#rates").html(Readout);



	  	}	
});

/////////////////////////////////////////////////////// NAV /////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$("#press").click(function() {
 $("#pundits, #people").removeClass( "active" );
 $(".button").addClass( "inactive" );
 $( "#news-reports" ).show();
 $(this).addClass("active");
});

$("#pundits").click(function() {
 $("#press, #people").removeClass( "active" );
 $(".button").addClass( "inactive" );
 $( "#news-reports" ).hide();
 $(this).addClass("active");
});

$("#people").click(function() {
 $("#press, #pundits").removeClass( "active" );
 $(".button").addClass( "inactive" );
 $( "#news-reports" ).hide();
 $(this).addClass("active");
});


/////////////////////////////////////////////////////// DEFAULT ARTICLES///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function GenerateNews(sources) {

$.ajax({
 	url: `https://newsapi.org/v2/everything?q=brexit&from=${getYesterdaysDate()}&sortBy=publishedAt&sources=${sources}&pageSize=100&apiKey=`,
  	dataType: 'json',

	success: function(data) {

		let news = data.articles;
		var article = ` `;
		var popular= ` `;
		var i = 0;
		var a = 0;

		$.each(news, function( index, value ) {

			var description = news[index].description;
			// if(description.length > 150) description = description.substring(0,150);
			// description += 	`...`;

			var headline = news[index].title;
			// if(headline.length > 75) {headline = headline.substring(0,75);
			// headline += 	`...`;}

			var date = news[index].publishedAt;
			if(date.length > 10) date = date.substring(0,10);



			article += `<a href="${news[index].url}" target="_blank" id="link-${a++}">
							<div  class="box" id="article-${i++}">
								<img class=image src="${news[index].urlToImage}"> 
								<img class=logo src="img/${news[index].source.id}.png"> 
								<div class="text">
									<h1 class=headline >${headline}</h1>
									<p class=description>${description}</p>
									
								</div>	
								<p class="stamp"><strong>${news[index].source.name}</strong> on ${date}</p>
							</div>
						</a>`;
  		 	
  		 	$("#news-reports").html(article);

  		 	popular = `<div class="popular">
  		 				<h1><span>Most Recent</span></h1>
  		 				<a href="${news[0].url}" target="_blank"><div class="pop-container"><img class=image src="${news[0].urlToImage}"><div class="number">1</div><div class="poptitle">${news[0].title}<span class="pop-stamp" style="color:darkred;font-style:italic;"> ${news[0].source.name}</span></div><p class="stamp"><strong>${news[0].source.name}</strong> on ${date}</p></div></a>
  		 				<a href="${news[1].url}" target="_blank"><div class="pop-container"><img class=image src="${news[1].urlToImage}"><div class="number">2</div><div class="poptitle">${news[1].title}<span class="pop-stamp" style="color:darkred;font-style:italic;"> ${news[1].source.name}</span></div><p class="stamp"><strong>${news[1].source.name}</strong> on ${date}</p></div></a>
  		 				<a href="${news[2].url}" target="_blank"><div class="pop-container"><img class=image src="${news[2].urlToImage}"><div class="number">3</div><div class="poptitle">${news[2].title}<span class="pop-stamp" style="color:darkred;font-style:italic;"> ${news[2].source.name}</span></div><p class="stamp"><strong>${news[2].source.name}</strong> on ${date}</p></div></a>
  		 				<a href="${news[3].url}" target="_blank"><div class="pop-container"><img class=image src="${news[3].urlToImage}"><div class="number">4</div><div class="poptitle">${news[3].title}<span class="pop-stamp" style="color:darkred;font-style:italic;"> ${news[3].source.name}</span></div><p class="stamp"><strong>${news[3].source.name}</strong> on ${date}</p></div></a>
  		 				<a href="${news[4].url}" target="_blank"><div class="pop-container"><img class=image src="${news[4].urlToImage}"><div class="number">5</div><div class="poptitle">${news[4].title}<span class="pop-stamp" style="color:darkred;font-style:italic;"> ${news[4].source.name}</span></div><p class="stamp"><strong>${news[4].source.name}</strong> on ${date}</p></div></a>
  		 			   </div>`

  		 	$("#link-0").before(popular)
  		 	$("#link-1").after(popular)
  		 	$("#article-0").addClass("big-image")
  		 	$("#article-6, #article-7, #article-8, #article-9, #article-10, #article-11, #article-23, #article-24, #article-25, #article-26, #article-27, #article-28, #article-74, #article-75, #article-76, #article-77, #article-78, #article-79, #article-80, #article-81, #article-82").addClass("third-h")
  		 	$("#article-12, #article-18, #article-22, #article-30, #article-36, #article-42, #article-51,   #article-62, #article-63, #article-64, #article-83, #article-87").addClass("third-w")
  		 	$("#article-13, #article-17, #article-21, #article-29, #article-35, #article-41, #article-50,  #article-84, #article-88").addClass("two-third-w")
  		 	$("#article-16,  #article-45,  #article-99").addClass("big-image")
  		});
  	}	
});
}

GenerateNews("the-economist,bloomberg,bbc-news,independent,the-guardian-uk,metro,mirror,business-insider-uk");

/////////////////////////////////////////////////////// SELECTION MENU/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



$( "#generate" ).click(function() {
	let sources = ``


$("input:checkbox").each(function(){
    var $this = $(this);

    if($this.is(":checked")){
        sources +=`${$this.attr("id")},`
        console.log(sources);
        GenerateNews(sources)
    }
});

 GenerateNews(sources);
});
