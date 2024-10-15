
var x = 20;
function foo() {
    console.log(x);//undefined
    var x = 10;


}
// foo();

// -------------------------$$$$$$$$$$$$$--------------------------

function outer() {
    function inner() {
        console.log(x);//5
    }
    const x = 5;
    return inner;
}
const inner = outer();
// inner();
// -------------------------$$$$$$$$$$$$$--------------------------

// console.log('start');
// setTimeout(()=>{
//     console.log('timeout');

// },2000)

// console.log('end');


// -------------------------$$$$$$$$$$$$$--------------------------

for (let i = 0; i <= 3; i++) {
    // (function (i) {
    //     setTimeout(() => {
    //         console.log(i);
    //     }, 2000 * i)
    // })(i);
    setTimeout(() => {
        // console.log(i);
    }, 2000 * i)
}
// -------------------------$$$$$$$$$$$$$--------------------------

let str = 'Monday ';
let revStr = str.split('');
let s = '';
for (let i = revStr.length - 1; i >= 0; i--) {
    s += revStr[i];
}
// console.log(s);



// -------------------------$$$$$$$$$$$$$--------------------------
let arr = [1, 3, 1, 1, 22, 5, 3, 4];
// console.log([...new Set(arr)]);
// console.log(revStr.reduce((acc,curr)=>  curr+acc
// ));



// -------------------------$$$$$$$$$$$$$--------------------------

const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = 
array.filter((value, index, self) => {
    // console.log(self);

    // self.indexOf(value) === index
});
// console.log(uniqueArray); 

let obj = {};
let val = 'Monday is first day of a week';
let xx = val.split(' ');
// console.log(xx.length);


for (let i = 0; i < xx.length; i++) {
    // console.log(xx[i]);
    obj[xx[i]]= xx[i].length


}
console.log(obj);

