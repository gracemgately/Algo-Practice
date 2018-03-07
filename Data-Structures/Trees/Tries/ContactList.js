/*
The function must perform two types of operations: add name, where  is a string denoting a contact name. 
This must store  as a new contact in the application. Find partial, where  is a string denoting a partial 
name to search the application for. It must count the number of contacts starting with  and 
print the count on a new line. Given  sequential add and find operations, perform each operation in order.

Input Format
Each line  of input contains an operation in one of the two forms: add or find.

Constraints
It is guaranteed that  and  contain lowercase English letters only.
The input doesn't have any duplicate  for the  operation.

Output Format
For each find partial operation, print the number of contact names starting with  on a new line.

Example Input:
add hack
add hackerrank
find hac
find hak

Example Output
2
0 
*/

function buildTrieAndFindWords(input) {
    let instructions = input.split('\n');
    let trie = {}
    
    for (let i = 1;i < instructions.length; i++){
        let [addOrFind, word] = instructions[i].split(' ');
        
        if (addOrFind === 'add') {
            trie = addWordToTrie(trie, word); 
        }
        else if (addOrFind === 'find') console.log(findWordInTrie(trie, word));
    }
} 


function addWordToTrie(trie, word){
    let node = trie;
    
    for (let i = 0; i < word.length; i++){
        let letter = word.charAt(i);
        
        if (!node[letter]) node[letter] = { count: 1 }
        else node[letter].count += 1;
        
        node = node[letter];
    }
    
    return trie;
    
}

function findWordInTrie(trie, word){
    let node = trie;
    
    for (let i = 0; i < word.length; i++){
        let letter = word.charAt(i);
        
        if (!node[letter]) return 0;
        else node = node[letter];
    }
    
    return node.count;
}