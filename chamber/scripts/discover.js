const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { image.removeAttribute('data-src'); };
};
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// Days since last visit code

let today = new Date();
let lastVisit = Number(window.localStorage.getItem("last-visit"));
let daysSince = Math.round((Date.now() - lastVisit) / 84600000);
console.log(daysSince);
const lastVisitDisplay = document.querySelector("#lastVisit");
lastVisitDisplay.textContent = daysSince;

lastVisit = Date.now();
localStorage.setItem("last-visit", lastVisit);

// Number of Visits code

const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);