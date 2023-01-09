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
        str += "<section><h2>" + ls[i].title + ",  " + ls[i].company + " | " + ls[i].time + "</h2>\n";
        str += "<h3>" + ls[i].info + "</h3></section>\n<br>";
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
const button1 = document.createElement('button');
button1.textContent = "Utdanning"
button1.onclick = async () => getData(0);
buttonContainer.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent = "Jobb"
button2.onclick = async () => getData(1);
buttonContainer.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent = "Programmeringsspråk"
button3.onclick = async () => getData(3);
buttonContainer.appendChild(button3);

const button4 = document.createElement('button');
button4.textContent = "Om meg"
button4.onclick = async () => getData(2);
buttonContainer.appendChild(button4);
getData(0);