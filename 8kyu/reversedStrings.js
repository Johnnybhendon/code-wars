/*
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

//Answer

function solution(str){
    return str.split('').reverse().join('')    //split into array, reverse array, and join all elements of array
}