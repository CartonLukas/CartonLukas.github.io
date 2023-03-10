let zin="De man van An geeft geen hand aan ambetante verwanten";


const setup = () => {
       findexOf();
    //flastindexOf;

}

const findexOf = () =>
{

    let gevonden = false;
    let p=0;
    let i=-1;
    while(p !==-1|| i===5)
    {
        //via substr
            p = zin.indexOf("an",p);
            i++;
            console.log(i);

    }
    console.log(i);
}

const flastindexOf = () =>
{

}
window.addEventListener("load", setup);