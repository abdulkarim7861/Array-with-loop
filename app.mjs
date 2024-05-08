// Q:1
//Empty Multi Dimension Array
let arr = [[],[],[]]
//Print Statement
console.log("Multidimensional Empty Array " ,arr);


//Q:2
//2d Array
let matrix =[[0,1,2,3],
             [1,0,1,2],
             [2,1,0,1],
            ]
//Print Statement            
console.log(matrix);

//Q:3
//Array With Number
let number = [1,2,3,4,5,6,7,8,9,10]
//Acesss Every Index Of Array
for(let i = 0 ; i<number.length ; i++){
//Printing Every Element
    console.log(number[i])
}

//Q:4
//User Input 
let table = prompt("Enter Any Number :")
//Run For-Loop 10 time
for(let i = 1; i<11 ; i++){
    //Printing Table
    console.log(`${table} x ${i} = ${table * i}`)
}

//Q:5
//Array with String
let fruits = ["apple", "banana", "mango","orange","strawberry"]
//Acesss Every Index Of Array
for (let i = 0 ; i<fruits.length ; i++){
//Print Every Friut Name
    console.log(fruits[i])
//Telling User Element is at which index  
    console.log(`Element at Index ${i} is ${fruits[i]}`);
}


//Q:6

//Question is not Clear

//Q:7
//User Input For Items
let userItem = prompt("Enter Your Item:")
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]

for(let i=0;i<bakeryItems.length;i++){
    //Print Items Of Bakery
    console.log(bakeryItems[i])
    // Condition For Checking Items In Bakery 
    if(userItem == bakeryItems[i]){
        alert(`${userItem} is available at index ${i} in our bakery`)
        break;   
    }
    else{
        alert(`We are sorry.${userItem} is not available in our bakery`)
        break;
    }
}

//Q:8
// Array With Number And Sorting Array in Ascending Order 
let num1 = [24,53,78,91,12].sort();
let largestNumber = num1[0]

//Acess Every Index Of Array
for(let i=0 ;i<num1.length;i++){

//Print Every index Item
// console.log(num1[i])

//Condition To Check Greater Number Between 2 index    
if(num1[i]>largestNumber){
    largestNumber = num1[i]
    console.log(`The Largest Number is ${largestNumber}`)
}
}

//Q:9
let num2 = [24,53,78,91,12].sort();
let smallestNumber = num2[0]
console.log(`The Smallest Number Is ${smallestNumber}`)

//Q:10
let num = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]
for(let i=0 ; i<num.length ;i++){
    console.log(num[i])
}