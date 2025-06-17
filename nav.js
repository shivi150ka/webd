
  // function printtable(num){
  //   console.log(`table of ${num}`);
  //   for(let i=1;i<=10;i++){
  //     console.log(num*i);
  //   }
  // }
  // printtable(9);

  let str=["hyy","hello","anjali","bye","tata"];

  function concat(string){
    let newstr=" ";
    for(let i=0;i<string.length;i++){
newstr+=string[i];
    }
    return newstr;
  }
concat(str);
//console.log(newstr);