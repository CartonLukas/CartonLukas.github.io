const setup = () => {
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    valideerVoornaam();
    valideerFamillienaam();
    valideerGeboorteDatum();
    valideeremail();
    valideerKinderen();
    Allesgoed();
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        txtVoornaam.className="invalid"; // invalid class instellen
        errVoornaam.innerHTML = "max. 30 karakters";
    } else {
        txtVoornaam.className=""; // alle classes verwijderen
        errVoornaam.innerHTML = "";
    }
};

const valideerFamillienaam = () => {
    let txtFamillienaam = document.getElementById("txtFamillienaam");
    let errFamillienaam = document.getElementById("errFammillienaam");
    let famillienaam = txtFamillienaam.value.trim();
    if (famillienaam.length===0) {
        txtFamillienaam.className="invalid"; // invalid class instellen
        errFamillienaam.innerHTML = "Verplicht veld";
    } else {
        if(famillienaam.length>50)
        {
            txtFamillienaam.className="invalid"; // invalid class instellen
            errFamillienaam.innerHTML = "Max. 30 karakters";
        }
        else
        {
            txtFamillienaam.className=""; // alle classes verwijderen
            errFamillienaam.innerHTML = "";
        }

    }
};

const valideerGeboorteDatum = () => {
    let txtdatum= document.getElementById("txtGeboorteDatum");
    let errgeboorteDatum= document.getElementById("errGeboorteDatum");
    let datum= txtdatum.value.trim();
    if(datum.length===0)
    {
      txtdatum.className="invalid";
      errgeboorteDatum.innerHTML="verplicht veld";
    }
    else
    {
       let jaar=datum.substring(0,3);
       let txtstreep1= datum.substring(4,5);
       let maand= datum.substring(5,7);
       let txtstreep2= datum.substring(7,8);
       let dag= datum.substring(8,10);

       if(isGetal(jaar)&&isGetal(maand)&&isGetal(dag)&&txtstreep1==="-"&&txtstreep2==="-")
       {
           txtdatum.className="";
           errgeboorteDatum.innerHTML="";
       }
       else
       {
           txtdatum.className="invalid";
           errgeboorteDatum.innerHTML="formaat is niet jjjj-mm-dd";
       }


    }

};

const isGetal = (tekst) => {
    return !isNaN(tekst);
};

const valideeremail = () => {
    let txtemail= document.getElementById("txtemail");
    let erremail= document.getElementById("errmail");
    let email= txtemail.value.trim();

    if(email.length===0)
    {
        txtemail.className="invalid";
        erremail.innerHTML="verplicht veld";
    }
    else
    {
        let pos1= email.indexOf("@");
        if(pos1===-1 || pos1===0 || pos1===email.length-1)
        {
           fouteemail();
        }
        else
        {
          if(email.indexOf("@",pos1+1)===-1)
          {
              txtemail.className="";
              erremail.innerHTML="";
          }
          else
          {
              fouteemail();
          }
        }

    }

}

const fouteemail = () => {
    let txtemail= document.getElementById("txtemail");
    let erremail= document.getElementById("errmail");
    txtemail.className="invalid";
    erremail.innerHTML="geen geldig email adres";
};

const valideerKinderen = () => {
  let  txtkinderen = document.getElementById("txtkinderen");
  let errkinderen= document.getElementById("errkinderen");
  let kinderen = txtkinderen.value.trim();

  console.log(!isGetal(kinderen));
  if(!isGetal(kinderen)||kinderen.substring(0,1)==="-")
  {
      txtkinderen.className="invalid";
      errkinderen.innerHTML="is geen positief getal";
  }
  else
  {
      if(kinderen.length>2)
      {
          txtkinderen.className="invalid";
          errkinderen.innerHTML="te vruchtbaar";
      }
      else
      {
          txtkinderen.className = "";
          errkinderen.innerHTML = "";
      }
  }
}

const Allesgoed = () => {
    let out= document.getElementsByClassName("errorMessage");
    let goed = true;
   for (let i=0; i<out.length; i++)
   {
       if(out[i].innerHTML.length!==0)
       {
           goed=false;
       }
   }

   if(goed)
   {
       window.alert("proficiat alles is goed");
   }

}



window.addEventListener("load", setup);