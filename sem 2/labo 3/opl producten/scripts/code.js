const setup = () => {
    console.log ("setup");
    let products = document.getElementsByClassName("aantal")
    for (let i = 0 ; i < products.length ; i++)
    {
        products[i].addEventListener("change", update)
    }

};

const update = () => {

    let txtBtws = document.getElementsByClassName('btw');
    let txtAantallen = document.getElementsByClassName('aantal');
    let txtPrijzen = document.getElementsByClassName('prijs');
    let txtSubtotalen = document.getElementsByClassName('subtotaal');
    let txtTotaal=document.getElementsByClassName('totaal')[0];
    let totaal = 0;
    // gelukkig staan alle elementen van een rijtje in de txtAantallen,
    // txtPrijzen, .. arrays in dezelfde volgorde (nml. "tree order").
    // Zie https://dom.spec.whatwg.org/#old-style-collections
    // We kunnen ze dus gewoon op indexbasis verwerken
    for (let i = 0; i < txtBtws.length; i++) {
        // parseFloat en parseInt lezen tot aan niet-relevante
        // karakters, dus de ' Eur' en '%' op het einde van prijs en btw
        // zijn geen probleem.
        let aantal=parseFloat(txtAantallen[i].value, 10);
        console.log (txtBtws[i].innerHTML);
        console.log (txtBtws[i].textContent);
        let btw=parseFloat(txtBtws[i].innerHTML, 10);  // let op : niet .value!
        let prijs=parseFloat(txtPrijzen[i].innerHTML.replace(',', '.'), 10); // let op : niet .value!
        let subtotaal=aantal*prijs*(1+(btw/100));
        totaal+=subtotaal;

        // we gebruiker de Number.toFixed(n) method om het gewenste
        // aantal cijfers na de komma weer te geven (wordt afgerond)
        txtSubtotalen[i].textContent=subtotaal.toFixed(2).replace('.', ',')+" Eur";

        // merk op dat deze oplossing een groot probleem heeft :
        // de subtotalen worden niet afgerond alvorens ze bij het totaal
        // te tellen, hierdoor kan het zijn dat de optelling in de UI
        // niet klopt.
        // Bv. indien de subtotalen 10.006 en 5.007 zijn is er een verschil :
        // Dan is het totaal nml. 15.01
        //    10.006 + 5.007 = 15.013 (afgerond 15.01)
        // maar als je de afgeronde subtotalen in de UI bekijkt en optelt is het 15.02
        //    10.01 + 5.01
        // eigenlijk moeten we de subtotalen eerst afronden alvorens op te tellen.
        //
        // Neem bv. voor prijs product1 en product2 beide 1.00 en 1.02 voor hun aantallen
        // dan krijg je subtotalen 1.08 en 1.23
        //
        // Netjes afronden op n plaatsen na de komma is in javascript trouwens
        // minder eenvoudig dan je zou verwachten, zie
        // http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript
    }
    txtTotaal.textContent=totaal.toFixed(2).replace('.', ',')+" Eur";
};

window.addEventListener("load", setup);
