let global = {
    IMAGE_COUNT: 4, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    document.getElementById("btnStart").addEventListener("click", start)




};

const start = (e) =>{
    document.getElementById("image").addEventListener("click",geklikt);
   global.timeoutId= setInterval("VeranderImage()", 1000, global.timeoutId);
    e.target.remove();
    console.log()



}


const geklikt = () =>{
    if(document.getElementById("image").getAttribute("src")===global.IMAGE_PATH_PREFIX+"0"+global.IMAGE_PATH_SUFFIX)
    {
        einde();
    }else
    {
        global.score++;
        document.getElementById("txtScore").innerText= global.score;
    }

}
const VeranderImage = () =>{

    let img = document.getElementById("image")
    img.style.paddingTop= (Math.random()*800-global.IMAGE_SIZE)+"px"
    img.style.paddingLeft= (Math.random()*600-global.IMAGE_SIZE)+"px"
    img.setAttribute("src", "./"+global.IMAGE_PATH_PREFIX+Math.round( Math.random()*global.IMAGE_COUNT)+global.IMAGE_PATH_SUFFIX)


}

/*const geefAlert =() =>{
    window.alert("ddd");
}*/


const einde = () => {
    clearInterval(global.timeoutId)
    window.alert("Het spel is gedaan \n Je hebt een score van "+ global.score)

}

window.addEventListener("load", setup);


