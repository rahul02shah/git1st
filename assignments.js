const array1 = [1,2,3];
const array2 = [5,6,7];
let temp = 0;
let temp1= 0;
function twosum (input1,input2){
    for (const value of input1) {
        temp *= 10;
        temp = temp + value;
    }
    for (const value1 of input2){
        temp1 *= 10;
        temp1 = temp1 + value1;
    }
    return temp + temp1;
}
const result = twosum(array1,array2);
console.log(result);