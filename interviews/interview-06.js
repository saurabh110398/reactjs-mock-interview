let count =99;
const obj = {
    count: 0,
    increment: function() {
        setTimeout(function() {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};
obj.increment();
