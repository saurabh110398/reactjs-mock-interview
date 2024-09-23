// How Specificity Works:
// --------------
// CSS specificity determines which styles are applied
//  to an element when there are conflicting rules. 
//  It is calculated based on the types of selectors used, 
//  and the more specific a selector, the higher its priority
//   in determining the final styles for an element.
// Specificity is calculated using a point system, and selectors are divided into four categories, represented as four values (a, b, c, d):

// a = Inline styles (if present).
// b = ID selectors.
// c = Class selectors, attribute selectors, and pseudo-classes.
// d = Type selectors (element names) and pseudo-elements.
// Each selector in a rule adds points to one or more of these categories, and the selector with the highest points wins. If two selectors have the same 
// specificity, the last one in the stylesheet is applied.



// // getelementbyclassname vs querySelectorAll
// getElementsByClassName -- return HTML collection , array like, no foreach
// querySelectorAll -- return nodelist , array like, foreach

// declarative and imparitive way of programming
// react element

// Hoisting
//  var x=20;
//  function foo(){
//     console.log( x);//undefined
//     var x =10;
//  }
//  foo();


//  var x=20;
//  function foo(){ 
//     var x =10;
//  }
//  foo();
//  console.log( x);//20



//  function foo(){   
//      x =10;
//  }
//  foo();
//  console.log( x);//act as aglobal variable

//  function foo(){ 
//     console.log( x);//error -> not defined 
//      x =10;
//  }
//  foo();


// 'use strict'
//  function foo(){   

//      x =10;
//  }
//  foo();
//  console.log( x);//strict mode --> throw error


// type= module ===> strict mode

// foo();
// var foo =20;
// function foo(){
//     console.log('calling foo');
// }

// foo();

// for(var i=1;i<=3;i++)
//     {((i)=>{
//         setTimeout(()=>{
//             console.log(i);
//         },1000);
//     })(i)
//     }

// setTimeout(()=>{
//     console.log('timeout');
    
// },0);
// Promise.resolve().then(()=>console.log('promise'));
// console.log('end');

async function foo() {
   return 'hello'
   
    
}
const result = foo();
result.then(res=> console.log('res:: ',res)
)
console.log('::',result);







