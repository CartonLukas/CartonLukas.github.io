const setup = () => {
    let sliders = document.getElementsByClassName("sliders");
    for(let i =0; i<sliders.length;i++)
    {
        sliders[i].addEventListener("change" , update);
        sliders[i].addEventListener("input" , update);
    }
    update();
    document.getElementById("btnSave").addEventListener("click",save);


}

const update =() => {
    let red=getredHoofd();
    let green = getgreenHoofd();
    let blue =getblueHoofd();

    document.getElementById("lblRed").innerHTML= red;
    document.getElementById("lblGreen").innerHTML= green;
    document.getElementById("lblBlue").innerHTML=blue;

    console.log("r: " + red + " g: " + green+ " b: "+blue);

    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor=getbackground();

}

const save = () => {
    let swatchComponents = document.getElementById("swatchComponents");
    let swatch= buildSwatch();
    swatchComponents.appendChild(swatch);


}

const buildSwatch =() =>
{
    let div = document.createElement("div");
    div.setAttribute("class", "swatch" );
    div.setAttribute("data_red", getredHoofd());
    div.setAttribute("data_blue", getblueHoofd());
    div.setAttribute("data_green", getgreenHoofd());
    div.appendChild(buildButton())
    div.style.backgroundColor=getbackground();
    div.addEventListener("click", veranderhoofd)
    return div;
}

const buildButton =() =>
{
  let button = document.createElement("input");
  button.setAttribute("type", "button");
  button.setAttribute("value", "x");
  button.addEventListener("click", remove);
  return button;
}

const remove = (e) =>
{
    e.target.parentElement.remove();
}

const getbackground=()=>
{
 let red= getredHoofd();
 let green = getgreenHoofd();
 let blue= getblueHoofd();
   return "rgb("+red+","+green+","+blue+")";


}

const getredHoofd = () => {
    let red= document.getElementById("sldr").value;
    console.log(red);
    return red;

}

const getgreenHoofd = () => {
    let green= document.getElementById("sldg").value;
    console.log(green);
    return green;


}

const getblueHoofd = () => {
    let bleu= document.getElementById("sldb").value;
    console.log(bleu);
    return bleu;

}





const veranderhoofd = (e) => {
  let hoofd=document.getElementById("swatch");
  let red=e.target.getAttribute("data_red");
  let green=e.target.getAttribute("data_green");
  let blue=e.target.getAttribute("data_blue");
  hoofd.style.backgroundColor="rgb("+red+","+green+","+blue+")";s
}





window.addEventListener("load", setup);