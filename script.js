const displayBox = document.querySelector(".answerBox");
const buttons = document.querySelectorAll(".box");
// const button1 = document.querySelectorAll(".bo1x");
// const button2 = document.querySelectorAll(".bo2x");
// const button3 = document.querySelectorAll(".bo3x");
// const button4 = document.querySelectorAll(".bo4x");
// const button5 = document.querySelectorAll(".bo5x");
// const button6 = document.querySelectorAll(".bo6x");
// const button7 = document.querySelectorAll(".bo7x");
// const button8 = document.querySelectorAll(".bo8x");
// const button9 = document.querySelectorAll(".bo9x");
// const button10 = document.querySelectorAll(".bo10x");
// const button11 = document.querySelectorAll(".bo11x");
// const button12 = document.querySelectorAll(".bo12x");
// const button13 = document.querySelectorAll(".bo13x");
// const button14 = document.querySelectorAll(".bo14x");
// const button15 = document.querySelectorAll(".bo15x");
// const button16 = document.querySelectorAll(".bo16x");
// const button17 = document.querySelectorAll(".bo17x");
// const button18 = document.querySelectorAll(".bo18x");
// const button19 = document.querySelectorAll(".bo19x");



let arr = ["C", "", "%", '/', "7", "8", "9","*", "4", "5", "6","-", "1", "2", "3","+", "0", ".", "="]
let duplicateSymbols = ['+', '-', '*', '/'];
displayBox.value = "";

function calculate() {
    if(displayBox.value === "")
        displayBox.value = "";
    else
    {
        let answer = eval(displayBox.value); 
        displayBox.value = answer;
    }
    
}

function clear() {
    displayBox.value = "";     
    answer= "0";
}

function percentage() {
    if(displayBox.value === "")
        displayBox.value = "";
    else
    {
        let answer = eval(displayBox.value);
        displayBox.value = answer/100;
    }
        
}

function handleclick(index) {
        let lastInput = displayBox.value[displayBox.value.length -1]

        if (buttons[index] == buttons[3])
            {   if (duplicateSymbols.includes(lastInput))
                    return
                else
                    displayBox.value = displayBox.value + "/";
            }
        else if (buttons[index] == buttons[7])
            {
                if (duplicateSymbols.includes(lastInput))
                    return
                else
                    displayBox.value = displayBox.value + "*";
                       
            }
        else if (buttons[index] == buttons[11])
            {
                if (duplicateSymbols.includes(lastInput))
                    return
                else
                    displayBox.value = displayBox.value + "-";
            }
        else if (buttons[index] == buttons[2])
            {
                if (lastInput != "/"  && "*" && "+" && "-")
                    percentage();
            }
        else if (buttons[index] == buttons[15])
            {
                if (duplicateSymbols.includes(lastInput))
                    return
                else
                    displayBox.value =displayBox.value + "+";
            }
        else if (buttons[index]== buttons[18])
                calculate();
        else if (buttons[index] == buttons[0])
                clear();
        else
            displayBox.value = displayBox.value + arr[index];  
}


buttons.forEach((box, index)=> {

    box.addEventListener('click', () => {
        
        handleclick(index);
    })
})