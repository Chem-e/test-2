// write your JS code here


function initiallize(){
	console.log("start");
}

let message="";
function display(x){
	console.log(x);
	message+=x;
	console.log(message);
	document.querySelector(".card-header").innerHTML=message;

}
function sent() {
	
	alert("Your message has been sent!");
	message="  &nbsp;";
	console.log(message);
	document.querySelector(".card-header").innerHTML=message;
}

