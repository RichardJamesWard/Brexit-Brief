

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
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s until Brexit";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);



/////////////////////////////////////////////////////// NAV BUTTONS ///////////////////////////////////////////////////////
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


/////////////////////////////////////////////////////// AJAX REQUEST ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$.ajax({
	/// Make AJAX request to get 12 employee profiles in json format
 	url: 'https://newsapi.org/v2/everything?q=brexit&sources=the-economist,daily-mail,bbc-news,independent,the-telegraph,the-guardian-uk,buzzfeed,metro,mirror,financial-times,business-insider-uk,metro&from=2018-01-17&pageSize=100&apiKey=97c4df5c08b9410cb044133df517b0dc',
  	dataType: 'json',

	success: function(data) {

		let news = data.articles;
		var article = ` `;
		var popular= ` `;
		var i = 0;
		var a = 0;

		$.each(news, function( index, value ) {

			var description = news[index].description;
			if(description.length > 150) description = description.substring(0,150);
			description += 	`...`;

			var headline = news[index].title;
			if(headline.length > 75) headline = headline.substring(0,75);
			headline += 	`...`;



			article += `<a href="${news[index].url}" target="_blank" id="link-${a++}">
							<div  class="box" id="article-${i++}">
								<img class=image src="${news[index].urlToImage}"> 
								<div class="text">
									<h1 class=headline >${headline}</h1>
									<p class=description>${description}</p>
									
								</div>	
								<p class="stamp"><strong>${news[index].source.name}</strong> at: ${news[index].publishedAt}</>
							</div>
						</a>`;
  		 	
  		 	$("#news-reports").html(article);

  		 	popular = `<div id="popular">
  		 				<h1><span>Most Read</span></h1>
  		 				<div class="number">1</div><div class="pophead"><a href="${news[0].url}" target="_blank">${news[0].title}</a></div>
  		 				<div class="number">2</div><div class="pophead"><a href="${news[1].url}" target="_blank">${news[1].title}</a></div>
  		 				<div class="number">3</div><div class="pophead"><a href="${news[2].url}" target="_blank">${news[2].title}</a></div>
  		 				<div class="number">4</div><div class="pophead"><a href="${news[3].url}" target="_blank">${news[3].title}</a></div>
  		 				<div class="number">5</div><div class="pophead"><a href="${news[4].url}" target="_blank">${news[4].title}</a></div>
  		 			   </div>`

  		 	$("#link-1").after(popular)
  		});
  	}	
});







