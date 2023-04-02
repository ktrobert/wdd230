const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

const fruit1 = document.getElementById("fruit1");
const fruit2 = document.getElementById("fruit2");
const fruit3 = document.getElementById("fruit3");
let fruitData;

async function getFruitData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data)
    fruitData = data;
    createFruits(data,fruit1);
    createFruits(data,fruit2);
    createFruits(data,fruit3);
    
}

function createFruits(data, element){
    for(let i = 0; i < data.length; i++){
        let fruitName = data[i].name;
        let option = document.createElement("option");
        option.setAttribute("value", i);
        option.innerHTML = fruitName;
        element.appendChild(option);
    }
}


function showFormOutput(output){
    let table = document.createElement("table");
    showRow(["Form Output"],table);
    showRow(["Name:",output.name],table);
    showRow(["Email:",output.email],table);
    showRow(["Phone:",output.phone],table);
    showRow(["Fruit1:",fruitData[output.fruit1].name],table);
    showRow(["Fruit2:",fruitData[output.fruit2].name],table);
    showRow(["Fruit3:",fruitData[output.fruit3].name],table);
    showRow(["Comment:",output.comment],table);
    let date = new Date().toDateString();
    showRow(["Date:",date],table);

    showRow(["","","Fruit Name","Carbohydrates","Proten","Fat","Sugar","Calories"],table);
    showFruitRow(output.fruit1,table);
    showFruitRow(output.fruit2,table);
    showFruitRow(output.fruit3,table);



    document.getElementById('formOutput').appendChild(table);
}

function showFruitRow(fruit,table){
    let fru = fruitData[fruit];
    showRow(["","",fru.name,
    fru.nutritions.carbohydrates,
    fru.nutritions.protein,
    fru.nutritions.fat,
    fru.nutritions.sugar,
    fru.nutritions.calories],table);
}



function showRow(data,table){
    let row = document.createElement('tr');
    for(let i = 0; i < data.length; i++){
        let item = document.createElement('td');
        item.innerHTML = data[i];
        row.appendChild(item);
    }
    table.appendChild(row);
}

getFruitData(url);


function handleSubmit(fruit) {
    fruit.preventDefault();

    const data = new FormData(fruit.target);

   const value = Object.fromEntries(data.entries());

    console.log({ value });
    showFormOutput(value);

    let drinks = Number(window.localStorage.getItem("drinks"));
    window.localStorage.setItem("drinks",drinks + 1);
  }


  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);