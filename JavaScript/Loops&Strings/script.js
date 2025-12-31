// loops

// 1) FOR LOOP

// for (let i = 1; i <= 100; i++) {
//     console.log("shyam rana is GOAT");
// }

//Example 1 (find the sum)

// let sum = 0;
// for (let i = 1 ; i <= 10 ; i ++){
//     sum = sum +i;
// }
// console.log(sum)


// 2) WHile loop (we can do everything same as in for)

// let i = 1;
// while(i <=6){
//     console.log(i);
//     i++
// }


//3) Do while loop

// let i = 1;
// do{
//     console.log("i = " , i);
//     i++;
// } while(i <=10);

// 4) for-of loop

// 5) for-in loop


// PRACTICE

// 1) print all even no. from 0 to 100??

//solution
 

// 2) print all odd no. from 0 to 100??

//solution

// for(let i = 0 ; i<= 100 ; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// 3) a small game 

//solution

// let realNum = 25;
// let gameNum = prompt("guess the num to win a game");

// while (realNum != gameNum){
//     gameNum = prompt("entered num wrong. guess agian");
// }
// console.log("u win the game");


// String ["" ; '' ; `` ]

// Template Literals

// Double ; single string [""]
// These Sting Are use to print any word and sentence by using "" ; '' strings in console.log() form.

// Back tick `` or String Interpolation
// This string is used to print word , s3nteences and number together in a single line of code.
// for example

// let backTick = {
//     item : "BMW",
//     roadPrice : 20 + "lakh",
//     rentPrice : 2 + "lakhs",
// }
// console.log(`The cost a ${backTick.item} is ${backTick.roadPrice} Rupee on Raod and For a Day the Price is ${backTick.rentPrice} ${432-2364+23467-23764*0}`);


// NOTES

// 1) to get lenght

// let str = "shyam rana";
// console.log(str.length)

// 2) to get string index no.(or to pront particular index no. value like print index no. 0 to get s as a answer)

// let str = "shyam rana is a hero";
// console.log(str[1]); 

// 3) \n Next line
// we can say \n is a <br> tags of JavaScript 

//Example
// console.log("Shyam\nRana"); 

// 4) \t TAb Space

//Example
// console.log("Shyam\tRana");

// 5) String in Upper Case
// str.toUpperCase()

// Example

// let str = "shyam_rana"
// console.log(str.toUpperCase());

// 6) String in lower Case
// str.toLowerCase()

// Example

// let str = "SHYAM_RANA"
// console.log(str.toLowerCase());

// 7) to trim some gap in a sentences
// str.trim() 
//it trim the gap from starting and ending but not in betwwen the word.

// Example

// let str = "SHYAM_RANA"
// console.log(str.trim());




// Practice question

//ques 1
// Prompt the user to enter their full name. Generate a username for them based om the input. Start username with @, Followed by their full name and ending with the fullname length???


// solution

// let enterName = prompt("Enter your Full Name");
// let userName = "@" + enterName + enterName.length ;
// console.log(userName) ;