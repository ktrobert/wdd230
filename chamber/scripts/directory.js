const url = "https://raw.githubusercontent.com/ktrobert/wdd230/main/chamber/directory.json";
//the following code is for grid and list, not sure if I need to put before or after url.
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#businessgrid");
// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
//end of grid and list button
async function getDirectoryData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
        //console.table(data.prophets);
    displayDirectory(data.business);
}

getDirectoryData(url);

const displayDirectory = (businesses) => {
    const cards = display; //document.querySelector('.busi'); // select the output container element
    businesses.forEach((business) => {
        // Create elements to add to the div.cards element
        let portrait = document.createElement('img');
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h4')
        let p = document.createElement('p');
        let a = document.createElement('a');



        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${business.companyName}`;
        h3.textContent = `${business.phoneNumber}`;
        p.textContent = `${business.address}`;
        a.textContent = `${business.url}`;
        a.setAttribute('href', `${business.url}`)
            // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', business.imageurl);
        portrait.setAttribute('alt', `${business.companyName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '200');

        // Append the section(card) with the created elements
        card.appendChild(portrait);
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(a);

        cards.appendChild(card);
    })
}