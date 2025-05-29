 async function hello(){
return "hello";
}
hello()
.then((result)=>{
    console.log("the result was",result);
})
.catch((err)=>{
    console.log("there is an error",err);
}
);
let demo =()=>{
    return 5;
};