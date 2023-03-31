const url = "https://raw.githubusercontent.com/ktrobert/wdd230/main/bountifulFoods/fresh.json";
//the following code is for grid and list, not sure if I need to put before or after url.
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#fruitgrid");
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
    displayDirectory(data.fruit);
}

getDirectoryData(url);

const displayDirectory = (fruits) => {
    const cards = display; //document.querySelector('.fruit'); // select the output container element
    fruit.forEach((fruit) => {
        // Create elements to add to the div.cards element
        let portrait = document.createElement('img');
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h4')
        let p = document.createElement('p');
        let a = document.createElement('a');


        h2.textContent = `${fruit.name}`;
        h3.textContent = `${fruit.id}`;
        p.textContent = `${fruit.family}`;
        a.textContent = `${fruit.nutritions}`;
        a.setAttribute('href', `${fruit.url}`)
            // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', fruit.imageurl);
        portrait.setAttribute('alt', `${fruit.name}`);
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