console.log('promises');
const fetch = require('node-fetch')

// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         // console.log('Async task');
//         resolve();

//     }, 1000)

// })

// promise.then(()=>{
//     console.log('Promise consumed');
// })
// .catch((err)=>{
//     console.log('error :: ',err);
// }).finally(()=>console.log('finally'))

let user = {
    name: 'Dell',
    year: 2017
}

// new Promise((resolve, reject)=>{
//     resolve(user);
//     console.log('Async opr');
// }).then((resp)=> resp.year)
// .then((year)=>console.log('year;',year))

// let promFive = new Promise((res, rej) => {
//     setTimeout(() => {
//         let err = 0;
//         if (err) {
//             res(user);
//         } else {
//             rej('ERROR: JS File')
//         }
//     }, 2000)
// });

// let consume = async()=>{
//  try{
//     let resp = await promFive
//  console.log('resp 5',resp);
//  }catch(err){
//     console.log("err:: ", err);
//  }

// }

// consume();

async function getAllUsers() {
    try {
        let url = 'https://jsonplaceholder.typicode.com/users'
        // let url = 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar';
        let response = await fetch(url,{
            method:'GET'
        })
        console.log(await response.json());
    }
    catch (err) {
        console.log('Error in fetch : ', err);
    }
}
getAllUsers()



