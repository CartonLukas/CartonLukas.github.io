const setup = () => {
    let btnTry = document.getElementById("btnTry");

    btnTry.addEventListener("mouseover", () => {
        document.getElementById("event").innerHTML+= "mouse Hoverd!<br>";
    });

    btnTry.addEventListener("click", () =>{
        document.getElementById("event").innerHTML += "mouse cliked!<br>";
    });

    btnTry.addEventListener("mouseout", () =>{
        document.getElementById("event").innerHTML += "mouse out!<br>";
    });

    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent").addEventListener("click", changeContent);

}

const withoutBullets =() =>{
    let listItems = document.getElementsByTagName("li");
    for(let i=0; i<listItems.length;i++)
    {/*
        //1ste manier nooit
       listItems[i].style.listStyleType="none";
       listItems[i].style.backgroundColor="red";

       //2 de manier
        listItems[i].className= "listItemsStyleNone colorRed";
        */
        //3de manier
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        console.log("output "+listItems[i].className);

    }
}

const withBullets = () =>{
    let listItems = document.getElementsByTagName("li");
    for(let i=0; i<listItems.length;i++)
    {/*
        //1ste manier nooit
        listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor="white";

        //2de manier
        listItems[i].className= "llistItemsStyleDisc colorWhite";
      */
        //3de manier
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output "+listItems[i].className);

    }
}

const changeContent = () =>
{
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";

}
window.addEventListener("load", setup);