/*
A Java abstract class is a class that can't be instantiated. That means you cannot create 
new instances of an abstract class. It works as a base for subclasses. 

Notice that setTitle method is abstract too and has no body. 
That means you must implement the body of that method in the child class.

Your class mustn't be public.
*/

abstract class Book{
	String title;
	abstract void setTitle(String s);
	String getTitle(){
		return title;
	}
}

//You have to create another class that extends the abstract class. 
//Then you can create an instance of the new class.
class MyBook extends Book {
    
    void setTitle(String s) {
        title = s;
    }
}


public class Main{
	
	public static void main(String []args){
		//Book new_novel=new Book(); This line would result in an error: Book is abstract; cannot be instantiated
		MyBook new_novel=new MyBook();
		new_novel.setTitle(title);
		System.out.println("The title is: "+ new_novel.getTitle());		
	}
}