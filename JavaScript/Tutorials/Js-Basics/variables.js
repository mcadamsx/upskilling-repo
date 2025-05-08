//Strings
let fname = "Emmanuel"
let lName = "Mensah"
console.log(fname.at(3)) //The at() method of String  values takes an integer value and returns a new String
console.log(fname.charAt(4)) //The charAt() method of String  values returns a new string consisting of the single UTF-16 code unit at the given index.
console.log(lName.trim()) //The trim() method of String  values removes whitespace from both ends of this string and returns a new string, without modifying the original string
console.log(fname.charCodeAt(0)) // The charCodeAt() method of String  values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
console.log(fname.codePointAt(7)) // The codePointAt() method of String  values returns a non-negative integer that is the Unicode code point value of the character starting at the given index
console.log(fname.concat(` ${lName}`)) //The concat() method of String  values concatenates the string arguments to this string and returns a new string
console.log(fname.endsWith("l", 5))
