const setup = () => {

    document.getElementById("btnGo").addEventListener("click", clickStart);
    restoreCards();

}

const clickStart = () => {

  let inputTxt=document.getElementById("commandoInput").value.toString();
  console.log(inputTxt);


  let regex = inputTxt.match("\/[a-z]{1} [a-z]*");
  if(regex != null) {

          voerCommandUit(inputTxt);

  }
  else
  {
      window.alert("invalid command")
  }
}

const voerCommandUit = (inputTxt)=>
{
    let prefix = inputTxt.slice(0,2).toString();
    let search = inputTxt.slice(3).toString();

    console.log(search)
 if(prefix==="/g")
 {
     Google(search, true);

 }else{
     if(prefix==="/y"){
        Youtube(search, true);

     }else{
            if(prefix ==="/t")
            {

               Twitter(search, true);
            }
            else {
                if (prefix ==="/i") {
                    Instagram(search, true)
                }
                else
                {
                    window.alert("unknown command prefix")
                }
            }
     }
 }
}

const Google = ( search, click) =>{
    let url="https://www.google.com/search?q="+search
     let card = createCard("google", url, search);
     card.classList.add("google-card");
     document.getElementsByClassName("row").item(0).appendChild(card)
    openSite("google", search,url, click);

}

const Youtube= (search, click) =>{
    let search2 =search.replaceAll("%20", "+")
    let url="https://www.youtube.com/results?search_query="+search2;

    let card=createCard("youtube", url, search);
    card.classList.add("youtube-card");
    document.getElementsByClassName("row").item(0).appendChild(card)
    openSite("youtube", search,url, click);
}

const Twitter = (search, click) =>{
    let url= "https://twitter.com/hashtag/"+search;

    let card=createCard("twitter", url, search);
    card.classList.add("twitter-card");
    document.getElementsByClassName("row").item(0).appendChild(card)
    openSite("twitter", search,url, click);
}

const Instagram = (search, click) =>{
    let search2 = search.replaceAll(" ", "_");
    console.log(search)
    let url= "https://instagram.com/explore/tags/" + search2;

    let card=createCard("instagram", url, search);
    card.classList.add("instagram-card");
    document.getElementsByClassName("row").item(0).appendChild(card)
    openSite("instagram", search,url, click);
}

const openSite=(site, search,url , click)=>{
    if(click) {
        window.open(url, '_blank').focus();
        slaOp(site,search);
    }
}

const createCard= (site, url, search) =>{

    let div=document.createElement("div");
    div.classList.add("card");
    div.classList.add("col-4")
    div.style.width="18 rem";
    div.appendChild(createCardBody(site, url, search));
    return div;

}

const createCardBody=(site, url, search)=>{
    let body = document.createElement("div");
    body.classList.add("card-body");
    body.appendChild(createCardTitle(site))
    body.appendChild(createCardTxt(search))
    body.appendChild(createCardButton(url))
    return body;
}

const createCardTitle =(site) =>{
    let title = document.createElement("h5");
    title.classList.add("card-title");
   title.appendChild(document.createTextNode(site));

    return title;
}

const createCardTxt =(search) =>{

    let txt = document.createElement("p");
    txt.classList.add("card-title");
    txt.appendChild(document.createTextNode(search));
    return txt


}

const createCardButton = (url) =>{
    let link = document.createElement("a");
    link.href=url;
    link.classList.add("btn");
    link.classList.add("btn-primary");
    link.target= '_blank'
    link.appendChild(document.createTextNode("Go!"));
    return link;
}

const slaOp=(site, search)=>{

    let lijst = JSON.parse(localStorage.getItem("Lukas_Carton.My_internet_start_page"));
    if(lijst ===null)
    {
        lijst = [];
    }
    let card = {
        site: site,
        search: search
    }


    lijst.push(card);

    localStorage.setItem("Lukas_Carton.My_internet_start_page", JSON.stringify(lijst))

}

const restoreCards=()=>{
    let lijst = JSON.parse(localStorage.getItem("Lukas_Carton.My_internet_start_page"));
    if(lijst !=null) {
        console.log(lijst);
        for (let i = 0; i < lijst.length; i++) {
            console.log(lijst[i]);
            let site = lijst[i].site;
            let search = lijst[i].search;
            if (site === "google") {
                Google(search, false);
            } else {
                if (site === "youtube") {
                    Youtube(search, false);
                } else {
                    if (site === "twitter") {
                        Twitter(search, false);
                    } else {
                        Instagram(search, false);
                    }
                }

            }


        }
    }

}
window.addEventListener("load", setup);