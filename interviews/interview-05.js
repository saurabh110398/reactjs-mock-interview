// type selectors in c:
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
//  console.log( x);//10 act as aglobal variable

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
// 

// --------------------------------------------------------------------------
// Promise
// async function foo() {
//    return 'hello'
// }
// const result = foo();
// result.then(res=> console.log('res:: ',res))

// console.log('::',result);
// --------------------------------------------------------------------------

//console.log([1,2] === [1,2]);//false

// --------------------------------------------------------------------------

let user1 ={
   name:'Pari',
   age:'15',
   address: {
      state:'UP'
   }
}
// Shallow copy*************
// let user2 = user1;
// let user2 = {...user1}
// let user2 = Object.assign(user1)

// Deep copy**************
// let user2 = JSON.parse(JSON.stringify(user1));
// let user2 = {...user1, address:{...user1.address}}
// let user2 = structuredClone(user1)//globally available fuction for deep copy
// user2.name = 'Ramesh';
// user2.address.state ='MP';
// console.log('1:: ',user1);
// console.log('2:: ',user2);

// --------------------------------------------------------------------------

function abc(){
   
   // console.log('heyy...');
   // return 'h111' //----> no effect of return statement on constructor function.
   // return {
   //    name:'Ruby'
   // }//----> return the non primitive values
   // return [1,2,3]
   // return ()=>{}
}

const result = new abc();
console.log(result);;


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

import React, { Component, useEffect, useState, useRef } from "react";

import "./App.css";
let obj = { paddingRight: "14px" };

const App = () => {
  let [localData, setLocalData] = useState({
    chk1: false,
    chk2: false,
    chk3: false,
    chk4: false,
  });
  let [all, setAll] = useState(false);

  useEffect(() => {
    console.log("localdata :: ", localData);
    let status = Object.values(localData).every((ele) => ele == true);
    console.log("status:: ", status);
    if (status) {
      setAll({
        ["chkAll"]: status,
      });
    } else {
      setAll({
        ["chkAll"]: false,
      });
    }
  }, [localData]);

  const handleClick = (e) => {
    let name = e.target.name;
    let value = e.target.checked;
    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // console.log(name, ":", value);
  };
  const handleClickAll = (e) => {
    let name = e.target.name;
    let value = e.target.checked;
    setAll((prev) => ({
      ...prev,
      [name]: value,
    }));
    Object.keys(localData).map((key) => {
      console.log(key);
      key != "chkAll"
        ? setLocalData((prev) => ({
            ...prev,
            [key]: value,
          }))
        : "";
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>CheckBox:: Select All</h1>
      <div>
        <label htmlFor="chk1" style={obj}>
          Select All
        </label>
        <input
          name="chkAll"
          type="checkbox"
          onChange={handleClickAll}
          checked={all.chkAll ?? false}
        />
      </div>
      <div style={{ display: "flex" }}>
        <input
          name="chk1"
          type="checkbox"
          onChange={handleClick}
          checked={localData.chk1 ?? false}
        />
        <label htmlFor="chk1" style={obj}>
          1
        </label>
        <input
          name="chk2"
          type="checkbox"
          onChange={handleClick}
          checked={localData.chk2 ?? false}
        />
        <label htmlFor="chk2" style={obj}>
          2
        </label>
        <input
          name="chk3"
          type="checkbox"
          onChange={handleClick}
          checked={localData.chk3 ?? false}
        />
        <label htmlFor="chk3" style={obj}>
          3
        </label>
        <input
          name="chk4"
          type="checkbox"
          onChange={handleClick}
          checked={localData.chk4 ?? false}
        />
        <label htmlFor="chk4" style={obj}>
          4
        </label>
      </div>
    </div>
  );
};
export default App;






