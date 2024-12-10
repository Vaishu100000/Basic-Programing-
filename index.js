function checkPrime(num) {
    if (num <= 1) {
        return false; 
    }
    if (num === 2) {
        return true; 
    }
    if (num % 2 === 0) {
        return false; 
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
 console.log(checkPrime(7));  
 console.log(checkPrime(10)); 
 console.log(checkPrime(13)); 

function evenOdd(num){
    if (num%2==0){
        console.log("true")
    }
    else{
        console.log("false")
    }
}

evenOdd(2)
