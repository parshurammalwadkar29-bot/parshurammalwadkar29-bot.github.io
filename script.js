document.querySelector("form").addEventListener("submit", function(e){
e.preventDefault();
alert("Booking Submitted Successfully!");
this.reset();
});
