// UNKNOWN
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string')userName = userInput;

// NEVER
function generateErr(message: string, code: number): never {
    throw {message, code};
}

const res = generateErr('An error occurred', 500);
console.log(res);

