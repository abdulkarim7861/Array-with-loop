// Q:1
let arr = [[],[],[]]
console.log("Multidimensional Empty Array " ,arr);


//Q:2
let matrix =[[0,1,2,3],
             [1,0,1,2],
             [2,1,0,1],
            ]
console.log(matrix);

//Q:3
let number = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0 ; i<number.length ; i++){
    console.log(number[i])
}

//Q:4
let table = prompt("Enter Any Number :")
for(let i = 1; i<11 ; i++){
    console.log(`${table} x ${i} = ${table * i}`)
}

//Q:5
let fruits = ["apple", "banana", "mango","orange","strawberry"]
for (let i = 0 ; i<fruits.length ; i++){
    console.log(fruits[i])
    console.log(`Element at Index ${i} is ${fruits[i]}`);
}


//Q:6

//Question is not Clear

//Q:7
let userItem = prompt("Enter Your Item:")
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]

for(let i=0;i<bakeryItems.length;i++){
    // console.log(bakeryItems[i])
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
