//defining DOM elements
var myButton  = document.getElementById("btn");
var container = document.getElementById("container");
var loc 		  = document.getElementById("location");
var temperature = document.getElementById("current-temp");
var icon = document.getElementById("weather-icon");

var today = document.getElementById("day");
var dayOne = dayTwo = dayThree = dayFour = dayFive = "";

var futureDayOne = document.getElementById("future-day-one");
var futureDayTwo = document.getElementById("future-day-two");
var futureDayThree = document.getElementById("future-day-three");
var futureDayFour = document.getElementById("future-day-four");
var futureDayFive = document.getElementById("future-day-five");

var futureTempNow =document.getElementById("tempNow");
var futureTempA 	=document.getElementById("tempA");
var futureTempB 	=document.getElementById("tempB");
var futureTempC 	=document.getElementById("tempC");
var futureTempD 	=document.getElementById("tempD");

var dayOneCond = document.getElementById("dayOne-condition");
var dayTwoCond = document.getElementById("dayTwo-condition");
var dayThreeCond = document.getElementById("dayThree-condition");
var dayFourCond = document.getElementById("dayFour-condition");
var dayFiveCond = document.getElementById("dayFive-condition");

var TimeNow	 = document.getElementById("timeNow-condition"); 
var TimeAIcon	 = document.getElementById("timeA-condition"); 
var TimeBIcon	 = document.getElementById("timeB-condition");
var TimeCIcon	 = document.getElementById("timeC-condition");
var TimeDIcon	 = document.getElementById("timeD-condition"); 

var futureTimeA = document.getElementById("future-timeA"); 
var futureTimeB = document.getElementById("future-timeB");
var futureTimeC = document.getElementById("future-timeC");
var futureTimeD = document.getElementById("future-timeD");

//Get Users Location in  Cordinates
 function getLocation()
	 {
			 if (navigator.geolocation) {
				  navigator.geolocation.getCurrentPosition(showPosition);
			 } else {
				  console.log("Geolocation is not supported by this browser.");
			 }

		function showPosition(position)
			 {
				 var lat  = position.coords.latitude;
				 var long = position.coords.longitude;
			 
			// current weather request
			 var ourRequest = new XMLHttpRequest();
			 // Forecast Request
			 var forecastRequest = new XMLHttpRequest();

			 	forecastRequest.open("GET","http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&appid=9d646800231533d6e07ae7d77f155987");
			 	ourRequest.open("GET","http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=9d646800231533d6e07ae7d77f155987");

			 	// Forecast Data 
			 	forecastRequest.onload = function()
					{
						var ourData = JSON.parse(forecastRequest.responseText);
								console.log(ourData);
								
									//converting UTC time to Hours
									var timeA = new Date(ourData.list[1].dt * 1000).getHours()-3
									var iconCodeA = ourData.list[1].weather[0].id;
									TimeAIcon.className += "owf owf-"+iconCodeA+" owf-2x";
					
									var timeB = new Date(ourData.list[2].dt * 1000).getHours()-3
									var iconCodeB = ourData.list[2].weather[0].id;
									TimeBIcon.className += "owf owf-"+iconCodeB+" owf-2x";
					
									var timeC = new Date(ourData.list[3].dt * 1000).getHours()-3
									var iconCodeC = ourData.list[3].weather[0].id;
									TimeCIcon.className += "owf owf-"+iconCodeC+" owf-2x";
					
									var timeD = new Date(ourData.list[4].dt * 1000).getHours()-3
									var iconCodeD = ourData.list[4].weather[0].id;
									TimeDIcon.className += "owf owf-"+iconCodeD+" owf-2x";
					
										 if(timeA === -3){
											 timeA = 21
										 }else if(timeB === -3){
											 timeB = 21
										 }else if(timeC == -3){
											 timeC = 21
										 }else{
											 timeD = 21
										 } 
					
										
							
					
						var location = ourData.city.name;
						var country = ourData.city.country;
						var d = new Date();
						var day = d.getDay();
					
			
							if (day == 1){
								day 	 	= "Monday";
								dayOne 	= "Tue";
								dayTwo 	= "Wed";
								dayThree = "Thur";
								dayFour 	= "Fri";
								dayFive 	= "Sat";
							
							}else if(day == 2){
								day = "Tuesday"
								dayOne 	= "Tomorrow"
								dayTwo 	= "Thur"
								dayThree = "Fri"
								dayFour 	= "Sat"
								dayFive 	= "Sun"
								
							} else if(day == 3){
								day = "Wednesday"
								dayOne 	= "Tomorrow"
								dayTwo 	= "Fri"
								dayThree = "Sat"
								dayFour 	= "Sun"
								dayFive 	= "Mon"
								
							}else if(day == 4){
								day = "Thursday"
								dayOne 	= "Tomorrow"
								dayTwo 	= "Sat"
								dayThree = "Sun"
								dayFour 	= "Mon"
								dayFive 	= "Tue"
								
							}else if(day == 5){
								day = "Friday"
								dayOne 	= "Tomorrow"
								dayTwo 	= "Sun"
								dayThree = "Mon"
								dayFour 	= "Tue"
								dayFive 	= "Wed"
								
							}else if(day == 6){
								day = "Saturday"
								dayOne 	= "Tomorrow"
								dayTwo 	= "Mon"
								dayThree = "Tue"
								dayFour 	= "Wed"
								dayFive 	= "Thur"
								
							}else if(day==0){
								day = "Sunday"
								dayOne 	= "Tomorrow"
								dayTwo 	= "Tue"
								dayThree = "Wed"
								dayFour 	= "Thur"
								dayFive 	= "Fri"	
							}
					
						var tempNow = Math.floor((ourData.list[0].main.temp))-273;
						var tempA = Math.floor((ourData.list[1].main.temp))-273;
						var tempB = Math.floor((ourData.list[2].main.temp))-273;
						var tempC = Math.floor((ourData.list[3].main.temp))-273;
						var tempD = Math.floor((ourData.list[4].main.temp))-273;
					
						futureTempNow.insertAdjacentHTML("beforeend",tempNow+"º");
						futureTempA.insertAdjacentHTML("beforeend",tempA+"º");
						futureTempB.insertAdjacentHTML("beforeend",tempB+"º");
						futureTempC.insertAdjacentHTML("beforeend",tempC+"º");
						futureTempD.insertAdjacentHTML("beforeend",tempD+"º");
					
						today.insertAdjacentHTML("beforeend",day);
						loc.insertAdjacentHTML("beforeend",location +","+ country );
						futureTimeA.insertAdjacentHTML("beforeend",timeA+":00");
						futureTimeB.insertAdjacentHTML("beforeend",timeB+":00");
						futureTimeC.insertAdjacentHTML("beforeend",timeC+":00");
						futureTimeD.insertAdjacentHTML("beforeend",timeD+":00");
						
					
				}

				//Current Weather Datuuuh
				ourRequest.onload = function()
				
				{ 
						var CurrentData = JSON.parse(ourRequest.responseText);
						var temp = Math.floor((CurrentData.main.temp - 273));
						var minTemp =  Math.floor((CurrentData.main.temp_min - 273));
						var maxTemp =  Math.floor((CurrentData.main.temp_max - 273));
						var iconCode = CurrentData.weather[0].id;
						icon.className += "owf owf-"+iconCode+" owf-3x"
						TimeNow.className += "owf owf-"+iconCode+" owf-2x"
						temperature.insertAdjacentHTML("beforeend",temp+"º");
				}
	
			//sending weather requests to The API
			ourRequest.send();
			forecastRequest.send();
		}

	}
//Get user Location(Cordinates)
getLocation();