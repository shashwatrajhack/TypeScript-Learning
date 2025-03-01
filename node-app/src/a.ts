// function greet(firstName:string){
//     console.log("Hello"+firstName);

// }
// greet("shashwat");

// function sum(a:number,b:number){
//     return a+b;
// }

// const value = sum(5,9);
// console.log(value);

// function isLegal(age:number):boolean{
//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }

// }

// const legal = isLegal(55);
// console.log(legal);

//callBack function runs after 1 second

// function runAfter1S(fn:() => void){
//     setTimeout(fn,5000);

// }

// runAfter1S(()=>{
//     console.log("Hello");
// })

//Interface

interface User{
    firstName:string;
    lastName:string;
    email:string;
    age:number;

}

function swing(user:User){
    console.log("you can enjoy " + user.firstName);
}

function isLegal(user:User){
    if(user.age>18){
        return true;
    }else{
        return false;
    }

}