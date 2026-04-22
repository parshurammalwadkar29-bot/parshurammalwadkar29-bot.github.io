window.onload=function(){
document.getElementById("loader").style.display="none";
};

function toggleMenu(){
document.getElementById("nav").classList.toggle("show");
}

document.getElementById("bookingForm").addEventListener("submit",function(e){
e.preventDefault();
alert("Booking Submitted Successfully! We will contact you soon.");
this.reset();
});

let reviews=document.querySelectorAll(".review");
let current=0;

setInterval(()=>{
reviews[current].classList.remove("active");
current=(current+1)%reviews.length;
reviews[current].classList.add("active");
},3000);

function toggleFaq(el){
let p=el.nextElementSibling;
p.style.display=p.style.display==="block"?"none":"block";
}
