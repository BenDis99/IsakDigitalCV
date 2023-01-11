import {getData} from "./data.js"

const db = getData(0);

console.log(db)

document.getElementById("infospace").innerHTML = db;