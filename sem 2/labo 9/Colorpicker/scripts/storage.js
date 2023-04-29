const storeSliderValues = (red, green , blue) => {


    let sliderValuesJSON;

    let sliderValues={
        red:parseInt(red),
        green: parseInt(green),
        blue : parseInt(blue)
    }

    sliderValuesJSON= JSON.stringify(sliderValues);
    localStorage.setItem("Lukas_Carton.sliderValues", sliderValuesJSON);
};

const restoreSliderValues = () => {



    let sliderValues= JSON.parse(localStorage.getItem("Lukas_Carton.sliderValues"));
    if(sliderValues !==null) {


        let red = sliderValues.red;
        let green = sliderValues.green;
        let blue = sliderValues.blue;


        let slider = document.getElementsByClassName("slider");
        for (let i = 0; i < slider.length; i++) {
            if (slider.item(i).getAttribute("id").indexOf("Red") !== -1) {

                slider.item(i).setAttribute("value", red);

            } else {
                if (slider.item(i).getAttribute("id").indexOf("Green") !== -1) {
                    slider.item(i).setAttribute("value", green);
                } else {

                    slider.item(i).setAttribute("value", blue);
                }
            }
        }
    }

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten

    let SwatchesArray=[];


    let swatches = document.getElementsByClassName("swatch");
    for(let i=1; i<swatches.length;i++)
    {
        let s = swatches.item(i);
        let swatch = {
            red:s.getAttribute("data-red"),
            green:s.getAttribute("data-green"),
            blue: s.getAttribute("data-blue")
        }
        SwatchesArray.push(swatch);
    }



       localStorage.setItem("Lukas_Carton.SwatchesArray", JSON.stringify(SwatchesArray))

};

const restoreSwatches = () => {

    let SwatchesArray = localStorage.getItem("Lukas_Carton.SwatchesArray");

    if(SwatchesArray !== null)
    {
        SwatchesArray= JSON.parse(SwatchesArray);


        for(let i=0; i<SwatchesArray.length;i++)
        {
            let swatch= SwatchesArray[i];
            console.log(swatch)
            addSwatchComponent(swatch.red, swatch.green, swatch.blue);
        }
    }




};
