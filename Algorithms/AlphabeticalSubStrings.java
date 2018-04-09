/*Given a string s, and an integerk , complete the function so that it finds 
the lexicographically smallest and largest substrings of length k.

Example Input: 
welcometojava
3

Example Output: 
ava
wel
 */

public class AlpabeticalSubStrings {
  
    public static String getSmallestAndLargest(String s, int k) {
        String smallest = "";
        String largest = "";
        
        for (int i = 0; i < s.length() - (k - 1); i++){
            String subStr = s.substring(i, i + k);
                
            int isSmallest = smallest.compareTo(subStr);
            int isLargest = largest.compareTo(subStr);
            
            if (isSmallest > 0 || smallest == ""){
                smallest = subStr;
            }
            if (isLargest < 0){
                largest = subStr;
            }
                    }
        
        return smallest + "\n" + largest;
    }

    public static void main(String[] args) {
        System.out.println(getSmallestAndLargest(s, k));
    }
}
