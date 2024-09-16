console.log([] == []); // false

// The result of `console.log([] == [])` will be `false`.

// This happens because in JavaScript, the `==` operator compares the **references** of objects, not their contents, when used with non-primitive types like arrays. Since the two empty arrays `[]` are different objects in memory, their references are not the same, and thus the comparison evaluates to `false`.

// If you want to compare the contents of two arrays, you'd need to compare their elements, for example using a method like `JSON.stringify()` or a deep comparison function. Here's an example:

// ```js
// console.log(JSON.stringify([]) == JSON.stringify([]));  // true
// ```
// In this case, the arrays are converted to strings, which allows for content comparison.

// ********************************************************************************************************
console.log([] == '');  // true
// An empty array [] is coerced to an empty string '' when compared with a string. 
// This happens because when an array is coerced to a string, JavaScript joins the array elements (which are none in this case) and results in an empty string.
// The empty string '' is already a string and remains unchanged.
// ********************************************************************************************************

function test1(x){
    console.log(~~x);
    
}
test1(10.8)
// The ~~ (double tilde) is a shorthand trick in JavaScript to truncate a floating-point number, 
// effectively turning it into an integer by discarding the decimal part.
//  It works as a faster alternative to Math.floor() for positive numbers.

// ********************************************************************************************************

const arr =[200, 300, 2, 3,5,30];
console.log(arr.sort()); //[2, 200, 3, 300, 5]

// The sort() method in JavaScript, by default, sorts elements as strings rather than as numbers.
//  This means that each number is converted to its string form, and then the strings are compared lexicographically (similar to dictionary order).

console.log(arr.sort((a,b) =>a-b)); 

// ********************************************************************************************************

// console.log(1);
setTimeout(()=>{
    // console.log(2);
    
},1000);
setTimeout(()=>{
    // console.log(3);
    
},0)
// console.log(4);
// 1,4,3,2

// ********************************************************************************************************

function test2(a, b =1, c){}
// function test2(a, b, ...c){} //length =2
console.log('length :: ',test2.length); //2
// ********************************************************************************************************

let multi = a=>b=>c=>a*b*c
console.log(multi(2)(3)(4));


// infinite currying
function add(a = 0) {
    const f = (b) => {
      if (b === undefined) {
        return a;
      }
      console.log(a,b);
      
      a += b;

      return f;
    };
    console.log('f called:: ',f());
    
    return f;
  }
  
  console.log(add(1)(2)(3)()); // 6
//   console.log(add(10)(20)());  // 30
//   console.log(add(5)());       // 5

// ********************************************************************************************************

let str ='This is Javascript.';

str.split(' ').forEach(ele => console.log(ele))

// ********************************************************************************************************
let arr1 = [[5,6],9, [4,3],8];
console.log(arr1.flat());

// ********************************************************************************************************
function flattenArray(array){
    let f=[];
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            array[i].forEach(ele => {
                f.push(ele);
            })
        }
        else{
            f.push(array[i])
        }
        
    }
    return f;
}
console.log(flattenArray(arr1));



// ********************************************************************************************************
console.log(isNaN(''));//false
console.log(isNaN('abc')); //true


// ********************************************************************************************************
let obj ={
    name :'Reena'
}
let obj2 = {
    age :99
}
Object.setPrototypeOf(obj, obj2)
console.log(obj.age);

console.log(obj.hasOwnProperty('age'));

// ********************************************************************************************************
//pure function eg
function add2(a,b){
    return a+b;
}
add2(2,3)
// ********************************************************************************************************

let value =[1,2,3,4,5];
delete value[1];
console.log(value);

// ********************************************************************************************************

// ********************************************************************************************************

