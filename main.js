
//Feb 5th 2024
/**
 Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
**/

function solution(str, ending){
    return str.endsWith(ending)
  }

console.log(solution('abc', 'bc')) // return true

//the .endsWith method will only return the Boolean value. So I can only know if something is true or false 

//Feb 3rd 2024
/**
 Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

**/

function squareDigits(num){
    //seperate the num into an array via split
    //convert the array into nums from a string
    //square the number and then
    //reattach 
    return 0;
  }

  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }

  console.log(squareDigits(9119))

  function squareDigitss(num){
    let Anumber = num.toString().split('')
    //for the map method, it is going to do each value from the array individually, and place them into a new array. REMEMBER
    let mathFormula = Anumber.map(function (val){
        return val * val;
    })
    let whole = mathFormula.join("")
    //i need to remember that split ONLY works on string. Not numbers
    return whole
  }

  console.log(squareDigitss(1234))