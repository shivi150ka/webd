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
console.log("hello");
try{
  console.log(a);
}
catch{
  console.log("error");
}
console.log("hello");
//miscellaneous
//arrow function
const variab =(a,b)=>{
  console.log(a+b);
}
let a=5;
let b=4;
//implict return only for return value only
const va=(a,b)=>(
  a*b
);
//set timeout (data kitne der baad functio)
console.log("hello");
setTimeout(()=>{
  console.log("hello")
},4000);
//using for api
//set interval (har  fixed sec per repeat hoga) isko stop krne using clear using id
//arrrow k liye parent scope hai
let id=setInterval(()=>

{
  console.log("hello")
},2000);
setTimeout(()=>{
  clearInterval(id);
},10000);
let arrave=(arr)=>{
  let avg=0;
  for(let i=0;i<=arr.length;i++){
    avg+=arr[i];
  }
  return avg/arr.length;
}
let ar=[1,5,6,9];
console.log(arrave(ar));
let arv=[2,5,9,6];
arv.forEach(function(el)
{
  console.log(el);
});
arv.forEach((el)=>
{
  console.log(el);
});
let num9=[9,6,3,2];
let double=num9.map((elm)=>{
  return 2*elm;
});
let ans=num9.filter((elp)=>{
  return el<5;
});
let p=num9.every((el)=>)
//... destructuring
//object destructing me {username:nam}=student;
console.log(...a);
let arrm=[5,4,6,4];
let nea=[...arrm,...a];
