const checkPalindrome = function(x) {

    let num = x;
    let isPalindrome = num.toString();
    let temp = isPalindrome.split('');
    temp.reverse();
    isPalindrome = temp.join('');
    isPalindrome = parseInt(isPalindrome)
    if(num === isPalindrome){
        return true;
    }else{
        return false;
    }

};

console.log(checkPalindrome(-121));
console.log(checkPalindrome(121));
console.log(checkPalindrome(10));
console.log(checkPalindrome(898));
