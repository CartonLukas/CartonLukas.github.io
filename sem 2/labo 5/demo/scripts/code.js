const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", Change)
}

const Change =()=>
{
    let photo =document.getElementById("imgPhoto");
    photo.src ="./image/afbeelding2.png";
    photo.alt="lamp";
    photo.className="vergroot";

    document.getElementById("txtText").innerHTML= "lamp";


}
window.addEventListener("load", setup);