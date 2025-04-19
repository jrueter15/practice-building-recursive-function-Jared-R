// Let's brainstorm here
// I'll want to check if its got a single character, that's the base case
// Do I test it's length all the time? If it's one character print. If it's two characters add it to a new string, then concatenate the first letter to the second later that's already in there. If it's three letters, then add the 3rd, then n-1 to 2 adding the second, then n-1 adding the first

// Declaring the function
function stringReversal(str) {
  //console.log(str); // Testing that the string is getting passed in properly

  if (str.length <= 1) {
    // Base case
    return str;
  } else {
    let nextCharacter = str.charAt(str.length - 1); // Setting "nextCharacter" equal to the last letter - SUMMMARY - Grabbing the last character
    str = str.slice(0, -1); // Should then remove the last character from str
    reversedString = nextCharacter + stringReversal(str); // Recursively calling the function
    return reversedString;
  }
}
console.log(stringReversal("Hello")); // Outputs: "olleH"
console.log(stringReversal("recursion")); // Outputs: "noisrucer"
console.log(stringReversal("a")); // Outputs: "a"
console.log(stringReversal("")); // Outputs: ""
