const setup = () => {

    document.getElementById("btnherbereken").addEventListener("click", calc);


}

const calc =()=>{

    let aantalen = document.getElementsByClassName("aantal");
    let prijzen = document.getElementsByClassName("prijs");
    let btw=document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let totaal = 0.0;

    for(let i =0; i<aantalen.length;i++)
    {

        subtotalen[i].value =aantalen[i].value * parseFloat(prijzen[i].innerHTML);
        subtotalen[i].value += subtotalen[i].value*(parseInt(btw[i].innerHTML)/100);
        subtotalen[i].value = subtotalen[i].value.toFixed(2);
        subtotalen[i].value= parseFloat(subtotalen[i].value);
        totaal +=subtotalen[i].value;
        console.log("product" +i+ "prijs="+ subtotalen[i].value);
    }
    console.log("totaal ="+ totaal);

   let sub = document.getElementsByClassName("subtotaal");


    document.getElementById("totaal").innerHTML= totaal+ "EUR";

    for(let i=0; i<aantalen.length;i++)
    {

        sub[i].innerHTML= subtotalen[i].value + " EUR";
    }

    

}


window.addEventListener("load", setup);