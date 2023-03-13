const setup = () => {
    document.getElementById("btnSubmit").addEventListener("click", toonTrigrams);

}

const getTrigrams = (tekst) => {
    let result= [];
    let trigram;
    for(let i=0; i<= tekst.length-3;i++)
    {
       trigram= tekst.slice(i,i+3);
       result.push(trigram);
    }
    return result;

}

const toonTrigrams= () =>
{
    let txtTekst= document.getElementById("txtTrigram");
    let tekst = txtTekst.value;
    let lstTrigram= document.getElementById("lijst");
    let trigrams = getTrigrams(tekst);
    let output="";
    for(let i=0; i<trigrams.length;i++)
    {
        output+="<li>"+trigrams[i]+"</li>";
    }
    lstTrigram.innerHTML=output;
}
window.addEventListener("load", setup);