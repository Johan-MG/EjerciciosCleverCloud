
function digitsSum(inputInt){
    let result = 0;
    for(let i = 0; i<inputInt.length; i++){
        result += parseInt(inputInt[i]);
    }
    return result;
}

function isPalindrome(inputStr){
    for(let i=0; i<inputStr.length; i++){
        if(inputStr[i] != inputStr[inputStr.length - i - 1]){
            return false;
        }
    }
    return true;
}

function maxAdjacentProd(inputArray){
    let result = parseInt(inputArray[0]*inputArray[1]);
    for(let i=0;i<inputArray.length-1;i++){
        if(parseInt(inputArray[i]*inputArray[i+1])>result){
            result = parseInt(inputArray[i]*inputArray[i+1]);
        }
    }
    return result;
}

console.log(digitsSum("12345"));
console.log(isPalindrome("salas"));
console.log(maxAdjacentProd([3, 6, -2, -5, 7, 3]));

