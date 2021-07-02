var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];
var accumulator = 0;

for (var index in myArray){
    var elements = myArray[index]
    accumulator = accumulator + elements;
}

var avarage = accumulator / myArray.length;

console.log(avarage);


// 1. Declare a variable with value of 0
// 2. Loop the array to add all the numbers
// 3. Inside the loop add the elements to the accumulator
// 4. After the loop, create a variable that has the average - the sum of all the numbers divided by the length of the array
// 5. Console log that avarage variable