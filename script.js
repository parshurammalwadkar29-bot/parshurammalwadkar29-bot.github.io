window.addEventListener("load", function () {
let loader = document.getElementById("loader");
if(loader){
loader.style.display = "none";
}
});

setTimeout(function(){
let loader = document.getElementById("loader");
if(loader){
loader.style.display = "none";
}
},3000);

function toggleMenu(){
document.getElementById("nav").classList.toggle("show");
}

let form = document.getElementById("bookingForm");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();
alert("Booking Submitted Successfully! We will contact you soon.");
form.reset();
});
}

let reviews = document.querySelectorAll(".review");
let current = 0;

if(reviews.length > 0){
setInterval(function(){
reviews[current].classList.remove("active");
current = (current + 1) % reviews.length;
reviews[current].classList.add("active");
},3000);
}

function toggleFaq(el){
let p = el.nextElementSibling;
p.style.display = p.style.display === "block" ? "none" : "block";
}
window.addEventListener("load", function () {
let loader = document.getElementById("loader");
if(loader){
loader.style.display = "none";
}
});

function toggleMenu(){
document.getElementById("nav").classList.toggle("show");
}

function openMail(){
window.open(
"https://mail.google.com/mail/?view=cm&fs=1&to=parshurammalwadkar29@gmail.com&su=Farm%20Equipment%20Rental%20Inquiry&body=Hello,%20I%20want%20to%20rent%20farm%20equipment.%20Please%20share%20details.",
"_blank"
);
}
