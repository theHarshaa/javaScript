function palindrome(str) {
   const modifiedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Check if the modified string is equal to its reverse
  return modifiedStr === modifiedStr.split('').reverse().join('');
  
}

palindrome("eye");
