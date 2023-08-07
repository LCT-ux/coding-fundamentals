function factorial(anyNumber) {
	if (anyNumber === 0 || anyNumber === 1) {
	  return 1; // Factorial of 0 or 1 is 1
	} else {
	  let result = 1;
  
	  for (let i = 2; i <= anyNumber; i++) {
		result *= i;
	  }
  
	  return result;
	}
  }
  
  // Test cases
  console.log(factorial(5) === 120);
  console.log(factorial(4) === 24);
  console.log(factorial(1) === 1);
  