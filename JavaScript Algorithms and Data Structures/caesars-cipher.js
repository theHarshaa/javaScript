function rot13(str) {
   // Regular expression to match uppercase letters
  const uppercaseRegex = /[A-Z]/;
  
  // Function to decode a single character
  function decodeChar(char) {
    // Get the character code
    const charCode = char.charCodeAt(0);
    
    // Check if the character is an uppercase letter
    if (uppercaseRegex.test(char)) {
      // Apply the ROT13 decoding
      return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else {
      // Return non-alphabetic characters as is
      return char;
    }
  }
  
  // Split the string into an array of characters, decode each character, and join them back
  return str.split('').map(decodeChar).join('');
}

rot13("SERR PBQR PNZC");