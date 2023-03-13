const setup = () => {
    document.getElementById("btnToonResultaat").addEventListener("click",BerekenResultaat);
}

const BerekenResultaat = () =>
{
    //roker
    let chbRoker= document.getElementById("chbRoker").checked;
    if(chbRoker)
    {
        console.log("is roker");
    }
    else
    {
        console.log("is geen roker");
    }

    //Moeder taal
    let rdb=document.getElementsByName("taal");
    for(let i=0;i<rdb.length;i++)
    {
        if(rdb[i].checked===true)
        {
           console.log("Moedertaal is "+rdb[i].value);
        }
    }
    //Buurland
    let lstBuurland= document.getElementById("lstBuurland").options;
    for(let i=0;i<lstBuurland.length;i++)
    {
        if(lstBuurland[i].selected)
        {
            console.log("favoiete Buurland is "+lstBuurland[i].text);

        }
    }

    //bestelling
    let lstBesteling = document.getElementById("lstBesteling").options;
    let OutputBesteling= "Besteling bestaat uit ";
    for (let i=0; i<lstBesteling.length;i++)
    {
        if(lstBesteling[i].selected)
        {
            OutputBesteling+=lstBesteling[i].text+" ";
        }
    }
    console.log(OutputBesteling);
}
window.addEventListener("load", setup);