/*
From Cracking the Coding Interview, Ch. 8.9

Generate all the possible combinations of num amount complete parentheses.

Example Input: 
2

Example Output: 
(()), ()()

*/

function generateParens(num){
    let parensSet = new Set();  
    //when num = 2: {}
    //when num = 1: {}
    //when num = 0: {}
    
    if (num === 0) parensSet.add("");
    //--> base case! parensSet = {""}
    
    else {
      let prev = generateParens(num - 1); 
      //num = 2, num - 1 = 1; prev = {"()"}
      //num = 1, num - 1 = 0; prev = {""}
      prev.forEach(str => {
        //num = 2; str = "()"
        for (let i = 0; i < str.length; i++){
          
          if (str.charAt(i) === "("){
            let s = insertInside(str, i);
            //num = 2: i = 0; s = "(())"
            parensSet.add(s);
            //num = 2; i = 0; parensSet = {"(())"}
          }
        }
        
        parensSet.add("()" + str); 
        //num = 1: add "()"
        //num = 2: add "()()" 
      })
    }
    return parensSet;
    //num = 0: {""}
    //num = 1: {"()"}
    //num = 2: {"(())", "()()"}
  }
  
  function insertInside(str, leftIndex){ //"()", 0
    let left = str.slice(0, leftIndex + 1); //(
    let right = str.slice(leftIndex + 1, str.length);//)
    return left + "()" + right; //(())
  }
  
  generateParens(2);
  
  