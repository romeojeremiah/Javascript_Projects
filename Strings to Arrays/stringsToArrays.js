const reverseString = (string) =>{
    let stringToArray = string.split('')
    let reversedArray = stringToArray.reverse()
    let reversedString = reversedArray.join('')
    return reversedString
}


const longestWord = (string) => {
    let stringSplit = string.split(' ')
    debugger
    let longestWord = ''
    
    for (let i = 0; i < stringSplit.length; i++){
        
        if (stringSplit[i].length > longestWord.length){
            longestWord = stringSplit[i]
        }
        
    }
    return longestWord
    
}

console.log(longestWord('I cant believe I actually fixed this'))