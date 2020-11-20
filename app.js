// UNKNOWN
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string')
    userName = userInput;
// NEVER
function generateErr(message, code) {
    throw { message: message, code: code };
}
var res = generateErr('An error occurred', 500);
console.log(res);
