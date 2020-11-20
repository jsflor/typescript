function add(n1: number, n2: number): number {
    return n1+n2;
}

function printResult(num: number): void {
    console.log('Result: '+num);
}

// Callbacks
function addAndHandle(n1: number, n2: number, cb: (n: number) => void){
    const result = n1 + n2;
    cb(result);
}

printResult(add(4, 5));
addAndHandle(4, 5, printResult);

// Function as type
let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(7, 6));
