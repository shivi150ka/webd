console.log("hello world");
let pencilprrice=5;
let eraser=10;
console.log("price=" ,pencilprrice+eraser);
console.log(`total price ${pencilprrice+eraser}`);//template literal 
console.log(pencilprrice**eraser);
let n=5;
let str="5";//compare value not type
console.log(n===str);//compare value and type
let stri='a=61&aA=41';//compare unique code
let colour="red";
if(colour=="red"){
    console.log("stop");
}
if(colour=="yellow"){
    console.log("stop");}
    let color="red";
    switch(color){
        case "red":{
            console.log("stop");
        }
    }
    alert("something is wrp");
    console.error("error");
    console.warn("nothing");
   let firstname= prompt("enter your name");
   console.log(firstname);
   let strp="  hello ";
  console.log(strp.trim) ;
  let pass=prompt("password");
  //strings are immutable
  let ms=" gh ";
  console.log(ms.trim);
  function hello(){
    console.log("hello");
    
  }
  hello();
  function printpoem(){
    console.log("poem");
  }
  printpoem();
  function sum(name){//fun with argument
    console.log(name);
  }
  sum("shradha");
  function average(num1,num2,num3){
    let ave=(num1+num2+num3)/3;
    console.log(ave);
  }
  average(1,8,9);

  function large(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
max=arr[i];
console.log(max);
        }
    }
  }
  let arr=[2,5,8,9];
  let num=20;
  let max=20;
const student={
  name:"shradha",
  eng:78,
  math:90,
  getavg(){
    let avg=(this.eng+this.math/3)
  }


}