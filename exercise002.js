import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchDataOld = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    console.log(response);
    const json = await response.json();
    console.log(JSON.stringify(json))
  } catch (error) {
    console.log(error);
  }
};

//fetchData(jsonTypicode);

//Extension
const ingredient = ['vodka', 'gin', 'tequila', 'chocolate'];
const api = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
const random = Math.floor(Math.random() * ingredient.length);
console.log(ingredient[random]);
fetchData(api+ encodeURI(ingredient[random]));


