
/* 

    @author: Arijit Saha
	@desc: js for index.html (Header & Footer Template)
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
  


