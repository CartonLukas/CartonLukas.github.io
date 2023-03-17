const setup = () => {
    let list = document.querySelectorAll("li");
    for(let i=0; i<list.length;i++)
    {
        list[i].setAttribute("class", "listitem");
    }

    let img= document.createElement("img");
    img.setAttribute("src", "images/afbeelding2.png" );
    img.setAttribute("alt", "lamp");

    document.querySelector("body").append(img);

}
window.addEventListener("load", setup);