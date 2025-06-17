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
let demo =async()=>{
    return 5;
};

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let number= Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();

        },1000);
    });

}
async function demo(params) {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
demo();