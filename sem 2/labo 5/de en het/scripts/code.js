//via indefOg(zin, zoekwoord) ->plaats
//alles links in variable v1
//alles rechts in variable v2
//v1 + vervang +v2

const setup = () => {
    document.getElementById("btnSubmit").addEventListener("click", Verander);

}
const Verander= () =>{
  let zin =document.getElementById("txtTekst").value;
  console.log(zin);
  let zoek =document.getElementById("txtZoek").value;
  console.log(zoek);
  let vervang =document.getElementById("txtVervang").value;
  console.log(vervang)
  let idx=zin.indexOf(zoek);

      while(idx!==-1)
      {
          let voor=zin.slice(0,idx);
          let na= zin.slice(idx+zoek.length);
          zin = voor+vervang+na;
          console.log(zin)
          idx=zin.indexOf(zoek,idx+vervang.length);
      }

  document.getElementById("txtOutput").innerHTML=zin;


}
window.addEventListener("load", setup);