const title = document.getElementById("title");
const desc = document.getElementById("desc");
const sname = document.getElementById("name");

title.innerText = "My Love, My heart, My cutiepie<3";
desc.innerText = "Happy 20th birthday to a beautiful soul!I wish you a birthday filled with endless joy, cherished moments, and the warmth of those who love you. May this year bring you closer to your dreams and shower you with countless blessings.";
sname.innerText = "";

let slideIndex = 0;
showSlides();

// Next/previous controls
document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let slides = document.querySelectorAll('.slides img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}   
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

