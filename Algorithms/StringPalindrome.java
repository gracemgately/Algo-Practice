/*Given a string A, print Yes if it is a palindrome, print No otherwise.  
A will consist at most of 50 lower case english letters.

Example Input 1: 
here

Example Output 1: 
No

Example Input 2: 
racecar

Example Output 2: 
Yes
*/

public class StringPalindrome {
    
    public static String isPalindrome(String A){
        String result = "Yes";
        
        for (int i = 0; i < Math.floor(A.length() / 2); i++){
            char front = A.charAt(i);
            char back = A.charAt(A.length() - (i + 1));
            
            if (front != back) {
                result = "No";
                break;
            }
        }
        
        return result;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome(A));
        
    }
}