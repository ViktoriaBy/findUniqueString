//Write a function to remove all duplciate letters from a provided string. 
//The string will only contail lowercase letters between a - z. The string will not contain spaces.


function findUnique(str){

    let uniq = "";
     
    for(let i = 0; i < str.length; i++){
      if(uniq.includes(str[i]) === false){
        uniq += str[i]
      }
    }
    return uniq;
  }
   
  console.log(findUnique("Hello"))