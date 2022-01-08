showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) 
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++ ) 
    if (number % factor === 0) 
    return false;
    
    return true;
}

// Prime (Whose factors are only 1 and itself)
//Composite (have more than two factors other than 1 and itself) 

// 12 = 1, 2, 3, 4, 6, 12
// 12 can be divided evenly by its factors
// 12 is a composite number because it has many factors

// Prime number example is: 11 = 1, 11
// 13 = 1, 13