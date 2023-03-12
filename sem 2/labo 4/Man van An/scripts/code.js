

const setup = () => {
         document.getElementById("btnSubmit").addEventListener("click", telVoorkomens);
};

const telVoorkomens = () => {
    let tekst=document.getElementById("txtTekst").value;



    let zoekTekst=document.getElementById("txtZoekTekst").value;


    let result=0;
    let idx=tekst.indexOf(zoekTekst);

    while (idx!==-1) {
        result++;
        idx=tekst.indexOf(zoekTekst, idx+zoekTekst.length);

    }
    let txtAantal=document.getElementById("txtAantal");


    txtAantal.textContent= result;

};

window.addEventListener("load", setup);