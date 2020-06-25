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

console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(name[0]);
    console.log(name[1]);
    console.log(name[2]);
    console.log(name[3]);



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0 ; i < names.length ; i++){
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name) {
        console.log(name);
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
    console.log(numArray[0]);
    console.log(numArray[1]);
    console.log(numArray[4]);
    for (var i = 0; i < numArray.length; i++){
        if (i === 0){
            console.log(numArray[0]);
        } else if (i === 1){
            console.log(numArray[1]);
        } else if (i === 4){
            console.log(numArray[4]);
        }
    }



})();
