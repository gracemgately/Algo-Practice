/*
Java 7 Solution
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/
public class DetectCycle {

    public static boolean hasCycle(Node head) {
        HashMap<Node, Node> nodeDP = new HashMap<Node, Node>();
        Node currentNode = head;
        
        while (currentNode != null){
            if (nodeDP.containsValue(currentNode.next) == false) {
                nodeDP.put(currentNode, currentNode.next);
            }
            else { 
                return true;
            }
            currentNode = currentNode.next;
        }
        
        return false;
    }

}

