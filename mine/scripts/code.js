//to do verder automatisch afwerken mss klok

let aantalBommen;
let ontploft;
let aantalvlaggen;
let lengte;
let minuten;
let seconden;
let timer;


const setup = () => {
    document.getElementById("btnsubmit").addEventListener("click", bouwveld)
    document.getElementById("btnhelp").addEventListener("click", help)
    ontploft=false
    aantalvlaggen = 0;
    console.log("setup done");

    minuten=0;
    seconden=0;



}

const help = () => {
  window.alert("Het is te hopen dat je mine sweper kent anders kijk op wikipedia \n" +
               "je vult vakjes in door er op te klikken \n"+
                "je verandert tussen cijfers en vlaagen door op de buttons beneden te klikken\n"+
                "succes!!!")
}
const bouwveld = () => {
    let grote=document.getElementById("nmbgrote").value
    lengte=grote;
    console.log(grote);

    if(grote > 10)
    {
        window.alert("het veld kan maximum 10 groot zijn");
    }else {
        document.getElementById("btnsubmit").removeEventListener("click", bouwveld)
        aantalBommen = document.getElementById("nmbBommen").value
        console.log("bommen: " + aantalBommen);


        let veld = document.getElementById("veld")

        let arena = document.createElement("div")
        arena.setAttribute("id", "arena");

        veld.appendChild(arena);


        for (let i = 0; i < grote; i++) {
            arena.appendChild(maakrij(i));
            // console.log("i:"+i);
            for (let y = 0; y < grote; y++) {
                let rij = document.getElementById("rij" + i);
                rij.appendChild(bouwvak(i, y));
                //  console.log("y:"+y);

            }

        }
        arena.appendChild(createCijferButton());
        arena.appendChild(createVlagButton());
        arena.appendChild(bouwKlok());

        //start timer
        timer = setInterval(klok, 1000);
    }
}

const createCijferButton=() =>{
    let button = document.createElement("input");
    button.setAttribute("id", "btnCijfer")
    button.setAttribute("value", "cijfer");
    button.addEventListener("click", setcijfer);
    button.setAttribute("type", "button");
    return button;

}

const createVlagButton=() =>{
    let button = document.createElement("input");
    button.setAttribute("id", "btnVlag")
    button.setAttribute("value", "vlag");
    button.setAttribute("type", "button");
    button.addEventListener("click", setvlag);
    return button;
}

const maakrij = (i) => {

  let rij= document.createElement("section");
  rij.setAttribute("id","rij"+i);
    rij.setAttribute("class", "rij");
  return rij;
}
const bouwvak =(i,y)=>{


    let div =document.createElement("div");
    div.setAttribute("class", "vak");
    div.addEventListener("click", cijfer);
    div.setAttribute("data_nummer",y);
    div.setAttribute("data_rij",i);
    div.setAttribute("data_geklikt", "neen");
    div.setAttribute("data_vc", "?");
    if(Math.floor(Math.random()*10)===1 && aantalBommen!==0)
    {
        div.setAttribute("data_item", "bom");
        aantalBommen --;
        console.log(aantalBommen);
    }
    else
    {
        div.setAttribute("data_item", "leeg");
    }
    console.log("maakkol"+y);
    return div;
}

const setcijfer = () => {
    let kol= document.getElementsByClassName("vak");
       for(let x=0; x<kol.length;x++) {
        kol.item(x).removeEventListener("click", vlag);
        kol.item(x).addEventListener("click", cijfer);
    }


}

const bouwKlok = ()=>{
   let p= document.createElement("p");
    p.setAttribute("id", "txtKlok");
    let pTxt=document.createTextNode("Timer: ");
    p.appendChild(pTxt);


    let span= document.createElement("span");
        span.setAttribute("id", "klok");
    let spanTxt=document.createTextNode("00:00");
    span.appendChild(spanTxt);

    p.appendChild(span);
    return p;

}

