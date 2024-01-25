class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }
    // add element to top of stack
    push(element){
        this.items[this.count] = element
        let push_res = `${element}`;
        // console.log(`${element} added to ${this.count}`)
        this.count += 1;
        let count= this.count -1;
        return [push_res, count];
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
       if(this.count == 0) return undefined
       let deleteItem = this.items[this.count - 1]
       this.count -= 1
       //console.log(`${deleteItem} removed`)
       return deleteItem 
    }
    // Check top element in stack
    peek(){
        // console.log(`Top element is ${this.items[this.count - 1]}`)
        let peek_data=this.items[this.count - 1];
        return peek_data
    }
    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? `Stack is empty` : `Stack is NOT empty`)
        return this.count == 0
    }
    // Check size of stack
    size(){
        console.log(`${this.count} elements in stack`)
    }
    // Print elements in stack
    print(){
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ''
        }
        return str
    }
    // Clear stack
    clear(){
        this.items = []
        this.count = 0
        // console.log(`Stack cleared..`)
        return this.items
    }
    }

const stack = new Stack()

// stack.isEmpty()

// stack.push(100)
// stack.push(200)
// stack.peek()
// stack.push(300)

// console.log(stack.print())
// stack.size()


// stack.pop()
// stack.pop()

// stack.clear()

// stack.size()

// stack.isEmpty()
// console.log(stack.print())


$(document).ready(function(){
    $("#btn_push").on("click", function(){
        let push_data = stack.push($("#st_data").val());
        $("#stack").prepend(`<div id="st${push_data[0]}" class="row bg-primary push">${push_data[0]}</div>`);
    });

    $("#btn_pop").on("click", function(){
        let pop_data=stack.pop();
        $("#popped").prepend(`<div class="row pop text-bg-danger border border-light">${pop_data}</div>`)
        $(`#st${pop_data}`).remove();
    });

    $("#btn_peek").on("click", function(){
        let peek_data=stack.peek();
        $(`#st${peek_data}`).removeClass("bg-primary").addClass("peek");
        setTimeout(function(){
        $(`#st${peek_data}`).removeClass("peek").addClass("bg-primary");
        },500);
    });

    $("#btn_clear").on("click", function(){
        // Implement clear functionality
        stack.clear();
        $("#stack, #popped").empty();
    });
});





