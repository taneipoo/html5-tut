function myReplace(str, before, after) {
/*  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
*/
var dew=str.split(" ");
console.log(dew);

for(i=0;i<=dew.length-1;i++)
{
  if(dew[i]===before)
  {  
    dew[i]=after;
  } 
  //else if (dew[i]==before){

   var newt =  dew[i].charAt(0).toLowerCase() + dew[i].slice(1);
   console.log(newt.toLowerCase());
   dew[i]=newt;

 //}
}
var dewdew = dew.join(' ');
return dewdew;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));