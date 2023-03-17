const setup = () => {
    document.getElementById("btnClick").addEventListener("click", change)
}

const change = () => {
        let p= document.createElement("p");
        let txtnode= document.createTextNode("text");
        p.appendChild(txtnode);
        document.querySelector("div").append(p);


}
window.addEventListener("load", setup);