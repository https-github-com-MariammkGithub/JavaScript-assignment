//1.Using while loop print 1-10numbers

var i= 1;
while(i<=10){
    console.log("GM",i);
    i=i+1;
}

//2.Using while loop print 1-10numbers
var i= 10;
while(i>=1){
    console.log(i);
    i=i-1;
}

//3.Using for loop print 5-15numbers
var i= 5;
for(var i=5; i<=15; i=i+1){
    console.log(i);
    }

//4.Using for loop print 15-10numbers
var i= 15;
for(var i=15; i>=10; i=i-1){
    console.log(i);
    }

//5.Using while loop print 1-10 even numbers

var i=1; 
while(i<=10){
if(i%2===0)
console.log(i);
console.log("<br>");
i=i+1;
}
//6. Using for loop print 1-10 odd numbers
for(var i=1; i<=10; i+=2) 
{
if(i%3!=0);
console.log(i+2);

}

//7. Using while loop print first 10 multiples of 4
var i=1; 
while(i<=10){

console.log(i*4);
console.log("<br>");
i=i+1;
}

//9. Using while loop print  multiples of 6
var i=1;
while(i<=10){
    console.log(i*6)
    console.log("<br>")
    i=i+1
}

//10. Using while loop print  multiples of 6

let number=24;
let numfactorial=number;
while(number>1){
    numberfactorial=numberfactorial*(number-1);
    number--;
}
    console.log(numberfactorial);
   


