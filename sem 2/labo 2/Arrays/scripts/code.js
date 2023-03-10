const setup = () => {
    let famillie =['a','b','c','d','f','g'];
    console.log(famillie.length);
    console.log(famillie[1]);
    console.log(famillie[3]);
    console.log(famillie[5]);

}

function Voegnaamtoe(naam) {
    famillie.prompt(naam);
    console.log(famillie[6])

}
window.addEventListener("load", setup);