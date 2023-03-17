const setup = () => {
    let element = document.createElement("p");
    element.setAttribute("class", "color");
    //element.className= "color"; is het zelfde maar is  trager
    let textNode= document.createTextNode("Hello world");
    element.appendChild(textNode);
    document.querySelector("#myDiv").appendChild(element);

   // document.getElementById("myDiv").innerHTML="<p> hello world </p>"; nooit meer
}
window.addEventListener("load", setup);