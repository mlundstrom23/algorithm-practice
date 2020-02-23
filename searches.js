/* 
Linear Search

We will begin by explaining how to implement linear search in 
JavaScript. We will create a function called linearSearch 
that accepts a value that is an integer or string and an array 
as parameters. The function will search every element in the 
array for the value and return the position of the value in the 
array if it is found. If the value is not in the array, it 
will return -1. For example, calling linearSearch(1, [3, 4, 2, 1, 5]) 
would return 3, and calling linearSearch(0, [3, 4, 2, 1, 5]) 
would return -1. 
*/

const arr = [
    3,
    4,
    2,
    1,
    5
];

const int = 5;

const linearSearch = (int, arr) => {
    const found = arr.indexOf(int);
    return found;
};

console.log(linearSearch(int, arr));