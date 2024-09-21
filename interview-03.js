let x= (3,4,5);
console.log(x)// giving last element


function abc(){

}
var abc;
console.log(abc);
// Order of hoisting---> function before the variable var.

let n=10;
console.log(n.toString());
console.log(n.toString(8));//octal conversion

function test(x,y){
    'use strict'
    x=200;
    y=400;
    return arguments[0]+arguments[1];
}
console.log(test(100,200));

// 'use strict' strict mode --> different functionality...

{
    function test2(){
        console.log('test2');
        
    }
}
console.log(test2());

// new Person();
//class decleration is not hoisted
// class Person{
    
// }
new test3()

function test3(){
    console.log('test3'); 
}
let dd= 10 + isNaN(2)?100:200 //100
console.log(dd);

console.log(10  == 10);//true
console.log(10  == 10 == 10);//false
console.log(10  == 10 ==10 == 0);//true

console.log(parseInt( 'jj'));//Nan
console.log( Number(''));//0









