/*
Write the following code:

a) A class named Arithmetic with a method named add that takes  integers
 as parameters and returns an integer denoting their sum.
b) A class named Adder that inherits from a superclass named Arithmetic.

Your classes should not be be `public`.

The main method in the Solution class above should print the following:

My superclass is: Arithmetic
42 13 20

*/

class Arithmetic {
    
    Integer add(Integer a, Integer b){
        return a + b;
    }
}

class Adder extends Arithmetic {}

public class Solution{
    public static void main(String []args){
        // Create a new Adder object
        Adder a = new Adder();
        
        // Print the name of the superclass on a new line
        System.out.println("My superclass is: " + a.getClass().getSuperclass().getName());	
        
        // Print the result of 3 calls to Adder's `add(int,int)` method as 3 space-separated integers:
        System.out.print(a.add(10,32) + " " + a.add(10,3) + " " + a.add(10,10) + "\n");
     }
}