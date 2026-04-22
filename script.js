window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if(loader){
        loader.style.display = "none";
    }
});

setTimeout(function(){
    const loader = document.getElementById("loader");
    if(loader){
        loader.style.display = "none";
    }
},3000);

function toggleMenu(){
    document.getElementById("nav").classList.toggle("show");
}

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){
bookingForm.addEventListener("submit", function(e){
e.preventDefault();
alert("Booking Submitted Successfully!");
this.reset();
});
}

let reviews = document.querySelectorAll(".review");
let current = 0;

if(reviews.length > 0){
setInterval(()=>{
reviews[current].classList.remove("active");
current = (current + 1) % reviews.length;
reviews[current].classList.add("active");
},3000);
}

function toggleFaq(el){
let p = el.nextElementSibling;
p.style.display = p.style.display === "block" ? "none" : "block";
}
