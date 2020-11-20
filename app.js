function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// Callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(4, 5));
addAndHandle(4, 5, printResult);
// Function as type
var combineValues;
combineValues = add;
console.log(combineValues(7, 6));
