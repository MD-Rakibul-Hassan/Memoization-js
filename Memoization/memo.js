
function sumOfLoop (n) {
    return n + 10
}


// The memo is dynamic function for memoize any value 
const memo = (fn) => {
    // This is my cache object 
    const cache = {};
    return (val) => {
        if(cache[val]) {
            console.log("form catch")
            return cache[val]
        }else {
            const result = fn(val);
            cache[val] = result;
            return result;
        }
    }
}
const result = memo(sumOfLoop);

console.log(result(20))
console.log(result(20))
console.log(result(30))
console.log(result(30))