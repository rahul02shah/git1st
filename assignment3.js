const cardtype = 3;
let count = 0;
function cardcheck(input,cardtype){
   let result = input.forEach(element => {
    if (element === cardtype){
        count++;
    }
   });
   return count;
}
let input = [1,2,3,4,5,3,3,3,33,,7,8,9,10,11,12,13];
let output  = cardcheck(input,cardtype);
console.log(output);





