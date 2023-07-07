function telephoneCheck(str) {
  // Regular expression pattern for valid US phone numbers
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  
  return regex.test(str);
}

telephoneCheck("555-555-5555");