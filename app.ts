function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text'){
    let result;
    
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    
    // if(resultConversion === 'as-number'){
    //     return +result;
    // } else {
    //     return result.toString();
    // }

    return result;
}

console.log(combine(2, 4, 'as-number'));
console.log(combine('Juan', 'Sebastian', 'as-text'));
