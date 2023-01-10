import { CategoryButton } from "./components/CategoryButton.js";
import {db as dataDB} from "./data.js"

const db = dataDB;

export function getData(i){
    switch(i){
        case 0:
            /// About education
            document.getElementById("infospace").innerHTML = writeList(db.edu);
            break;
        case 1:
            /// About work
            document.getElementById("infospace").innerHTML = writeList(db.xp);
            break;
        case 2:
            /// About me
            var str = "";
            var myAge = getAge();
            var meLs = "Hei mitt navn er Isak Hølleand og jeg er " + myAge + " år gammel og studerer informatikk.";
            for(i=0; i<db.aboutMe.length;i++){
                meLs += "<br>"+db.aboutMe[i];
            }
            str += "<h3>" + meLs + "</h3>\n";
            str += "<h3>" + db.data + "</h3>\n";
            str += writeSimpleList("Språk",db.languages);
            str += writeSimpleList("Kvalifikasjoner",db.qualifications);
            str += writeSimpleList("Sertifikater",db.sertificates);
            str += writeSimpleList("Volleyball",[db.sport]);
        

            document.getElementById("infospace").innerHTML = str;
            break;
        case 3:
            /// About my programming skills
            document.getElementById("infospace").innerHTML = writeSimpleList("Programmeringsspråk", db.programmingLanguages);
            break;
    }
}


function writeList(ls){
    var str = "";
    for(let i=0; i < ls.length; i++){
        str += "<div><h2>" + ls[i].title + ",  " + ls[i].company + " | " + ls[i].time + "</h2>\n";
        str += "<h3>" + ls[i].info + "</h3></div>\n<br>";
    }
    return str;
}

function writeSimpleList(title,ls){
    var str = "<h2>" + title + "</h2>\n";
    for(let i=0; i < ls.length; i++){
        str += "<h3>" + ls[i] + "</h3>\n";
    }
    return str;
}
function getAge(){
    var today = new Date();
    var myBirthday = new Date(db.me.birth[2],db.me.birth[1]-1,db.me.birth[0]);
    var monthdiff = today.getMonth() - myBirthday.getMonth();
    var myAge = Math.abs(today.getFullYear() - myBirthday.getFullYear());
    if(monthdiff<0) {myAge--;}
    return myAge;
}


const buttonContainer = document.getElementById("category_buttons");

buttonContainer.appendChild(CategoryButton({text: "Utdanning", href: "education.html"}));

buttonContainer.appendChild(CategoryButton({text: "Jobb", href: "jobs.html"}));

buttonContainer.appendChild(CategoryButton({text: "Programmeringsspråk", href: "programming.html"}));

buttonContainer.appendChild(CategoryButton({text: "Om meg", href: "about.html"}));

getData(0);