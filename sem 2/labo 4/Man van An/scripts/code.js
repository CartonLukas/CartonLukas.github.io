let zin="De man van An geeft geen hand aan ambetante verwanten";


const setup = () => {
       findexOf();
    //flastindexOf;

}

const findexOf = () =>
{

   let result =0;
   let idx=zin.indexOf("an");
   while (idx!==-1)
   {
       result++;
       idx=zin.indexOf("an", idx+"an".length);
   }
   console.log(result);
}

const flastindexOf = () =>
{

}
window.addEventListener("load", setup);