const setvlag = () =>
{
    let kol= document.getElementsByClassName("vak");
    for(let x=0; x<kol.length;x++) {
        kol.item(x).removeEventListener("click", cijfer);
        kol.item(x).addEventListener("click", vlag);
    }
}

const vlag = (event) => {
   let div= event.target;
   if(div.getAttribute("data_vc" )!=="c") {
       if (div.getAttribute("data_geklikt") === "neen") {
           div.style.background = "green";
           div.setAttribute("data_geklikt", "ja");
           div.setAttribute("data_vc", "v");
           aantalvlaggen++;
       } else {
           div.style.background = "white";
           div.setAttribute("data_geklikt", "neen")
           div.setAttribute("data_vc", "?");
           aantalvlaggen--;
       }
       controleVeldVolMetVlaggen();
   }
}


const cijfer = (event) => {
    let div = event.target;
    div.style.background="blue";
    if(div.getAttribute("data_geklikt")=== "neen") {

        div.setAttribute("data_geklikt", "ja");
        let i = div.getAttribute("data_rij");
        let y = div.getAttribute("data_nummer");
        div.setAttribute("data_vc", "c");
        if (isbom(i, y)) {
            div.style.background = "red";
            eindeBommen()
        } else {
            let bommen= telbommen(i,y);
            let bommenTxt= document.createTextNode(String(bommen))
            div.appendChild(bommenTxt);

           if(bommen===0)
            {
                vulOmliggendeIn(i,y);
            }



        }
    }


   controleVeldVolMetVlaggen();

}

const telbommen = (i,y) => {
    let bommen =0;
    let r= parseInt(i);
    let k= parseInt(y);
    for(let rij=(r-1); rij<(r+2);rij++) {

        for(let kol=(k-1);kol<(k+2);kol++)
        {

            if(isbom(rij,kol))
            {
                bommen++;
            }
        }
    }
    return bommen;

}

const isbom = (i,y) => {

    let r= String(i);
    let k= String(y);
    let kol= document.getElementsByClassName("vak");
    for(let x=0; x<kol.length;x++)
    {

       if(r===kol.item(x).getAttribute("data_rij")&& k===kol.item(x).getAttribute("data_nummer"))
       {
           return kol.item(x).getAttribute("data_item") === "bom";
       }
    }

}



//automatisch invullen
const vulOmliggendeIn = (i,y)=>{

    vulEigenIn(i,y);
    //vulVolgendeIn(i,y);

}

const vulEigenIn = (i,y)=>{
    let r= controleNegatief(parseInt(i));

    let rr=controleTegroot(parseInt(i));


    while (r<=rr)
    {
        let k=controleNegatief( parseInt(y));

        let kk=controleTegroot(parseInt(y));

        while (k<=kk)
        {
            if(getVlak(r,k).getAttribute("data_geklikt")==="ja"||isbom(r,k))
            {

            }
            else
            {
                vulIn(r,k)
            }
            k++;
        }
        r++;
    }
}
const controleNegatief = (getal)=>{
    if(getal-1<0)
    {
        return getal;
    }
    else
    {
        return getal-1;
    }
}

const controleTegroot = (getal)=>{

      if(getal===lengte)
      {
          return getal-1
      }
      else
      {


       if (getal < lengte - 1) {
            return getal + 1;
        } else {
            return getal;
            }

    }

}
const vulIn=(i,y)=>{
    let r= String(i);
    let k= String(y);
    let div=getVlak(r,k);
    div.style.background="blue";
    div.setAttribute("data_geklikt", "ja");
    div.setAttribute("data_vc", "c");
    let bommen= telbommen(i,y);
    let bommenTxt= document.createTextNode(String(bommen))
    div.appendChild(bommenTxt);

}
const getVlak = (i,y)=>{

        let r= String(i);
        let k= String(y);
        let kol= document.getElementsByClassName("vak");
        for(let x=0; x<kol.length;x++)
        {
            if(r===kol.item(x).getAttribute("data_rij")&& k===kol.item(x).getAttribute("data_nummer"))
            {

                return kol.item(x);
            }
        }


}

