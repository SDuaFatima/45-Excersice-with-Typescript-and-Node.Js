//example 01
// const returnMoney = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('failure!!!');
//     }, 3000); //run after 3 sec
// });
// returnMoney
// .then((value)=>{
//     console.log(value);
//     console.log(`Thank you for returning my money`); //runs if promise fullfilled
// })
// .catch((value)=>{
//     console.log(value);
//    console.log(`sorry,I'm enable to return money`); //runs if promise unfullfilled
// })
// .finally(()=>{
//     console.log(`i wil not give you money again`);
// });  //it will work wheither the promise fulfiled or not
//example 02
function washing() {
    console.log(`Washing started...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`washing done!`);
        }, 5000);
    });
}
function soaking() {
    console.log(`Soaking started...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Soaking done!`);
        }, 3000);
    });
}
function drying() {
    console.log(`Drying started...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Drying done!`);
        }, 2000);
    });
}
// washing()
// .then((value)=>{
//     console.log(value);
//     return soaking();
// })
// .then((value)=>{
//     console.log(value)
//     return drying();
// })
// .then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
//     console.log(`your machine is broken`);
// });
// //Async+await
async function runWashingMachine() {
    try {
        const result1 = await washing();
        console.log(result1);
        const result2 = await soaking();
        console.log(result2);
        const result3 = await drying();
        console.log(result3);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log(`i will run anyway`);
    }
}
;
runWashingMachine();
export {};
