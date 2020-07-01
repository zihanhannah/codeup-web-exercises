(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

let names = [ "Hannah" , "Hung" , "David" , "Daniel" ];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

console.log("there are " + names.length + "elements in the array");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("the first name in the array is " + names[0]);
    console.log("the second name in the array is " + names[1]);
    console.log("the third name in the array is " + names[2]);
    console.log("the fourth name in the array is "+ names[3]);



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0 ; i < names.length ; i++){
        console.log("the " + (i+1) + " name in the array is " + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
console.log(" The name in the name array is: ")
    names.forEach(function(name) {
        console.log("\t" + name);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var numArray = [ 1, 2, 3, 4, 5];
    function first(arr){
        return (arr[0]);
     }
    function second (arr){
        return (arr[1]);
    }
    function last (arr){
        return (arr[arr.length-1]);
    }

    console.log(first(numArray));
    console.log(second(numArray));
    console.log(last(numArray));

})();
