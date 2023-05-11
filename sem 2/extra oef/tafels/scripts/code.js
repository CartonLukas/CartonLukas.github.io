const setup = () => {
    document.getElementById("Btngo").addEventListener("click", start);
    document.getElementById("BtnOpgaven").addEventListener("click", OpenOpgave);

    restoreTabels();
}



const start =() =>{
    let input = document.getElementById("InputTxt");

    let inputTxt= input.value;
    input.value=null
    input.placeholder= "Vul getal in"
    let startGetal = parseInt(inputTxt);
    if(!isNaN(startGetal))
    {
        createTable(startGetal);
    }else
    {
        alert("geef een geldig nummer in")
    }



}

const createTable = (getal) =>{
    let tafel=document.getElementById("tafels");
    let table= document.createElement("div");

    table.classList.add("tafel");
    let header= createHeader(getal)
   table.appendChild(header);
   table.appendChild(createBody(getal,table));
   tafel.appendChild(table);

   slaOp(getal,header);
}
const createHeader = (getal) =>{
    let head=document.createElement("div");
    head.classList.add("header");
    let nu= new Date();
    let txthead=document.createTextNode("Tafel van "+getal+" aangemaakt op:"+nu.getHours()+":"+nu.getMinutes()+":"+nu.getSeconds())
    head.appendChild(txthead);
    return head;

}
const createBody = (getal)=>{
    let body= document.createElement("div");
    body.classList.add("body");
    for(let i =0; i<=10; i++)
    {
        if(i%2===0)
        {
            let even = createBodyCol(getal, i);
            even.classList.add("even");
            body.appendChild(even);
        }
        else
        {
            body.appendChild(createBodyCol(getal, i));
        }
    }
    return body;
}

const createBodyCol= (getal, index) =>{

    let col = document.createElement("div");
    let txtCol= document.createTextNode(getal+" X "+index+" = "+getal*index);
    col.appendChild(txtCol);
    return col;
}

const slaOp= (getal,header) =>{


    let lijst = JSON.parse(localStorage.getItem("Lukas_Carton.Tafels"));
    if(lijst===null)
    {
        lijst=[];
    }
    let tafel={
        header: header.innerHTML,
        getal: getal
    }


    lijst.push(tafel);
    localStorage.setItem("Lukas_Carton.Tafels", JSON.stringify(lijst))


}

const restoreTabels= ()=>{

    let lijst= JSON.parse(localStorage.getItem("Lukas_Carton.Tafels"));
    if(lijst !==null) {
        for (let i = 0; i < lijst.length; i++) {
            createRestoredTable(lijst[i].header, lijst[i].getal);
        }
    }
}

const createRestoredTable= (header, getal) =>{
    let tafel=document.getElementById("tafels");
    let table= document.createElement("div");

    table.classList.add("tafel");
    let h= createRestoredHeader(header);
    table.appendChild(h);
    table.appendChild(createBody(getal,table));
    tafel.appendChild(table);
}

const createRestoredHeader=(header) =>{
    let head=document.createElement("div");
    head.classList.add("header");
    let txtHead= document.createTextNode(header)
    head.appendChild(txtHead);
    return head;
}

const OpenOpgave = () =>{
    window.open('./opgave.html', '_blank').focus();
}


window.addEventListener("load", setup);