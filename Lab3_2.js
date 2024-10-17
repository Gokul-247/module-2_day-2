console.log("For Loop")

for (let i=0;i<10;i++){
    console.log(i)
}

console.log("While Loop");
let count = 0;

while(count<=10){
    console.log(count);
    count++;
}

console.log("Do While Loop");
let count1 = 0;

do {
    console.log(count1);
    count1++;
}while(count1<=10)


console.log("Printing out odd and even values");
let num =1;

for (let i=1;i<10;i++){
    if(num % 2 == 0){
        console.log("The number is even",num); 
        if (num == 6){
            break;
        }   
    }
    else{
        console.log("The number is odd",num);    
    }
    num++;
}
