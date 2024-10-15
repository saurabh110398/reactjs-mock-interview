const { log } = require("console");

// Object literal
let user ={}
// constructor function
let obj = Object();
obj.name ='jas'
console.log(obj);
// Object.create
let obj1 = Object.create(obj);

console.log(obj1.name);
// Object.assign
let obj2 = Object.assign({}, obj)
console.log(obj2);
// 
function Personn(a,b){
    this.a=a

this.b = b;}
let p = new Personn(2,3)
console.log(p);

// ES6
class Emp{
    constructor(name,age){
        this.age = age;
        this.name = name
    }

}
let e = new Emp('harry', 33)
console.log(e);
// singelton
let obj3 = new (function(name){
    this.name = name
})
obj3.name='lll'
console.log(obj3);

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
console.log(arrayIntegers1);//1,2
console.log(arrayIntegersOriginal1);
console.log(arrayIntegers2);//4
console.log(arrayIntegersOriginal2);
console.log(arrayIntegers3);//1,2,3,a,b,c,5


console.log(arrayIntegersOriginal3);


const func = ()=>{
    console.log('1st order');
}
const func2 = (func)=>{func()}
console.log(func2(func));

let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);
console.log(encoded_uri);
console.log(decoded_uri);


const memo = ()=> {
    let cache ={}
    return((value)=>{
       if(cache[value] == undefined){
         console.log('Calculate');
         let r = value + 30;
         return cache[value] = r;
       }
       else{
        console.log('cache value');
        return cache[value]
       }

    })
}

const result = memo();
console.log(result(20));
console.log(result(220));
let symb = Symbol()
let uu = {
    name:'ooop',
    age:99,
    [symb]:88,
    greetings: function(params) {
        return `hey ${this.name}`
    }
    
}


const Prom = new Promise((resolve, reject)=>{
    console.log('inside Promise');
    setTimeout(()=>{
        console.log('Async task');
        resolve({
            name: 'prom 2',
            age : 33
        });
        reject('i want this call');
    },3000)
    
})

Prom.then(()=>{
    console.log('Promise Consumed');
}).catch((error)=>{
    console.log('error :: ',error);
})

console.log('----');

function multi(num){
    return num*8
}
console.log(multi);
console.log(multi.prototype);



