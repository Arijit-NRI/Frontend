
/* 

    @author: Arijit Saha
	@desc: js for all the html files 
	@file path from root: Ex ./index.js/

*/

var nrifintech="NRI TRAVEL";
var booking = `My Bookings`; 
var logout="Logout";
var home="Home";

// document.getElementById("nrifintech").innerHTML=nrifintech;
// document.getElementById("booking").innerHTML = booking; 
// document.getElementById("logout").innerHTML = logout;

document.querySelector(".nrifintech").innerHTML=nrifintech;
document.querySelector(".booking").innerHTML=booking;
document.querySelector(".logout").innerHTML=logout;
// document.querySelector(".home").innerHTML=home;

function togglepassword() {
	var x = document.getElementById("mypassword");
	var y=document.getElementById("mypassword-icon");
	if (x.type === "password") {
		
	  	
		y.src="./public/hide-eye.png";
	  x.type = "text";
	} else {
	  x.type = "password";
	  y.src="./public/eye-icon.svg";
	  y.class="hidden-eye";
	}
}

function on() {
	// document.getElementById("overlay").style.display = "block";
	document.querySelector(".cancel-overlay").style.display="block";
}
  
function off() {
	// document.getElementById("overlay").style.display = "none";
	document.querySelector(".cancel-overlay").style.display="none";
}

function onroute()
{
	document.querySelector(".route-overlay").style.display="block";
}
function offroute()
{
	document.querySelector(".route-overlay").style.display="none";
}
function homeonroute()
{
	document.querySelector(".home-route-overlay").style.display="block";
}
function homeoffroute()
{
	document.querySelector(".home-route-overlay").style.display="none";
}

  


