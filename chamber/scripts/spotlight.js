const spotURL = "https://raw.githubusercontent.com/ktrobert/wdd230/main/chamber/directory.json";
//end of grid and list button

async function getDirectoryData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showDirectories(data);
}

getDirectoryData(spotURL);

function showDirectories(data){
    let businesses = data.business;

    let randomIndex = Math.floor(Math.random()*businesses.length);
    let randomDirectory1 = businesses[randomIndex];
    businesses.splice(randomIndex, 1);
    
    randomIndex = Math.floor(Math.random()*businesses.length);
    let randomDirectory2 = businesses[randomIndex];
    businesses.splice(randomIndex, 1);
    
    randomIndex = Math.floor(Math.random()*businesses.length);
    let randomDirectory3 = businesses[randomIndex];
   
    const article1 = document.querySelector("#spotlight1");
    displayDirectory(randomDirectory1,article1);
    const article2 = document.querySelector("#spotlight2");
    displayDirectory(randomDirectory2,article2)
    const article3 = document.querySelector("#spotlight3");
    displayDirectory(randomDirectory3,article3)
}





const displayDirectory = (business, article) => {
        // Create elements to add to the div.cards element
        let portrait = document.createElement('img');
        let card = document.createElement('section');
        let h2 = document.createElement('h4');
        let h3 = document.createElement('h4')
        let p = document.createElement('p');
        let a = document.createElement('a');


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

        article.appendChild(card);
}