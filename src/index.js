module.exports = 
function reverse (n) {
    let result = '';
    let strNumber = String(n);
    let arrayOfChars = strNumber.split('');
    for (let i = arrayOfChars.length - 1; i >= 0; i--) {
        result += arrayOfChars[i];
    }
    return parseInt(result);
}

//str.split('').reverse().join('');

//console.log(reverse(45678))
