const setup = () => {
    let Btnwijzig=document.getElementById("Btnwijzig");
    Btnwijzig.addEventListener("click", wijzigen);
   
}

function wijzigen() {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";

}
window.addEventListener("load", setup);