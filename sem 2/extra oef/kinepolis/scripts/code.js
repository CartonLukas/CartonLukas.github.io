Global={
    stoelen: [],
    urlBezet: "./img/seat_unavail.png",
    urlVrij:"./img/seat_avail.png",
    urlSelect:"./img/seat_select.png",
    altBezet: "bezette stoel",
    altVrij: "vrije stoel",
    altSelect: "selecte stoel",
    Aantal_Stoelen_perRij: 6,
    Aantal_reserveer_Stoelen:3,

    Aantal_Stoelen:35

}

const setup = () => {
    document.getElementById("Btnfind").addEventListener("click", vindStoelen);



    HerzetZaal();

}

const vindStoelen = () =>{

    let nogStoelenVrij= false;
    let aanvaard = false
    let aantalRijen= Math.ceil(Global.Aantal_Stoelen/Global.Aantal_Stoelen_perRij);


    for(let rij =0; rij < aantalRijen && !aanvaard&& (rij*Global.Aantal_Stoelen_perRij) + Global.Aantal_reserveer_Stoelen < Global.Aantal_Stoelen;rij++) {



        for (let i = 0; i<Global.Aantal_Stoelen_perRij-Global.Aantal_reserveer_Stoelen+1&&!aanvaard; i++) {

            if (Global.stoelen[i+(rij*Global.Aantal_Stoelen_perRij)] === false ) {


                if (checkDeVolgendeStoelen(i,rij)) {
                    nogStoelenVrij= true;
                    if (GeefVolgende(i, rij)) {
                        aanvaard = true;
                    }

                }

            }
        }
    }
    if(nogStoelenVrij===false)
    {
        window.alert("geen stoelen meer vrij voor "+Global.Aantal_reserveer_Stoelen+" personen")
    }


}

const checkDeVolgendeStoelen=(i,rij)=>{

    let volgendeVrij = true
    for(let y=0; i<Global.Aantal_reserveer_Stoelen-1;i++)
    {
        if(Global.stoelen[i+(rij*Global.Aantal_Stoelen_perRij)+1]!==false)
        {
           volgendeVrij=false
        }
    }
    return volgendeVrij;
}

const GeefVolgende = (i,rij) =>{

    let stoelnummer = parseInt(i);
    let rijnummer = parseInt(rij)

    let tekst="Stoelen op rij "+ rijnummer+" stoel nummer "+ stoelnummer+"-"+(stoelnummer+Global.Aantal_reserveer_Stoelen);
    if(confirm(tekst) === true)
    {

        reserveerStoelen(rijnummer,stoelnummer);
        return true

    }
    else
    {
        return false
    }
}

const reserveerStoelen= (rij, stoel)=>
{
    let stoelnummer = parseInt(stoel);
    let rijnummer = parseInt(rij);

     for(let i=0;i<Global.Aantal_reserveer_Stoelen;i++)
     {
         Global.stoelen[(Global.Aantal_Stoelen_perRij*rijnummer)+stoelnummer+i]= true;
     }
    veranderStoelenImage(stoel,rij);
     slaOp()

}


const veranderStoelenImage = (stoel, rij)=>{
    let stoelnummer =  parseInt(stoel);
    let StoelenRijElementen = document.getElementsByClassName(rij);
    for(let i=0;i<Global.Aantal_reserveer_Stoelen;i++)
    {
        StoelenRijElementen[i+stoelnummer].src=Global.urlSelect;
        StoelenRijElementen[i+stoelnummer].alt=Global.altSelect;
    }
}

const slaOp = () =>{


    localStorage.setItem("Lukas_Carton.Kinepolis", JSON.stringify(Global.stoelen))
}

const HerzetZaal = () =>{
    let opgehaaldeStoelen= JSON.parse(localStorage.getItem("Lukas_Carton.Kinepolis"));
    controleOpgehaaldeStoelen(opgehaaldeStoelen);

 let zaal=document.getElementById("zaal");
 let i=0;
 let rijnummer=0;
  while (i<Global.Aantal_Stoelen)
  {


      let rij= createRij();
      if(Global.Aantal_Stoelen-i>Global.Aantal_Stoelen_perRij)
      {

          for(let y=0; y<Global.Aantal_Stoelen_perRij;y++)
          {
              rij.appendChild(createStoel(Global.stoelen[i+y], rijnummer))
          }
          zaal.append(rij)

          i=i+Global.Aantal_Stoelen_perRij;

      }
      else
      {

          for(let y=0; y<Global.Aantal_Stoelen-i;y++)
          {

              rij.appendChild(createStoel(Global.stoelen[i+y], rijnummer))

          }
          i=Global.Aantal_Stoelen
          zaal.append(rij)
      }
      rijnummer++;


  }

}
const controleOpgehaaldeStoelen = (opgehaaldeStoelen)=>{
    if(opgehaaldeStoelen !=null)
    {
        if(opgehaaldeStoelen.length<Global.Aantal_Stoelen)
        {
            for(let i=Global.Aantal_Stoelen-opgehaaldeStoelen.length; i<Global.Aantal_Stoelen;i++)
            {
                opgehaaldeStoelen.push(false);
            }
        }
        else
        {
            if(opgehaaldeStoelen.length<Global.Aantal_Stoelen)
            {
                opgehaaldeStoelen.slice(0,Global.Aantal_Stoelen)
            }
        }
        Global.stoelen= opgehaaldeStoelen;

    }
    else
    {
        for(let i=0; i<Global.Aantal_Stoelen;i++)
        {
            Global.stoelen.push(false);
        }
    }
}

const createRij = () =>{
    let rij = document.createElement("div");
    rij.classList.add("rij");
    return rij
}

const createStoel = (bezet, rijnummer) =>{
    let stoel = document.createElement("img");
    stoel.classList.add("stoel");
    stoel.classList.add(rijnummer)
    if(bezet)
    {
        stoel.src=Global.urlBezet;
        stoel.alt=Global.altBezet;
        stoel.classList.add("bezet")
    }
    else
    {
        stoel.src=Global.urlVrij;
        stoel.alt= Global.altVrij;
        stoel.classList.add("vrij");
    }
    return stoel;
}






window.addEventListener("load", setup);