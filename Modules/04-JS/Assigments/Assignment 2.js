function calculateAge(date) {
	const birthDate = new Date(date); // Convert the input date string to a Date object
	const currentDate = new Date(); // Get the current date
  
	const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
	const monthsDiff = currentDate.getMonth() - birthDate.getMonth();
  
	// Adjust the age if the birth month hasn't occurred yet this year
	if (monthsDiff < 0 || (monthsDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
	  return yearsDiff - 1;
	} else {
	  return yearsDiff;
	}
  }
  
  // Test cases
  console.log(calculateAge("20/7/2002") === 19);
  console.log(calculateAge("1/1/1979") === 43);
  