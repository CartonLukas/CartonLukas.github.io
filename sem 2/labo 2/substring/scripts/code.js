const setup = () => {
    let btnSubstring = document.getElementById("btnsubstring");
    debugger;
    btnSubstring.addEventListener("click", substring);
}

function substring() {
    let begin = document.getElementById("numbegin").value;
    debugger;
    let eind = document.getElementById("numeind").value;

    let woord = document.getElementById("txtwoord").value;

    let txtInputSubstring = woord.substring(begin, eind);
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = txtInputSubstring;
    console.log(txtInputSubstring);





}
window.addEventListener("load", setup);