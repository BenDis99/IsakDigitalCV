import {getData} from "./data.js"

const data = getData(1);

console.log(data)

document.getElementById("infospace").innerHTML = data;