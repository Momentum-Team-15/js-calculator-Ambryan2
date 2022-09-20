//1. make it so the number buttons goes onto the display
//1A. I need JS to find the class with the associated number 
//1B. I need JS to then take that number and  
let calcButtons = document.querySelectorAll('.input');
// console.log(calcButtons)
let Calculation = document.querySelector('#display');

for (let calcButton of calcButtons) {
    //this makes it so javascript knows what button is press
    calcButton.addEventListener('click', (event) => {
        console.log(`the number: ${calcButton.innerText}`);

        //This makes sure the numbers that are pressed are displayed in #display
        switch (calcButton.id) {
            case "0": Calculation.innerText = Calculation.innerText + 0; break;
            case "1": Calculation.innerText = Calculation.innerText + 1; break;
            case "2": Calculation.innerText = Calculation.innerText + 2; break;
            case "3": Calculation.innerText = Calculation.innerText + 3; break;
            case "4": Calculation.innerText = Calculation.innerText + 4; break;
            case "5": Calculation.innerText = Calculation.innerText + 5; break;
            case "6": Calculation.innerText = Calculation.innerText + 6; break;
            case "7": Calculation.innerText = Calculation.innerText + 7; break;
            case "8": Calculation.innerText = Calculation.innerText + 8; break;
            case "9": Calculation.innerText = Calculation.innerText + 9; break;
            case "+": Calculation.innerText = Calculation.innerText + " + "; break;
            case "-": Calculation.innerText = Calculation.innerText + " - "; break;
            case "/": Calculation.innerText = Calculation.innerText + " / "; break;
            case ".": Calculation.innerText = Calculation.innerText + "."; break;
            case "*": Calculation.innerText = Calculation.innerText + " * "; break;
        }
        //make sure that numbers pressed are saved to be manipulated with math expressions
        //making an array that can be manipulated
        let displayArr = Calculation.innerText;
        //since array doesn't read the special characters I plan on having calculator take everything before symbol and do the symbol act to everything after
        // console.log(eval(displayArr))



        // if (calcButton.id === "1")
        //     {
        //         Calculation.innerText = Calculation.innerText + 1;
        //     }
        // else if (calcButton.id === "2")
        //     {
        //         Calculation.innerText = Calculation.innerText + 2;
        //     }

    })

}


//2. make it so multiple numbers can be added until the = is pressed
//3. when equal is pressed clear display and display the output 