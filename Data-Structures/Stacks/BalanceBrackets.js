/*
From Cracking the Coding Interview

A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) 
occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three 
types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. 
For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square 
brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, 
unbalanced closing square bracket, ].

Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, 
return YES; otherwise, return NO. */


function balanced(exp){
    let brackStack = [];
    let output = 'YES';
    
    let open = '({[';
    let close = ')}]';
    let pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let i = 0; i < exp.length; i++){
        let bracket = exp.charAt(i);
        
        if (open.includes(bracket)) brackStack.push(bracket);
        else if (close.includes(bracket)) {
            let possiblePair =  brackStack.pop();
            
            if (pairs[bracket] !== possiblePair) {
                output = 'NO';
                break;
            }
        }
    }
    
    return (brackStack.length) ? 'NO' : output;
}
