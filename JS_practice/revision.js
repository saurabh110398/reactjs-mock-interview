// let queries = [
//     ["ADD", "1"],
//     ["ADD", "2"],
//     ["ADD", "5"],
//     ["ADD", "2"],
//     ["EXISTS", "2"],
//     ["EXISTS", "5"],
//     ["EXISTS", "1"],
//     ["EXISTS", "4"],
//     ["EXISTS", "3"],
//     ["EXISTS", "0"]
// ]

// function solution(queries) {
// let arr=[];
// // let b11 = queries.map(ele=> ele[0] == 'ADD' && ele[1]);
// let b11=[];
// // console.log('b11:: ',b11);

// queries.map(ele=>{
//     let [a,b] =ele.map(item=>item);
//     if(a == 'ADD'){
//         arr.push("");
//         b11.push(b);
//     }else{

//         if(b11.includes(b)){

//             arr.push("true")
//         }
//         else{
//             arr.push("false")
//         }
//     }   
// })
// console.log('result:: ',["", "", "", "", "true", "true", "true", "false", "false", "false"]);
// console.log('result:: ',arr);

// }
// solution(queries)




let queries = [
    
["CREATE_ACCOUNT","1","account1"], 
 ["CREATE_ACCOUNT","2","account2"], 
 ["DEPOSIT","3","account1","2500"], 
 ["DEPOSIT","4","account1","500"], 
 ["DEPOSIT","5","account2","1000"]
]

function solution(queries) {


    // let deposite = [];
    // queries.map(ele => {
    //     if (container.includes(ele[2])) {
    //         //     let sum = sum +  ele[2];
    //         //  deposite.push(sum)   
    //     }
    // })
    let arr = [];
    let container = []
    let deposite=0
    queries.map((ele, i) => {
        let [a, b, c, d] = ele.map(item => item);
        // console.log(d);


        if (a == "CREATE_ACCOUNT") {
            if (container.includes(c)) {
                arr.push("false")
            }
            else {
                arr.push("true")
            }
        }
        // if (a == "DEPOSIT") {
        //     if (container.includes(c)) {
        //         arr.push(d)
        //     }
        //     else {
        //         arr.push("")
        //     }
        // }
        if (a == "DEPOSIT") {
            let sum =0;
            if (container.includes(c)) {
                // let pay = queries.filter(ele => {
                //     if (deposite !=0 && ele[0] == "DEPOSIT" && ele[2] == c) {
                //          deposite =deposite + Number(ele[3]);
                //          deposite=deposite/2;
                //          console.log('@@@@@@1111111111@@@@@@@',deposite);
                //     }
                //     // else if (deposite ==0 && ele[0] == "DEPOSIT" && ele[2] == c) {
                //     //     deposite = Number(ele[3])
                //     //     console.log(ele,'@@@@@@@222222222@@@@@@',deposite);
                //     // }
                //     // else{
                //     //     deposite = Number(ele[3])
                //     //     console.log(ele,'@@@@@@@222222222@@@@@@',deposite);
                //     // }
                // })
                for(let j=0;j<=i;j++){
                    if (deposite !=0 && queries[0] == "DEPOSIT" && queries[2] == c) {
                        deposite =deposite + Number(queries[3]);
                        // deposite=deposite/2;
                        console.log('@@@@@@1111111111@@@@@@@',deposite);
                   }
                }
                deposite =Number(d);
                
                
                
                
                
                    arr.push(deposite )
                
            }
            else{
                arr.push('')
            }
           
        }
        if (a == "PAY") {
            let sum =0;
            if (container.includes(c)) {
                let pay = queries.filter(ele => {
                    if (ele[0] == "DEPOSIT" && ele[2] == c) {
                         sum =sum + Number(ele[3]);
                    }
                })
                
                
                if(sum-d > 0){
                    arr.push(sum-d )
                }else{
                    arr.push('')
                }
            }
           
        }

        container.push(ele[2])
        console.log(i, 'cont:: ', container, ":c:", arr);


    })

    console.log('--------------', arr)
    return arr;


}
solution(queries)
