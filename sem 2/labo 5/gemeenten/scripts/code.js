const setup = () => {
    getgemeenten();
}

const getgemeenten = ()=>
{
    let stop= false;
    let Array=[];
    while (stop!==true)
    {
        let input=window.prompt("gemeente:", "gemeente");
        console.log(input);
        if(input.localeCompare("stop")===0)
        {
            stop=true;
        }
        else
        {
            Array.push(input);
        }
    }


   SortArray(Array);

}

const SortArray = (Array) =>
{

    Array.sort(compare)
    toongemeenten(Array)
}
const compare = (a, b) => {
    return a.localeCompare(b);
}

const toongemeenten = (Array) =>
{


    let Out= document.getElementById("Ouput");
    let output ="<select>";
    for(let i=0; i<Array.length;i++)
    {
        output+="<option>"+Array[i]+"</option>";
    }

    Out.innerHTML=output+"</select>";
}
window.addEventListener("load", setup);