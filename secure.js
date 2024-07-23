/**Secure Password  Generator
=========================

Description
This project is a Secure Password Generator created as part of an internship program. The generator produces secure passwords of a specified length, ensuring a mix of uppercase letters, lowercase letters, numbers, and special characters for enhanced security.

Features
- Generates secure passwords with a specified length.
- Ensures inclusion of uppercase letters, lowercase letters, numbers, and special characters.
- Randomly shuffles the password to prevent predictable patterns.

Installation
1. Ensure you have Node.js installed on your system.
   Download Node.js from: https://nodejs.org/
2. Download or clone this repository to your local machine.

Usage
1. Save the provided JavaScript code into a file named securePasswordGenerator.js.
2. Open a terminal or command prompt.
3. Navigate to the directory where securePasswordGenerator.js is saved.
4. Run the script using Node.js with the command:
Or, open the file in a browser's console and execute the code.
5. The generated secure password will be displayed in the console.

Code **/

function generatePassword(length) {
 const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
 const numbers = '0123456789';
 const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
 
 const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;
 
 let password = '';
 
 // Ensure the password contains at least one of each type of character
 password += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
 password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
 password += numbers.charAt(Math.floor(Math.random() * numbers.length));
 password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
 
 // Fill the rest of the password length with random characters
 for (let i = password.length; i < length; i++) {
     password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
 }
 
 // Shuffle the password to prevent predictable patterns
 password = password.split('').sort(() => 0.5 - Math.random()).join('');
 
 return password;
}

// Example usage:
const passwordLength = 16; // Specify the desired password length
const securePassword = generatePassword(passwordLength);
console.log('Generated Secure Password:', securePassword);