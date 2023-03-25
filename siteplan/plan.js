const copyright_element = document.querySelector("#copyright");
const year = new Date().getFullYear();
copyright_element.innerHTML = `© ${year} | Kendra Roberts | Utah`;


const last_updated_element = document.querySelector("#last_updated");
last_updated_element.innerHTML = `Last Updated: ${document.lastModified}`;