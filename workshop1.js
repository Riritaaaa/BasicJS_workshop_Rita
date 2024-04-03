function calMax(){
    const arr = [22, 19, 2, 89, 77];
    const result = Math.max(...arr);
    return result;
}

console.log('1) ' +calMax());
/**************************************************/ 
function sortArray(){
    const arr = [22, 19, 2, 89, 77];
    const result = arr.sort((a, b) => a -b);
    return result;
}

console.log('2) ' +sortArray());
/**************************************************/ 
function pyramid(rows){
    for (let i = 0; i < rows; i++) {
        var output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);  
    } 
}
console.log('3) ');
pyramid(5);