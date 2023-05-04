//SinglyLis

//Node class representing a node in the singly linked list
class SinglyLinkedListNode<T> {
    public value: T;
    public next: SinglyLinkedListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

//SinglyLinkedList class representing a basic singly linked list
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: SinglyLinkedListNode<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
    }

    //prepend: Inserts a new node with the given item at the beginning of the linked list
    prepend(item: T): void {
        const newNode = new SinglyLinkedListNode<T>(item);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }


    //insertAt: Inserts a new node with the given item at the specified index in the linked list
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds.");
        }
        if (idx === 0) {
            this.prepend(item);
        } else if (idx === this.length) {
            this.append(item);
        } else {
            const newNode = new SinglyLinkedListNode<T>(item);
            let prevNode = this.head;
            for (let i = 0; i < idx - 1; i++) {
                prevNode = prevNode!.next;
            }
            newNode.next = prevNode!.next;
            prevNode!.next = newNode;
            this.length++;
        }
    }

    //append: Inserts a new node with the given item at the end of the linked list
    append(item: T): void {
        const newNode = new SinglyLinkedListNode<T>(item);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode!.next) {
                currentNode = currentNode!.next;
            }
            currentNode!.next = newNode;
        }
        this.length++;
    }

    //remove: Removes the first occurrence of the node with the given item from the linked list
    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }
        if (this.head.value === item) {
            const removedNode = this.head;
            this.head = this.head.next;
            this.length--;
            return removedNode!.value;
        }
        let prevNode = this.head;
        let currentNode = this.head.next;
        while (currentNode) {
            if (currentNode.value === item) {
                prevNode!.next = currentNode.next;
                this.length--;
                return currentNode.value;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        return undefined;
    }


    //get: Retrieves the item at the specified index in the linked list
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        let currentNode = this.head;
        for (let i = 0; i < idx; i++) {
            currentNode = currentNode!.next;
        }
        return currentNode!.value;
    }


    //removeAt: Removes the node at the specified index in the linked list
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        if (idx === 0) {
            const removedNode = this.head;
            this.head = this.head!.next;
            this.length--;
            return removedNode!.value;
        }
        let prevNode = this.head;
        for (let i = 0; i < idx - 1; i++) {
            prevNode = prevNode!.next;
        }
        const removedNode = prevNode!.next;
        prevNode!.next = prevNode!.next!.next;
        this.length--;
        return removedNode!.value;
    }
}


const myList = new SinglyLinkedList<number>();

myList.append(10);
myList.append(20);
myList.append(30);
myList.append(40);

myList.prepend(5);

myList.insertAt(25, 3);

console.log("Length of the list: ", myList.length);

console.log("Value at index 2: ", myList.get(2));

console.log("Removed value: ", myList.remove(20));

console.log("Removed value at index 3: ", myList.removeAt(3));

console.log("Updated length of the list: ", myList.length);

