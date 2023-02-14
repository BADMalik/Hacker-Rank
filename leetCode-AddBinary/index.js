/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //make strings equal first
    if (a.length > b.length) {
       let diff = a.length -b.length;
       let newString = "0".repeat(diff)
       b = newString + "" + b 
    }
    if (a.length < b.length) {
       let diff = b.length - a.length;
       let newString = "0".repeat(diff)
       a = newString + "" + a 
    }

    let ans = ""
    let carry = 0;
    for (let i =a.length-1; i>=0; i--) {
        let sum = (parseInt(parseInt(a[i]) + parseInt(b[i]) + carry));
        console.log('carry', sum)
        carry = Math.floor(sum/2);
        
        ans =  sum%2 + "" + ans
    }

    if (carry!== 0) {
        ans = "1" + ans;
    }

    return ans

    console.log(a,b)

    // return res;
};
