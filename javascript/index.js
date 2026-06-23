//Mayonnaise Projekt
projekt1 = new Projekt(
    1,
    "Mayonnaise herstellen",
    "Um den Herstellungsprozess von Mayonnaise zu verfeinern werden die besten Wissenschaftler des Landes zusammengesucht. Das soll ermöglichen diesen kulinarischen Genuss noch viel besser zu machen.",
    "./img/Projektlogo.webp",
    "2026-06-7");
console.log(projekt1);
aufgabenbereich1 = new Aufgabenbereich(
    1,
    "Herstellung",
    "Die einzelnen Schritte zur Herstellung der Mayonnaise");
artefakt11 = new Artefakt(1,
    "Eier Schlagen",
    "Eier in den Topf packen und mit den Schneebesen Schlagen.",
    1,
    0.5);
artefakt12 = new Artefakt(
    2,
    "Umrühren",
    "Ganz viel rühren",
    1,
    0.2);

aufgabenbereich_projekt1 = new Projekt_Aufgabenbereich(1,1);
artefakt_projekt1 = new Projekt_Artefakt(1,1);
artefakt_projekt2 = new Projekt_Artefakt(1,2);

//Schlaf verbessern 
projekt2 = new Projekt(
    2,
    "Schlaf verbessern",
    "Der andauernde Schlafmangel unter Menschen, speziell Informatikern ist ein großes Problem, unter dem zwei Drittel von Ihnen leiden",
    "./img/schlaf.webp",
    "2030-06-01");
console.log(projekt2);
aufgabenbereich2 = new Aufgabenbereich(
    2,
    "Schlafexperimente",
    "Es werden verschiedene Experimente durchgeführt.");
artefakt21 = new Artefakt(
    3,
    "Medikatentest",
    "Vorgesehen ist die Testung von verschieden Substanzen",
    2,
    100);
artefakt22 = new Artefakt(
    4,
    "Eine Nacht drüber Schlafen",
    "Durch den Schlaf werden die Ergebnisse der Experimente besser verarbeitet und die Informationen werden besser verknüpft.",
    2,
    8);

aufgabenbereich_projekt2 = new Projekt_Aufgabenbereich(2,2);
artefakt_projekt3 = new Projekt_Artefakt(2,3);
artefakt_projekt4 = new Projekt_Artefakt(2,4);


//Rakete bauen 
projekt3 = new Projekt(
    3,
    "Rakete bauen",
    "Eine Rakete bauen. Rakete hoch ins All. Rakete mit viel Treibstoff und viel Kawumm.🚀",
    "./img/rakete.wepb",
    "2040-01-01");
console.log(projekt3);
aufgabenbereich3 = new Aufgabenbereich(
    3,
    "Bauphase",
    "Die Rakete wird gebaut.");
artefakt31 = new Artefakt(
    5,
    "Rakete zusammenschweißen",
    "Mit einem Schweißgerät und so",
    3,
    10000);
artefakt32 = new Artefakt(
    6,
    "Rakete aufstellen",
    "Wir nehmen die Rakete und schieben sie wo anders hin",
    3,
    40);

aufgabenbereich_projekt1 = new Projekt_Aufgabenbereich(3,3);
artefakt_projekt5 = new Projekt_Artefakt(3,5);
artefakt_projekt6 = new Projekt_Artefakt(3,6);

let projekte = [projekt1, projekt2, projekt3];
let artefakte = [artefakt11, artefakt12, artefakt21, artefakt22, artefakt31, artefakt32];
let projekt_artefakte = [artefakt_projekt1, artefakt_projekt2, artefakt_projekt3, artefakt_projekt4, artefakt_projekt5, artefakt_projekt6];

let translations = new Map([["English", "../languages/eng.json"], ["German", "../languages/ger.json"]]);

function GetPlannedTimeOfProject (ProjektId) {
        let plannedTime = 0   ;
        for(i = 0; i < projekt_artefakte.length;i++)
        {
            if(projekt_artefakte[i]._projektId == ProjektId)
            {
                console.log("d1");
                for(j=0;j<artefakte.length;j++)
                {
                    if(artefakte[j]._Id == projekt_artefakte[i]._artefaktId)
                    {
                        
                        plannedTime = plannedTime + artefakte[j]._Geplante_Arbeitszeit;
                    }
                }
            }
        }
        
            
           
        return plannedTime;
    }

console.log(GetPlannedTimeOfProject(3))

function sort_project_anfangsdatum(){
    projekte.sort(
    (a, b) => new Date(a._startdatum).getTime() - new Date(b._startdatum).getTime()
    );
}

function sort_project_projektlaufzeit(){
    projekte.sort(
    (a, b) => GetPlannedTimeOfProject(a._id) - GetPlannedTimeOfProject(b._id)
    );
}

projekte = [projekt2, projekt1, projekt3];

console.log(
    projekte.map(p => ({
        id: p._id,
        startdatum: p._startdatum
    }))
);

sort_project_anfangsdatum();

console.log(
    projekte.map(p => ({
        id: p._id,
        startdatum: p._startdatum
    }))
);


projekte = [projekt2, projekt1, projekt3];


console.log(
    projekte.map(p => ({
        id: p._id,
        laufzeit: GetPlannedTimeOfProject(p._id)
    }))
);

sort_project_projektlaufzeit();

console.log(
    projekte.map(p => ({
        id: p._id,
        laufzeit: GetPlannedTimeOfProject(p._id)
    }))
);

function createUnsentDataObject()
{
    console.log("creatingObject")
    let data = {}
    data.Projects = []
    data.Artefacts = []
    data.Tasks = []
    localStorage.setItem("unsentData", JSON.stringify(data))
}

function sendProjectToAPI(Project)
{
    let response = fetch("https://scl.fh-bielefeld.de/WBA/projectsAPI",{
        body: JSON.stringify(Project),
        cache: "no-cache",
        credentials: "same-origin",
        headers:{
            
        },
        method: 'POST',
        mode:"cors",
        redirect:"follow",
        referrer:'no-referrer'
    })
    .then(response => response.json)
    .catch(
        addUnsentProject(Project)
    )

    if(response.statusCode == 200){
        return True
    }
    else
    {
        addUnsentProject(Project)
        console.log("Project Could not be sent, saving to local Storage")
    }
}

function addUnsentProject(Project)
{
    
    let data = localStorage.getItem("unsentData")
    
    if(!data){
        createUnsentDataObject()
    }
    data=JSON.parse(data)
    console.log(data)

    
    
}


window.onload = function(){
        sendProjectToAPI(projekt2)
}