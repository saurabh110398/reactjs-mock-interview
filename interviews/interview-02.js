// What is HTTP request ?
console.log('Script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

new Promise((res, rej)=> console.log('promise consumed'), res())
.then(() => {
  console.log('Promise');
});

console.log('Script end');

// Event loop

let arr =[1,2,3,4];

function add(x,y,z,k){
    return x+y+z+k;
}
console.log('spread:: ',add(...arr));
function multi(...args){
    return args.reduce((acc, curr)=> acc*curr)
   
}
console.log('rest:: ',multi(2,3,4));

let str = 'nitin';
let isPali = str.split('').reverse().join('')
console.log(isPali === str); 

// Shallow copy, deep copy
let obj ={
    name:'Shanti',
    age : 78,
    address:{
        city: 'kanpur',
        state: 'UP'
    }
}

let newObj =JSON.parse(JSON.stringify(Object.assign(obj)))
// let newObj = {...obj}
// console.log(newObj);
newObj.age =83;
newObj.address.state ='mp';
console.log('obj :: ',obj);
console.log(' newobj :: ', newObj);

console.log('5'-3);

// doctype, 
// head tag, 
// better place to add js file in html
// 1. At the Bottom of the <body> (Before the Closing </body> Tag)
// This is the most commonly recommended place to include your 
// JavaScript, as it allows the HTML content to be fully parsed 
// and rendered before executing any JavaScript.
// 2. In the <head> Tag with defer or async Attribute
// If you want to include the JavaScript in the <head>, you should use the defer or async attribute to ensure
//  it doesn’t block the loading of the HTML.

// Using defer:
// Defers the Script Execution: The script is downloaded in parallel with the HTML but won’t execute until the entire document is fully parsed.
// Preserves Script Order: Scripts with defer will execute in the order they appear in the document.
// Using async:
// Asynchronous Execution: The script is downloaded in parallel and executed as soon as it’s available. This can lead to faster load times, but the scripts may execute out of order.
// Best for Independent Scripts: The async attribute is useful for scripts that do not depend on any other scripts or DOM content, like third-party analytics or ads.

// can we create custom element name or tag.
// replacable and non replacable inline element --> img tag allows to set width/height as it is inline element

// inline element do not follow box model

class User{
  constructor(name){
    this.name = name
  }
}
function f(){

}
let x = new User;
let person =[2]
console.log('type of class :: ', typeof person);
let test = false;
let promise = new Promise((res, rej)=>{
  document.querySelector('.resolve').addEventListener('click',()=>{
    console.log('resolve clicked');
    res('Promise resolved');
  })
  document.querySelector('.reject').addEventListener('click',()=>{
    console.log('reject clicked');
   
    rej('Promise Failed')
  })
})



// promise
// .then(()=>console.log('resolved'))
// .catch(error=> console.log('error:: ',error))


async function getDatta(){
 try{
  let val =  await promise;
  console.log('val :: ',val);
  return val
 }
 catch(error){
  console.log('catch error,:: ',error);
  
 }
  
}

let res =  await getDatta();
console.log('res::: ', res);

 



 
