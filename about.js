var db = {
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
            "time": "Jan 2020 - Jan 2021", 
            "info": "Hjalp personer med funksjonshemning i bufelleskap."
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
            "title": "Støttekontakt", 
            "company": "Lindås/Alver kommune", 
            "time": "Aug 2016 - dags dato", 
            "info": "Går ut på å aktivisere ungdommer, for å gi de en bedre hverdag."
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

    "other":{
            "data":"Jeg er ganske flink med dataprogrammer, har konstruert en flott 3D-tegning av Nordhordlandsbrua, og er generelt sett flink til å sette meg inn i nye programmer. Her har jeg også tegnet deler av en hytte i 3D også. Jeg hjelper også en eldre mann med rådføring og teknisk hjelp innen bruk av dataprogrammer. Har vært tekniker på møter i to kirker, der jeg styrte lyd og/eller tekst, viste filmer og styrte powerpointer (live). Har også drevet med app-utvikling med Android Studio ogXcode på privaten.",
            "programspråk": [
                {"Java": "Avansert"},
                {"Python": "Grunnleggende"},
                {"Haskell": "Grunnleggende"},
                {"Html": "Grunnleggende"},
                {"CSS": "Grunnleggende"},
                {"JavaScript": "Grunnleggende"},
                {"SQL": "Grunnleggende"}
            ],
            "Språk": [
                {"Norsk": "Morsmål"},
                {"Engelsk": "Flytende"}
            ],
            "kvalifikasjoner":[
                "Nøyaktig",
                "Pliktoppfyllende",
                "Ansvarsfull",
                "Serviceinnstilt",
                "Lærevillig",
                "Sosialt utadvendt",
                "Positiv og har godt humør"
            ],
            "Volleyballspiller": "Jeg har spilt volleyball i rundt 6 år og ble Norgesmester i mixlag for skolelag på VGS i 2016. Var også fast kaptein for Kvernbit sitt juniorlag på Frekhaug hvor jeg også spilte på senior.",
            "sertifikater": [
                "Førerkort Klasse B"
            ]
    },
    "about-db":"@Author Isak Hølleland, 20.Jan 2021"
};
/*
<h3>Universitetet i bergen | Aug 2019 - dags dato</h3>
        <h4>Datavitenskap – Bachelor 3 år</h4>
*/
document.getElementById("studies").innerHTML = writeCVDetails("edu");
function writeCVDetails(strLs){
    //Education
    var str = "<h1>Utdanning</h1>\n";
    str += writeList(db.edu);
    //Experience
    str += "<h1>Erfaringer</h1>\n";
    str += writeList(db.xp);
    return str;
}

function writeList(ls){
    var str = "";
    for(i=0;i < ls.length; i++){
        str += '<section>' + "<h2>" + ls[i].title + ",  " + ls[i].company + " | " + ls[i].time + "</h2>\n";
        str += "<h3>" + ls[i].info + "</h3></section>\n<br>";
    }
    return str;
}

