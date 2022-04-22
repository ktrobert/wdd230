var copyright_element = document.querySelector("#copyright");
var year = new Date().getFullYear();
copyright_element.innerHTML = "© " + year + " | Kendra Roberts | Utah";


var last_updated_element = document.querySelector("#last_updated");
var lastModified = document.lastModified;
last_updated_element.innerHTML = "Last Updated: " + lastModified;