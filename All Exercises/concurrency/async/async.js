"use strict";
//concurrency 
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('one');
// setTimeout(function(){
//     console.log('hello world');
// }, 2000) //2 sec
// console.log('two');
//washing machine behaviour
function washing(callback) {
    console.log('washing started...');
    setTimeout(() => {
        console.log('washing done!');
        callback();
    }, 5000);
}
function soaking(callback) {
    console.log('soaking started...');
    setTimeout(() => {
        console.log('soaking done!');
        callback();
    }, 3000);
}
function drying() {
    console.log('drying started...');
    setTimeout(() => {
        console.log('drying done!');
    }, 2000);
}
;
washing(() => {
    soaking(() => {
        drying();
    });
});
