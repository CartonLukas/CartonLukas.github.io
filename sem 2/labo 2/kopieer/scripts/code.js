const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    console.log(tekst);
    let a = document.getElementById("txtOutput")
    a.innerHTML=tekst;
    }
window.addEventListener("load", setup);