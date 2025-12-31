// // Artimetic operators

// let a = 5;
// let b = 2;
// console.log("a + b =" , a + b); //add
// console.log("a - b =" , a - b); //sub
// console.log("a * b =" , a * b); //multipetion
// console.log("a / b =" , a / b); //divide
// console.log("a % b =" , a % b); //modules
// console.log("a ** b =" , a ** b); // 5^2 power wala case

//Aperators operators

// // a++; //a+1
// b--; //a-1
// console.log(a,b);
// a += 3; //a = a + 3
// console.log("a=",a);
// a-= 2; //a = a-2
// console.log("a=" , a);
// a *= 2; //a = a*2
// console.log(a)

//comparsion operator

// let a = 5 ;
// let b = 2 ;
// console.log("a === b ", a === b);// is a === b or not(=+= means a is strictly equal to b or not)
// console.log("a !== b", a !== b); //is a !== b (!=+ means a is strictly not equal to b)

//logical operator (&& and , || or , ! not)

// let a = 5 ;
// let b = 2 ;
// console.log(a > b || a===b);
// console.log(a>b && a===b);
// console.log(!(a>b))


// if else conditon

//example 1(vote)

// let age = 18;
// if(age >= 18){
//     console.log("u can vote");
// }
// else{
//     console.log("u cannot vote");
// }

//example 2 (dark or light mode)

// let mode = "light";
// let color;
// if(mode === "dark"){
//     color = "black"
// } 
// if(mode === "light"){
//     color = "white"
// }
// console.log(color);

//example 3(odd & even no.)

// let number = 54345;
// if(number % 2 === 0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

//age wala Example 4

// let age = prompt("enter your age to get reward");
// if(age <18){
//     console.log("u are mirror")
// }
// else if(age >=18 && age <60){
//     console.log("u are adult")
// }
// else if(age >=60){
//     console.log("u are Senior Citizen")
// }
/* else{
   error }*/

// Ternary Operators (simply form of if & else )

//    let age = prompt("enter yout correct age");
//    let result = age >=18 ? "adult" : "not adult";

//    console.log(result);

// Partice Questions

// 1 [Get user to input a no. using prompt ("enter a no."). Check if the no. is a mutiple of 5 or not??]

//solution 

// let num = prompt("enter any number")
// if (num % 5 ===0 ){
//     console.log(num ,"number is a multiple of 5")
// }
// else {
//     console.log(num ,"number is not multiple of 5")
// }

// 2 [Allotes Grades to student 80-100(A); 70-89(B); 60-69(C); 50-59(D); 0-49(F)]

//solution

// let Grades = prompt("enter your Grades");

// if (Grades >=90 && Grades <=100){
//     console.log("A")
// }
// else if(Grades <90 && Grades >=70){
//     console.log("B")
// }
// else if(Grades <70 && Grades >=60){
//     console.log("C")
// }
// else if(Grades <60 && Grades >=50){
//     console.log("D")
// }
// else if(Grades <50 && Grades >=0){
//     console.log("F")
// }
// else{
//     console.log("ERROR, Grades is up to 100, Write your real Grades")
// }