/*const vulVolgendeIn =(i,y)=> {

    let r = controleNegatief(parseInt(i) - 1);
    let x=3;

        while (r < controleTegroot(parseInt(i) + x) ){
            let k = controleNegatief(parseInt(y) - 1);
            while (k < controleTegroot(parseInt(y) + x) ) {


                if (telbommen(r, k) === 0 && getVlak(r, k).getAttribute("data_geklikt") === "neen") {
                    vulIn(r, k)
                }

                k++;
            }
            r++;
        }



}*/





const controleVeldVolMetVlaggen =() =>{
    let kol= document.getElementsByClassName("vak");
    let bommen =0;
    let vlaggen=0;
    let geklikteVakjes =0;
    for(let x=0; x<kol.length;x++) {
        if(kol.item(x).getAttribute("data_geklikt")==="ja")
        {
            geklikteVakjes++;
            if(kol.item(x).getAttribute("data_vc")==="v") {
                vlaggen++;

                if (kol.item(x).getAttribute("data_item") === "bom") {
                    bommen++;
                }
            }

        }

    }
if(geklikteVakjes=== kol.length) {


    if (bommen === vlaggen) {
        eindeVlaggen();
    }
}


}




const eindeVlaggen = () => {
  einde("Proficiat je hebt het veld opgelost")
}
const eindeBommen = () => {
  einde("Je bent ontploft probeer opnieuw")
}

const einde = (text) => {
    clearInterval(timer);
    blokkeer();
    let arena = document.getElementById("arena");
    let eindeText= document.createElement("p");
    eindeText.setAttribute("id", "eindeText");
    let tekstje = document.createTextNode(text);
    eindeText.appendChild(tekstje);
    arena.appendChild(eindeText);
    toonBommen();

   arena.appendChild(createResetButton());



}

const blokkeer = () =>
{
    document.getElementById("btnCijfer").removeEventListener("click", setcijfer);
    document.getElementById("btnVlag").removeEventListener("click", setvlag);
    let kol= document.getElementsByClassName("vak");

    for(let x=0; x<kol.length;x++) {
        kol.item(x).removeEventListener("click", cijfer);
        kol.item(x).removeEventListener("clcik", vlag);
    }
}

const toonBommen =() => {
    let kol= document.getElementsByClassName("vak");

    for(let x=0; x<kol.length;x++) {

        if (kol.item(x).getAttribute("data_item") === "bom") {
            if (kol.item(x).getAttribute("data_vc") === "?") {
                kol.item(x).style.background = "red";

            } else if (kol.item(x).getAttribute("data_vc") === "v") {
                kol.item(x).style.background = "orange";
            } else {

            }
        }
           else
            {
                kol.item(x).style.background = "bleu";
            }
        }


}

const createResetButton = () => {
    let restbutton = document.createElement("input");
    restbutton.setAttribute("type", "button");
    restbutton.setAttribute("id", "btnReset");
    restbutton.setAttribute("value", "reset");
    restbutton.addEventListener("click", reset);
    return restbutton;

}
const reset = () =>{
     document.getElementById("arena").remove();

     setup();

}

const klok = () =>{
    if(seconden<59)
    {
        seconden++;
    }
    else
    {
        minuten++;
        seconden=0;
    }
    updateKlok();

}

const updateKlok=() =>{
    let klok= document.getElementById("klok");
   if(minuten<10)
   {
       if(seconden<10)
       {
           klok.textContent="0"+minuten+":"+"0"+seconden;
       }
       else
       {
           klok.textContent="0"+minuten+":"+seconden;
       }
   }else
   {
       if(seconden<10)
       {
           klok.textContent=minuten+":"+"0"+seconden;
       }
       else
       {
           klok.textContent=minuten+":"+seconden;
       }
   }



}


window.addEventListener("load", setup);