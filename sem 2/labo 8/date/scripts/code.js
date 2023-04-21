const setup = () => {

    let start = new Date(); //system date
    console.log(start);

    //dag van de week
    console.log( start.getDay());

    //maand
    console.log(start.getMonth()+1);

    //jaar
    console.log(start.getFullYear());

    //dag
    console.log(start.getDate());

    //datum vandaag + tijd
    console.log(start.getDate()+"-"+(start.getMonth()+1)+"-"+start.getFullYear()+" "
                +start.getHours()+":"+start.getMinutes()+":"+start.getSeconds());

    //bereken geboorte datum
    let datum = new Date(2023,0,1)

    console.log(datum);

    let geboorteDatum = new Date(2004,6,22);
    console.log(geboorteDatum);

    let milliseconden= new Date()-geboorteDatum;
    console.log(milliseconden);

    let dagen= milliseconden/1000/60/60/24
    console.log(Math.round( dagen));

    let event= new Date();

    console.log("toString " + event.toString());


    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());



}


window.addEventListener("load", setup);