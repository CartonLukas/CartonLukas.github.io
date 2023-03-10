const setup = () => {
    let btnSubmit= document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", output);
}
const output = () => {
    let inputText = document.getElementById("txtinput").value;
    console.log(inputText);
    let result=maakMetSpaties(inputText)

  console.log(result);
}
const maakMetSpaties = (inputText) => {
    let result="";
    for(let i=0;i<inputText.length;i++)
    {
        if(inputText.charAt(i)!==" ")
        {
            result+=inputText.charAt(i)+" ";
        }
    }
    return result;
}
window.addEventListener("load", setup);