import {getData} from "./data.js"

const data = getData(3);

console.log(data)

document.getElementById("infospace").innerHTML = data;