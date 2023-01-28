function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}



const copyright_element = document.querySelector("#copyright");
const year = new Date().getFullYear();
copyright_element.innerHTML = `© ${year} | Kendra Roberts | Utah`;


const last_updated_element = document.querySelector("#last_updated");
last_updated_element.innerHTML = `Last Updated: ${document.lastModified}`;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
);

datefield.innerHTML = `<span>${fulldate}</span>`;