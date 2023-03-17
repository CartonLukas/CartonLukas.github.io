const setup = () => {
    let par = document.querySelectorAll("p");
    let textNode= document.createTextNode("Good job");
    for(let i=0; i<par.length;i++)
    {
        y= par[i].childNodes[0];
        par[i].removeChild(y);
        console.log(par[i]);
        par[i].appendChild(textNode)
    }

}
window.addEventListener("load", setup);