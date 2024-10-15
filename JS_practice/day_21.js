
var reduce = function (nums, fn, init) {
    if (nums.length == 0) {
        return init
    }
    else{
        let x=0, acc=init;
        console.log('i',': ','fnCall'," :: ",'acc');
        for(let i=0;i<nums.length;i++){
          let fnCall = fn(acc, nums[i])
            x = fnCall;
            acc = x;
            console.log(i,': ',fnCall," :: ",acc);
        }

        return x;
    }
    // else{
    //     let x = nums.reduce((acc,curr)=> fn(acc, curr), init);
    //     return x;
    // }

};

let nums = [1,2,3,4];
let fn = function sum(accum, curr) { return accum + curr * curr; }
let init=100 
let result = reduce(nums, fn, init);

console.log('result:: ',result);