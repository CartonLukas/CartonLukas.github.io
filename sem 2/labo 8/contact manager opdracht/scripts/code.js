let personen = [];
let index= -1;

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    if(document.getElementsByClassName("invalid").length === 0) {
        let persoon = {};
        //nieuwe persoon bewaren

        vulPersoonOpBasisVanUserInterface(persoon);
        if (index === -1) {
            personen.push(persoon);
            //toevoegen aan interne lijst
            VoegPersoonToeAanLijstInUserInterface(persoon);
        }
        // indien ok, bewaar de ingegeven data.
        else {
            updateLijst(persoon)
        }

        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

        // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten

    }
};

const  vulPersoonOpBasisVanUserInterface= (persoon)=>{
    persoon.voornaam= document.getElementById("txtVoornaam").value.trim();
    persoon.familienaam=document.getElementById("txtFamilienaam").value.trim();
    persoon.geboorteDatum= document.getElementById("txtGeboorteDatum").value.trim();
    persoon.email= document.getElementById("txtEmail").value.trim();
    persoon.aantalKinderen = document.getElementById("txtAantalKinderen").value.trim();
};
const VoegPersoonToeAanLijstInUserInterface= (persoon) => {

    let lstPersonen= document.getElementById("lstPersonen");
    let option= document.createElement("option");
    index= personen.length-1;
    option.id= index;
    option.text= persoon.voornaam+" "+persoon.familienaam;
    option.addEventListener("click", toonPersoon)
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex= persoon.length-1;
};

const updateLijst= (persoon) =>{
    personen[index]= persoon
    document.getElementById(index).innerHTML = persoon.voornaam + " " + persoon.familienaam;
}




// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let lstPersonen= document.getElementById("lstPersonen");
    lstPersonen.selectedIndex= -1;
    index=-1;

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    let  inputElm = document.querySelectorAll('input[type=text]')

    inputElm.forEach((elem)=>{
        elem.value="";
    });
};

const toonPersoon= (e) =>{
    index= e.target.id;
    console.log(index)
    console.log(personen);
    document.getElementById("txtVoornaam").value = personen[index].voornaam;
    document.getElementById("txtFamilienaam").value = personen[index].familienaam;
    document.getElementById("txtGeboorteDatum").value = personen[index].geboorteDatum;
    document.getElementById("txtEmail").value = personen[index].email;
    document.getElementById("txtAantalKinderen").value = personen[index].aantalKinderen;
}




// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("change", toonPersoon );
};

window.addEventListener("load", setup);