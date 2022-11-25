var db = {
    "me": {
        "name": "Isak Hølleland",
        "birth": [21,11,1999]
    },
    "edu": [
        {
            "title": "Bachelor i Datavitenskap", 
            "company":"Universitetet i Bergen", 
            "time": "Høst 2019 - Vår 2022", 
            "info":"Informatikkstudie"
        },
        {
            "title":"Forskerlinje", 
            "company": "Danielsen Videregående skole",
            "time": "Høst 2015 - Vår 2018", 
            "info": "Forskerlinjen er realfag med matematikk og forskerfag"
        }
    ],

    "xp": [
        {
            "title": "Gruppeleder", 
            "company": "Universitetet i Bergen",
            "time": "Jan 2021 - nå", 
            "info": "Fagassistent"
        },
        {
            "title": "Grønland bustader", 
            "company": "Alver kommune",
            "time": "Jan 2020 - nå", 
            "info": "Hjalp personer med funksjonshemning i bufelleskap."
        },
        {
            "title": "Støttekontakt", 
            "company": "Lindås/Alver kommune", 
            "time": "Aug 2016 - nå", 
            "info": "Går ut på å aktivisere ungdommer, for å gi de en bedre hverdag."
        },
        {
            "title": "Grønland bustader/Hjemmetjenesten", 
            "company": "Meland kommune",
            "time": "Jun 2018 - Des 2019", 
            "info": "Jeg var også i hjemmetjenesten før kommuneskifte."
        },
        {
            "title": "Manuell Tester",
            "company": "Knowit", 
            "time": "Mar 2014", 
            "info": "Under Operasjon dagsverk på ungdomsskolen, var jeg tester i Knowit Bergen og fant noen bugs."
        },
        {
            "title": "Vara", 
            "company": "Ungdomsrådet i Meland kommune", 
            "time": "Nov 2014 - Jun 2015", 
            "info": "Var vara i ungdomsrådet til kommunen, vi kom med forslag for forbedring av trivsel og miljø for ungdom blandt annet."
        },
        {
            "title": "Konfirmantleder", 
            "company": "Tentro Nordhordland",
            "time": "Aug 2015 - April 2016 & Aug 2017 - April 2018", 
            "info": "Jeg var leder for konfirmanter som konfirmerer seg i frikirker i Nordhordland."
        },
        {
            "title": "Gårdsgutt", 
            "company": "Magnar Askelands gård", 
            "time": "Nov 2014", 
            "info": "Under jobbuke på ungdomsskolen."
        }
    ],
    "programmingLanguages": [
        "Java : Avansert",
        "C : Grunnleggende",
        "Python : Grunnleggende",
        "Haskell : Grunnleggende",
        "Html : Grunnleggende",
        "CSS : Grunnleggende",
        "JavaScript : Grunnleggende",
        "SQL : Grunnleggende"
    ],
    "languages": [
        "Norsk : Morsmål",
        "Engelsk : Flytende"
    ],
    "aboutMe": ["Jeg er gift","elsker programmering og er svært fasinert av datamaskiner."],
    "data":"Jeg er ganske flink med dataprogrammer, har konstruert en flott 3D-tegning av Nordhordlandsbrua, og er generelt sett flink til å sette meg inn i nye programmer. Her har jeg også tegnet deler av en hytte i 3D også. Jeg hjelper også en eldre mann med rådføring og teknisk hjelp innen bruk av dataprogrammer. Har vært tekniker på møter i to kirker, der jeg styrte lyd og/eller tekst, viste filmer og styrte powerpointer (live). Har også drevet med app-utvikling med Android Studio ogXcode på privaten.",
            
    "qualifications":[
        "Nøyaktig",
        "Pliktoppfyllende",
        "Ansvarsfull",
        "Serviceinnstilt",
        "Lærevillig",
        "Sosialt utadvendt",
        "Positiv og har godt humør"
    ],
    "sport": "Jeg har spilt volleyball i rundt 6 år og ble Norgesmester i mixlag for skolelag på VGS i 2016. Var også fast kaptein for Kvernbit sitt juniorlag på Frekhaug hvor jeg også spilte på senior.",
    "sertificates": [
        "Førerkort Klasse B"
    ],
    "about-db": "@Author Isak Hølleland, 16.Jan 2022"
};

function getData(i){
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
    for(i=0; i < ls.length; i++){
        str += "<section><h2>" + ls[i].title + ",  " + ls[i].company + " | " + ls[i].time + "</h2>\n";
        str += "<h3>" + ls[i].info + "</h3></section>\n<br>";
    }
    return str;
}

function writeSimpleList(title,ls){
    var str = "<h2>" + title + "</h2>\n";
    for(i=0; i < ls.length; i++){
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