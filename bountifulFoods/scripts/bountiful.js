function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function joinLocation() {
    location.href = "fresh.html";
}
/*
const copyright_element = document.querySelector("#copyright");
const year = new Date().getFullYear();
copyright_element.innerHTML = `© ${year} | Kendra Roberts | Utah`;
*/
/*
const last_updated_element = document.querySelector("#last_updated");
last_updated_element.innerHTML = `Last Updated: ${document.lastModified}`;
*/
// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");


// derive the current date using a date object
const now = new Date();
let dateString = '';
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
);
dateString = fulldate;

const dailyDeals = [
    '😴 Rest Day',
    '✨ Magic Monday: $10 Fill Your Bag',
    '🍹 2$ Tuesday',
    '🍓 Wildberry Wednesday',
    '☝️ Thursday: BOGO',
    '🥤 Fan Friday: Free Drinks with Member Card',
    '🎉 Super Saturday: Free Samples'
]
dateString += '   ' + dailyDeals[now.getDay()];

datefield.innerHTML = `<span>${dateString}</span>`;

/*
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
*/


let slideIndex = 0;
try{
showSlides();
}catch (error){

}
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


// Days since last visit code
/*
let today = new Date();
let lastVisit = Number(window.localStorage.getItem("last-visit"));
let daysSince = Math.round((Date.now() - lastVisit) / 84600000);
console.log(daysSince);
const lastVisitDisplay = document.querySelector("#lastVisit");
lastVisitDisplay.textContent = daysSince;

lastVisit = Date.now();
localStorage.setItem("last-visit", lastVisit);

*/

// Date update//
const copyright_element = document.querySelector("#copyright");
const year = new Date().getFullYear();
copyright_element.innerHTML = `© ${year} | Kendra Roberts | Utah`;


const last_updated_element = document.querySelector("#last_updated");
last_updated_element.innerHTML = `Last Updated: ${document.lastModified}`;
