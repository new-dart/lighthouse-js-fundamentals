// If the number is a multiple of 3, 
// print the string "Loopy" instead of the number.
// If the number is a multiple of 4, 
// print the string "Lighthouse" instead of the number.
//If the number is a multiple of both 3 and 4, 
// print the string "LoopyLighthouse" instead of the number.


function ll(x){
    while (x <= 200) {
        console.log(x);
        x += 1;
      if (x % 3 === 0 && x % 4 === 0){
        console.log("LoopyLighthouse");
      } else if (x % 3 === 0){
        console.log("Loopy");
      } else if (x % 4 === 0){
        console.log("Lighthouse");
      } else {
        console.log(x);
       }
    }
  }
  console.log(ll(100));