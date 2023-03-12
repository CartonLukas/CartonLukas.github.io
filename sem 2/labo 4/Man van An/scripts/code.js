//afwerken

const setup = () => {
         document.getElementById("btnSubmit").addEventListener("click", telVoorkomens);
};

const telVoorkomens = () => {
    let txtTekst=document.getElementById("txtTekst");
    let tekst=txtTekst.value;
    console.log(tekst);

    let txtZoekTekst=document.getElementById("txtZoekTekst");
    let zoekTekst=txtZoekTekst.value;
    console.log(zoekTekst);
    let result=0;
    let idx=tekst.indexOf(zoekTekst);
    console.log(idx);
    while (idx!==-1) {
        result++;
        idx=tekst.indexOf(zoekTekst, idx+zoekTekst.length);
        console.log(idx);
    }
    let txtAantal=document.getElementById("txtAantal");


    txtAantal.textContent= result;

};

window.addEventListener("load", setup);