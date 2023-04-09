// video lesson from
// my.learn.co/courses/650/pages/video-destructuring-and-spread-operator?module_item_id=83203

let arr = [1, 2, 3]
// arr.push(4)
// console.log(arr) 
// if we push a val (4) onto arr we mutate arr
// -----------------------------------------------


// if we copy arr to arr2 and push to arr2, we still mutate arr
// let arr2 = arr
// arr2.push(4)
// console.log(arr)
// console.log(arr2)
// --------------------------------

// or use can use the spread operator ...arr to avoid mutating arr
// let arr2 = [...arr, 4]
// console.log(arr)
// console.log(arr2)
// we made a copy of ...arr and add the value to arr2 keeping arr untouched
// this will be important in React

// same for objects
let catObj = {
  name: 'rose'
}

// let catObj2 = catObj
// catObj.age = 9
// console.log(catObj)
// console.log(catObj2)
//  we still mutate catObj
// ------------------------------

// spread protects catObj - note the use of { } for {...catObj }
// we can update and add values at the same time
let catObj2 = { ...catObj, age: 9, name: 'ted' }
console.log(catObj)
console.log(catObj2)
// ------------------------------

// destructuring allows us to minimize the amount of code we write using shortcuts
// if an obj contains keys, we can pull the keys out into variables 
// using the catObj2 example, we can demonstrate how the longer example above can be reduced
let { name, age } = catObj2
console.log(name)
console.log(age)

// using this format, we can save the need to declare those keys over and over again

// we can do this w/the array example too
// let arr = [1, 2, 3]
//  instead of using obj keys, we will use array indexes

let [num1, num2, num3] = arr
console.log(num1)
console.log(num2)
console.log(num3)
// ------------------------------

// we can do this with any array
// instead of referencing an existing array, we can make a new one
let [color1, color2, color3] = ["yellow", "blue", "yellow"]
console.log(color1)
console.log(color2)
console.log(color3)
// ------------------------------

// this format is not required for React but it can make coding less verbose



