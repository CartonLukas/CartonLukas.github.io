const setup = () => {
    let sliders = document.getElementsByClassName("sliders");
    for(let i =0; i<sliders.length;i++)
    {
        sliders[i].addEventListener("change" , update);
        sliders[i].addEventListener("input" , update);
    }
 update();


}

const update =() => {
    let red=document.getElementById("sldr").value;
    let green = document.getElementById("sldg").value;
    let blue = document.getElementById("sldb").value;

    document.getElementById("lblRed").innerHTML= red;
    document.getElementById("lblGreen").innerHTML= green;
    document.getElementById("lblBlue").innerHTML=blue;

    console.log("r: " + red + " g: " + green+ " b: "+blue);

  let swatch = document.getElementById("swatch");
  swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";

}

window.addEventListener("load", setup);