// document.getElementById("gmOutput").innerHTML=0.0;

// const numbersArray = [-4, 3, 6, 8];
// const maxNumber = logMax(numbersArray);

// function logMax(arr) {
//     if (arr.length === 0) {
//       console.log("Array is empty.");
//       return;
//     }
  
//     let max = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
// }


// console.log(maxNumber);
// ------------------------------------------------------
// function addNum(numArr) {
//     let sum=numArr[0]
//     for(i=1; i<numArr.length;i++){
//         sum+=numArr[i]

//     }
//     return sum;
//   }
  
//   console.log(addNum([5, 10,29,5,10]));
// ----------------------------
// document.addEventListener('DOMContentLoaded', function() {
//     const lbsInput = document.getElementById('lbsinput');
//     const gmOutput = document.getElementById('gmOutput');
//     const kgOutput = document.getElementById('kgOutput');
//     const ozOutput = document.getElementById('ozOutput');
  
//     lbsInput.addEventListener('input', function() {
//       const pounds = parseFloat(lbsInput.value);
  
//       if (isNaN(pounds)) {
//         gmOutput.textContent = 'Invalid input';
//         kgOutput.textContent = 'Invalid input';
//         ozOutput.textContent = 'Invalid input';
//       } else {
//         const grams = pounds * 453.592;
//         const kilograms = pounds * 0.453592;
//         const ounces = pounds * 16;
  
//         gmOutput.textContent = grams.toFixed(2) + ' g';
//         kgOutput.textContent = kilograms.toFixed(2) + ' kg';
//         ozOutput.textContent = ounces.toFixed(2) + ' oz';
//       }
//     });
//   });
$(document).ready(
    function (){
        // reder the div multiple times
        for(i=1;i<4;i++){
        cardClass="card mb-2";
        switch(i){
            case 1:
                cardClass+=" bg-primary";
                unitLabel="Grams";
                unitAbrev="gm";
                break;
            case 2:
                cardClass+=" bg-success";
                unitLabel="Kilograms";
                unitAbrev="kg";
                break;
            case 3:
                cardClass+=" bg-danger";
                unitLabel="Ounces";
                unitAbrev="oz";
                break;
            default:
                    cardClass="";
        }
        $("#result").append(`
            <div class="${cardClass}">
                <div class="card-body">
                    <h4>${unitLabel}</h4>
                    <div id="${unitAbrev}Output">Output</div>
                </div>
            </div>       
        `);
        }
        $("#result").hide("drop", {direction: "down"}, "slow");  
        $("#lbsInput").keyup(
            function(){
                let lbs= $(this).val();
                $("#result").show("fold", 1000);
                $("#gmOutput").text(lbs/0.00220462);
                $("#kgOutput").text(lbs/2.20462);
                $("#ozOutput").text(lbs*16);
                }
        );
    }
);


// $( "#clickme" ).on( "click", function() {
//     $( "#book" ).fadeOut( "slow", function() {
//       // Animation complete.
//     });
//   });

class Stack {
    constructor(){
        this.items = []
        this.count = 0
    }
    // add element to top of stack
    push(element){
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
       if(this.count == 0) return undefined
       let deleteItem = this.items[this.count - 1]
       this.count -= 1
       console.log(`${deleteItem} removed`)
       return deleteItem 
    }
    // Check top element in stack
    peek(){
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
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
        console.log(`Stack cleared..`)
        return this.items
    }
}

const stack = new Stack()

stack.isEmpty()

stack.push(100)
stack.push(200)
stack.peek()
stack.push(300)

console.log(stack.print())
stack.size()


stack.pop()
stack.pop()

stack.clear()

stack.size()

stack.isEmpty()
console.log(stack.print())




