import {getData, writeSimpleList} from "./data.js"

function getAge(){
    var today = new Date();
    var myBirthday = new Date(db.me.birth[2],db.me.birth[1]-1,db.me.birth[0]);
    var monthdiff = today.getMonth() - myBirthday.getMonth();
    var myAge = Math.abs(today.getFullYear() - myBirthday.getFullYear());
    if(monthdiff<0) {myAge--;}
    return myAge;
}

const db = getData(2);
/// About me
var str = "";
var myAge = getAge();
var meLs = "Hei mitt navn er Isak Hølleand og jeg er " + myAge + " år gammel og studerer informatikk.";
for(let i=0; i<db.aboutMe.length;i++){
    meLs += "<br>"+db.aboutMe[i];
}
str += "<h3>" + meLs + "</h3>\n";
str += "<h3>" + db.data + "</h3>\n";
str += writeSimpleList("Språk",db.languages);
str += writeSimpleList("Kvalifikasjoner",db.qualifications);
str += writeSimpleList("Sertifikater",db.sertificates);
str += writeSimpleList("Volleyball",[db.sport]);


document.getElementById("infospace").innerHTML = str;