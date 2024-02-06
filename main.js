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