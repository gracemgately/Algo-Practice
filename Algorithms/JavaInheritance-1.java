/*
Using inheritance, one class can acquire the properties of others. Modify the main method 
in the Solution class accordingly so that the code prints the following lines:

I am walking
I am eating fish
I am meowing
*/

class Mammal {
	void walk() {
		System.out.println("I am walking");
	}
}

class Cat extends Mammal {
	void eat() {
		System.out.println("I am eating fish");
	}
    void sing() {
        System.out.println("I am meowing");
    }
}

public class Solution {

    public static void main(String args[]) {
 
       Cat cat = new Cat();
       cat.walk();
       cat.fly();
       cat.sing();
     
    }
 }