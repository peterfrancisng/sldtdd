// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumofprimes: function(n) {
     if(n < 0) {
      return -1;
     }
     if (typeof(n)!=="number"){
      return -1;
     }

     function myprime(n){
       if(n<=1 || n%2===0){
        return false;
       }

       if(n==2 || n==3){
         return true;
       }

       var mydivisor = 3;
       var limit = Math.sqrt(n);
       while (divisor <= limit){
         if(n%divisor===0) {
          return false;
         }
         divisor +=2;
       }

       return true;

     }

     var sum = 0;
     for(let i = 0; i< n; i++){
       if(myprime(i)){
        sum +=1;
       }
     }
      return sum;
  }
}