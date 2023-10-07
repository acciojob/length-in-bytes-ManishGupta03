const byteSize = (str) => {
  // write your code here
	// Create a TextEncoder object
    const encoder = new TextEncoder();

    // Encode the string to bytes using UTF-8 encodinga 
    return encoder.encode(str).length;

    // Return the length of the encoded byte array
    // return encoded.length;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
