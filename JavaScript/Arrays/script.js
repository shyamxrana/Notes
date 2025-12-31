// ARRAYS 
// It is used to stor multiple data in a line of code and collect info in a single way

// INDEX VALUE
// let studentMark = [22, 90 , 990, 57, 90];
// console.log(studentMark);

//STRINGS
// let name = ["shyam rana" , "ironman"];
// console.log(name);


// To print specify index in array
//  let studentMark = [22, 90 , 990, 57, 90];
// console.log(studentMark[0]);

// LOOP in ARRAYS

// let hero = ["ironman",  "spiderman" , "badman", "superman"];

// 1) for loop
// for(let i = 0 ; i < hero.length; i++){
//     console.log(hero[i]);
// }

// 2) for-to loop
// for ( let heros of hero){
//     console.log(heros);
// }

// 3) foreach loop
// let city = ["delhi", "pune", "mumbai"];

// city.forEach((names)=>{
//     console.log(names.toUpperCase());
// })



// METHOD

// 1) push()

// TO add something or some value in a array at the add

// let items = ["potato", "tomato", "apple"];
// items.push("chips" , "aaloo", "ladyfinger");
// console.log(items);

// 2)unshift()

//TO add something or some value in a array at the begin

// let items = ["potato", "tomato", "apple"];
// items.unshift("chips" , "aaloo", "ladyfinger");
// console.log(items);

// 3) pop()

// its is used to delete value from last 

//let items = ["potato", "tomato", "apple"];
// items.pop();
// console.log(items);

// 4)  shift()

// to delete the first item from an array

// let items = ["potato", "tomato", "apple"];
// items.shift();
// console.log(items);

// 5) splice()

// to change(add, remove, replace) the value or item in orinary array
// format of splice method splice(startindex, delcount, newelement to add)

// let num = [1,2,3,4,5,6,7,8,9,10];
// num.splice(5,3,101,109);
// console.log(num);

//to ADD 
// let num = [1,2,3,4,5,6,7,8,9,10];
// num.splice(2,0,109);
// console.log(num);

// to REMOVE
// let num = [1,2,3,4,5,6,7,8,9,10];
// num.splice(6,1);
// console.log(num);

// to replace
// let num = [1,2,3,4,5,6,7,8,9,10];
// num.splice(9,1,100);
// console.log(num);

// 6) slice()

// to get specify value from a array

// let hero = ["shyam", "rajnikant", "salman"];
// console.log(hero.slice(0,2));

// 7) toString

// it is udes to cinvert array to string

// let items = ["potato", "tomato", "apple"];
// console.log(items);
// console.log(items.toString());

// 8) concat()

// it join multiple arrays and return result

// let marverl_Hero = ["thor","spiderman", "ironman"];
// let dc_Hero = ["superman","batman"];
// let indian_Hero = ["krish" , "shyam rana"]

// let hero = marverl_Hero.concat(dc_Hero , indian_Hero);
// console.log(hero);

// 9) MAP (similar to foreach loop) but map is used to create a new array.

// let num = [1,2,3,4];
// let nums = num.map((value) =>{
//     return value
// })
// console.log(nums)

// 10) Filter (to get a specify number like een ot odd and create a new array)

// let num = [1,2,3,4,5,6,7,8,9,10];
// let newNum = num.filter((val)=> {
//     return val % 2 ===0 ;
// })
// console.log(newNum)


// Practice

//Ques 1
// for a given array with arrays marks of student -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entier class??

//solution

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = [85 + 97 + 44 + 37 + 76 + 60];
// let aveMark = sum / marks.length;
// console.log(aveMark);

// Ques 2 
//

//solution

// let price = [250, 645, 300, 900, 50];
// for (let i = 0 ; i < price.length ; i++){
//      let offer = price[i] / 10;
//      price[i] -= offer;
// }
// console.log(price);

// Ques 3
// Create an array to store companies "bloombery" ; "microsoft" ; "Uber" ; "Google" ; "ibm" ; "Netflix" ??

// a) remove the first company from the array ?

// solution
// let comp = ["bloombery" , "microsoft" , "Uber" , "Google" , "ibm" , "Netflix"];
// comp.shift();
// console.log(comp);         // shift() method is used

// b) Remove uber & ADD ola in its place

// solution
// let comp = ["bloombery" , "microsoft" , "Uber" , "Google" , "ibm" , "Netflix"];
// comp.splice(2 , 1 , "ola");
// console.log(comp);  

// c) Add amazon at the end
// //solution
// let comp = ["bloombery" , "microsoft" , "Uber" , "Google" , "ibm" , "Netflix"];
// comp.push("amazon");
// console.log(comp);   

// Ques 4
// For a given array of no. , print the sqare of each value using the forEach loop??

//solution
// let num = [1,2,3,4];
// num.forEach((square) =>{
//     console.log(square*square)
// })

// Ques 5
// we have given array of make of student as 99,102,93,56,78 . find out of the marks of students that scored 80??

//solution
// let stumark = [99,102,93,56,78];
// let topper = stumark.filter((val)=>{
//     return val >=90;
// })
// console.log(topper);

// Ques 6
// Take a no. n as input from user. Create an array of no. from 1 to n??

//solution
let n = prompt("enter a number");
let arr = [];
 for(let i=1; i<=n; i++){
    arr[i-1] = i;
 }
 console.log(arr)