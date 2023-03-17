const setup = () => {
    // selecting node
    let p = document.getElementById("para");
    // get node name and node type
    console.log(p.nodeName, p.nodeType); // P, 1



    // get node name and node type of child node
    console.log(p.firstChild.nodeName, p.firstChild.nodeType); // #text, 3

    console.log (p.firstElementChild, p.firstElementChild.nodeType)
    // get node name and node type of next sibling
    console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType); // p, 1

}
window.addEventListener("load", setup);