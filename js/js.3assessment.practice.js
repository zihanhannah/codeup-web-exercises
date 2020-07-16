// Assessment Review Arrays and Objects

// Welcome to your JS 3rd Assessment Review. This will include some things from the previous assessments, as well as Array and Object manipulation. Below are some practice questions for you to get started.

// TODO: Write a function named 'typeOfValue' that takes in a value and returns its type.
function typeOfValue(value){
    if( Array. isArray(value) ){
        return "array";
    }
    return typeof value;

}
// const typeOfValue = function (value) {
//     if (Array.isArray(value)) {
//         // test if it is an array
//         return "array";
//     } else
//         return typeof value;
// }
let a = [4, 5, 6];
console.log(typeOfValue("hello")); // "string"
console.log(typeOfValue(123)); // "number"
console.log(typeOfValue({})); // "object"
console.log(typeOfValue(a)); // "array"
console.log(typeOfValue(true)); // "boolean"
console.log(typeOfValue(a[2]));

// TODO: Write a function 'isPositive' that takes in a number and returns true or false based on whether the input is positive.

function isPositive(num){
   if(num > 0) {
       return true;
   }
   return false;
}

console.log(isPositive(2));// true
console.log(isPositive(-4));// false
console.log(isPositive(0)); // false


// TODO: Write a function 'removeElement' that takes in an array and a value, and returns an Array with the first instance of the indicated value removed.
function removeElement(arr, val){
    return arr.splice(arr.indexOf(val),1);
}
// const removeElement = function (arr, val) {
//     // let index = arr.indexOf(val);
//     // if (index > -1) {
//     //     arr.splice(index,1)
//     // }
//     // return arr;
//     let arr2 = [];
//     let found = false;
//     for (let i=0;i<arr.length;i++) {
//         if (arr[i] === val && !found) {
//             found = true;
//             continue;
//         } //else {
//         arr2.push(arr[i]);
//         // }
//     }
//     return arr2;
// }
console.log(removeElement([1, 2, 3, 4, 5], 4)); // returns [1,2,3,5]
console.log(removeElement([2, 2, 4, 4, 5], 4)); // returns [2,4,4,5]
console.log(removeElement([10], 10)); // returns []

// TODO: Write a function 'sumOfNumbers' that takes in an array of numbers and returns the sum of all values.
function sumOfNumbers(arr){
    var sum = 0;
    arr.forEach(function(num){
        sum += num;
    })
    return sum;
}
// const sumOfNumbers = function (arr) {
//     let sum = 0;
//     // for (let i=0;i<arr.length;i++){
//     //     sum += arr[i];
//     // }
//     arr.forEach(function(item){
//         sum += item;
//     })
//     return sum;
// }
console.log(sumOfNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumOfNumbers([-1, 15])); // 14

// TODO: Write a function 'evensIndex' that takes in an array of numbers and returns an array containing the index values of all even numbers.

//  function evensIndex(arr){
//    var  evenNumIndex = [];
//      arr.forEach(function(num,index){
//          if(num % 2 == 0){
//            evenNumIndex.push(index);
//          }
//      })
//      return evenNumIndex;
//  }
 function evensIndex(arr){
     var evenNumIndex = [];
     for(var i = 0;i < arr.length; i++){
         if(arr[i] % 2 == 0){
             evenNumIndex.push(i);
         }
     }
     return evenNumIndex;
 }

console.log(evensIndex([1, 2, 3, 4, 5, 6])); // returns [1,3,5]
console.log(evensIndex([3, 7, 11, 12])); // returns [3]
console.log(evensIndex([5, 5, 7, 13])); // returns []

// TODO: Write a function 'stringToArray' that takes in a comma separated list and returns it as an array.

function stringToArray(str){
    return str.split(",");
}

console.log(stringToArray("red,orange,yellow,green,blue")); // returns ['red','orange',
// 'yellow','green','blue']
//
console.log(stringToArray("1,2,3")); // returns ['1','2','3']
console.log(stringToArray("dog")); // returns ['dog']

// TODO: Given the following array of objects, write a function 'findUsers' that returns an Array of usernames.
var myMac = {};
myMac.users = [
    {
        username: "sophie",
        id: 1
    },
    {
        username: "vivian",
        id: 2
    },
    {
        username: "david",
        id: 3
    }
];

function findUsers(arr){
    var userNames = [];
    myMac.users.forEach(function(user){
        userNames.push(user.username);
    })
    return userNames;
}
// const findUsers = function (usersArray) {
//     let usernames = [];
//     for (let i=0;i<usersArray.length;i++) {
//         usernames.push(usersArray[i].username);
//     }
//     return usernames;
// }
//
console.log(findUsers(myMac.users)); // returns ['sophie','vivian','david']

// TODO: Write a function 'addRole' that accepts an array of objects, then adds the property 'role' to each object with a value of 'instructor.' The results should look like this:
// function addRole(arr){
//     for(let i = 0 ; i < myMac.users.length;i++){
//         myMac.users[i].role = "instructor";
//     }
// }
function addRole(arr){
    myMac.users.forEach(function(user){
        user.role = "instructor";
    })
}
// addRole("instructor");
//
// [
//     {
//         username: "sophie",
//         id: 1,
//         role: "instructor"
//     },
//     {
//         username: "vivian",
//         id: 2,
//         role: "instructor"
//     },
//     {
//         username: "david",
//         id: 3,
//         role: "instructor"
//     }
// ];
//



console.log(myMac.users);
addRole("instructor");
console.log(myMac.users);

// TODO: Write a function 'countLetters' that takes in a string and a character, and counts the number of instances of that character in the string.
function countLetters(str, cha){
   var num = 0;
    for(var i = 0; i< str.length; i++){
        if(str[i].toLowerCase()== cha.toLowerCase()){
            num++;
        }
    }
    return num;
}

console.log(countLetters("banana", "a")); // returns 3
console.log(countLetters("Bob", "b")); // returns 2
console.log(countLetters("javascript", "x")); // returns 0
// ####BONUS:
//
// TODO: Write a function 'countAll' that takes in an array of strings and returns an array with the count of a character for each string. You may be able to use your countLetters function here.
// function countAll(arr,cha){
//     let answer=[];
//     for(let i = 0; i< arr.length; i++){
//        answer.push( countLetters(arr[i],cha) );
//     }
//     return answer;
// }
function countAll(arr,cha){
    let answer = [];
    arr.forEach(function(array){
        answer.push(countLetters(array,cha));
    })
    return answer;
}

console.log(countAll(["banana", "html", "java"], "a")); // returns [3,0,2]
console.log(countAll(["push", "your", "commits"], "u")); // returns [1,1,0]