//Assignment1: Create a function with a function name printSum( ) and print the sum of an array.
function printSum (array) {
    let totalSum=0;
    for(let i = 0; i < array.length; i++){
        totalSum +=array[i];
    }
   return totalSum
}
// checking if my function works correctly
console.log(printSum([10,20,30]))

/*Assignment2 Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, 
awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.
the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the 
triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing 
a[0] to b[0], a[1] to b[1], a[2] to b[2]

If a[i]>b[i] then alice is awarded 1point

If a[i]<b[i] then bob is awarded 1 point

If a[i]===b[i] then none of them gets a point

The comparison points should be the total points a person earned.
*/

function comparison(a,b) {
    let alicePoint =0;
    let bobPoint =0;

// If length is not equal
if(a.length!=b.length)
return "False";
else
{
    // Comparing Alice and Bob points.
for(let i=0; i<a.length; i++){
    if(a[i] >b[i]){
      alicePoint+=1
    }
    else  if ( a[i] >b[i]){
      bobPoint+=1
    }
    else ( a[i]===b[i])
        return null
}
}
let totalPoints =[]
totalArray.push(alicePoint)
totalPoints.push(bobPoint)

return totalPoints;
}

/*  Given an array of integers, calculate the ratio of its elements that are positive, negative and zero. Print the decimal value of each fraction on a new line with places after the decimal.
*/
function ratio (array){
    let len = array.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for(let i = 0; i < len; i++)
    {
        if (arr[i] > 0)
        {
            positiveCount++;
        }
        else if (arr[i] < 0)
        {
            negativeCount++;
        }
        else if (arr[i] == 0)
        {
            zeroCount++;
        }
    }
    console.log((positiveCount / len).toFixed(4) + " ");
    console.log((negativeCount / len).toFixed(4) + " ");
    console.log((zeroCount / len).toFixed(4));
}

// Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)
function firstFunction (a,b){
    return a+b;
}

