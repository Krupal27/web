const URL = "https://jsonplaceholder.typicode.com/users";
const factpera = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFact = async () => {
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json()
    console.log(data);
    // console.log(data[2].name);
    // factpera.innerHTML = data
}

btn.addEventListener('click' , getFact)