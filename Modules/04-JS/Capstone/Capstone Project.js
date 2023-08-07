function missingLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
      // Check the difference between ASCII codes of consecutive characters
      if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
        // Return the missing character
        return String.fromCharCode(str.charCodeAt(i) + 1);
      }
    }
  
    // If no missing letter found, return undefined
    return undefined;
  }
  
  // Test cases
  console.log(missingLetter("abce") === "d");
  console.log(missingLetter("abcdefghjklmno") === "i");
  console.log(missingLetter("stvwx") === "u");
  console.log(missingLetter("bcdf") === "e");
  console.log(missingLetter("abcdefghijklmnopqrstuvwxyz") === undefined);
  