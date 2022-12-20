let input;
let palindromechecker = (input)=>{
    let reverse = input.split('').reverse().join('');
    console.log(reverse);
    if (reverse === input){
        console.log(`${input} is palindrome`);
    }
    else{
        console.log(`${input} is not palindrome`);
    }
}
palindromechecker("abba");
