let global = {
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_SOORTKAARTEN:6,
    AANTAL_KAARTEN: 12,
    VOORIMAGES:"images/",
    ACHTERIMAGES: ".png",
    KAARTENVOLGORDE:[],
    BESCHIKBAREKAARTEN: [],
    IDGEDRAAIDEKAART:0,
    IDNIEUWEKAART:0,
    GEVONDENPAREN:0


}

const setup = () => {
   vulLijstbeschikbareKaarten();

   let speelveld =document.getElementById("speelveld");

   let i=0;
console.log(global.BESCHIKBAREKAARTEN)

    while (global.BESCHIKBAREKAARTEN.length !==0 ){
    let kaart = document.createElement("img");
    kaart.src=global.VOORIMAGES+"achterkant"+global.ACHTERIMAGES;
    kaart.classList.add("kaart");

    kaart.id=i.toString();
    kaart.addEventListener("click", klik);
    speelveld.appendChild(kaart)
        global.KAARTENVOLGORDE.push(getRandomKaartUitBeschikbareKaarten())

      i++;

  }
}

const  vulLijstbeschikbareKaarten= () =>{

    for(let i=1; i<=global.AANTAL_SOORTKAARTEN;i++)
    {
      global.BESCHIKBAREKAARTEN.push(i);
        global.BESCHIKBAREKAARTEN.push(i);
    }
}
const getRandomKaartUitBeschikbareKaarten = () =>{
    let index = Math.floor( (Math.random()*global.BESCHIKBAREKAARTEN.length));
    let kaart = global.BESCHIKBAREKAARTEN[index];
   global.BESCHIKBAREKAARTEN.splice(index,1);
   return kaart;
}


const klik = (e) =>{

    if(!e.target.classList.contains("omgedraaid"))
    {
        global.IDNIEUWEKAART=e.target.getAttribute("id");
       if(global.IDGEDRAAIDEKAART !==0)
       {

           e.target.src=global.VOORIMAGES+"kaart"+global.KAARTENVOLGORDE[global.IDNIEUWEKAART]+global.ACHTERIMAGES;

           setTimeout(wait,500)

       }
       else
       {
           global.IDGEDRAAIDEKAART= global.IDNIEUWEKAART;
           e.target.classList.add("omgedraaid")
           e.target.src=global.VOORIMAGES+"kaart"+global.KAARTENVOLGORDE[global.IDGEDRAAIDEKAART]+global.ACHTERIMAGES;
       }
    }

}

const wait= () => {
    let id = global.IDNIEUWEKAART;
    if (controleGelijkeKaart(id)) {
        gelijkeKaarten(id)
    } else {
        document.getElementById(global.IDGEDRAAIDEKAART).classList.add("fout")
        document.getElementById(id).classList.add("fout");
        setTimeout(draaiterug, 500)

    }
}

const draaiterug = () =>{
    let k1 =document.getElementById(global.IDGEDRAAIDEKAART);
    k1.classList.remove("omgedraaid");
    k1.classList.remove("fout");
    k1.src=global.VOORIMAGES+"achterkant"+global.ACHTERIMAGES
    global.IDGEDRAAIDEKAART=0;
    let k2=document.getElementById(global.IDNIEUWEKAART)
    k2.src=global.VOORIMAGES+"achterkant"+global.ACHTERIMAGES
    k2.classList.remove("fout")
}




const controleGelijkeKaart = (id)=>{
    let kaartID1= global.KAARTENVOLGORDE[global.IDGEDRAAIDEKAART];
    console.log(kaartID1);
    let kaartID2= global.KAARTENVOLGORDE[id];
    console.log(kaartID2)
    return kaartID2===kaartID1;
}

const gelijkeKaarten = (id)=>{
    console.log(id);
    console.log(global.IDGEDRAAIDEKAART)

    let kaart1 = document.getElementById(id);
    let kaart2 = document.getElementById(global.IDGEDRAAIDEKAART);

    kaart1.removeEventListener("clik", klik);
    kaart1.removeEventListener("clik", klik);
    kaart1.src=global.VOORIMAGES+"kaart"+global.KAARTENVOLGORDE[id]+global.ACHTERIMAGES;
    kaart2.src=global.VOORIMAGES+"kaart"+global.KAARTENVOLGORDE[global.IDGEDRAAIDEKAART]+global.ACHTERIMAGES
    kaart1.classList.add("goed");
    kaart2.classList.add("goed")
    global.GEVONDENPAREN++;
    if(global.GEVONDENPAREN===global.AANTAL_SOORTKAARTEN)
    {
        einde()
    }
    else
    {
        setTimeout(verwijderPaar,500)
    }


}

const verwijderPaar = () =>{
    let k1=document.getElementById(global.IDGEDRAAIDEKAART);
    k1.style.visibility="hidden";
    k1.classList.remove("goed")

    let k2 =document.getElementById(global.IDNIEUWEKAART);
    k2.style.visibility="hidden";
    k2.classList.remove("goed")

    global.IDGEDRAAIDEKAART=0;
    global.IDNIEUWEKAART=0;
}

const einde= () =>{
    window.alert("je bent gewonnen")
    for(let i =0; i<=global.KAARTENVOLGORDE.length-1;i++)
    {
       let k=document.getElementById(i.toString());
       k.style.visibility="visible"


    }
}
window.addEventListener("load", setup);