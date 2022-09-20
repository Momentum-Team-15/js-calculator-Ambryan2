//1. make it so the number buttons goes onto the display
//1A. I need JS to find the class with the associated number 
//1B. I need JS to then take that number and  
let calcButtons = document.querySelectorAll('.input');
// console.log(calcButtons)
let Calculation = document.querySelector('#display');

for (let calcButton of calcButtons) {
    //this makes it so javascript knows what button is press
    calcButton.addEventListener('click', (event) => {
        // this makes it so calculation.innerText can be read as numbers and so I can manipulate array
        let displayArr = Calculation.innerText;

        //This makes sure the numbers that are pressed are displayed in #display
        if (displayArr.length <= 16) {
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
                case "+": Calculation.innerText = Calculation.innerText + "+"; break;
                case "-": Calculation.innerText = Calculation.innerText + "-"; break;
                case "/": Calculation.innerText = Calculation.innerText + "/"; break;
                case ".": Calculation.innerText = Calculation.innerText + "."; break;
                case "*": Calculation.innerText = Calculation.innerText + "*"; break;
                case "C": Calculation.innerText = ' '; break;
                case "=":
                    //the try evaluates the code. The catch will do something if it detects am error.
                    try {
                        let answer = eval(displayArr);
                    }
                    catch (err) {
                        console.log('testworked');
                        Calculation.innerText = "Invalid Input";
                    }
                    //evaluates if answer has period if it does then does one thing if doesn't do other thing
                    let answer = eval(displayArr);
                    //this checks if the number is a decimal
                    if (answer % 1 !== 0){
                        console.log('test worked for decimal')
                        let rounded = answer.toFixed(2);
                        Calculation.innerText = ' ';
                        Calculation.innerText = Calculation.innerText + rounded;
                    }
                    else {
                        console.log('solid numbers worked')
                        Calculation.innerText = ' ';
                        Calculation.innerText = Calculation.innerText + answer;
                    }
                    //The following until breaks is what will be displayed
                    break;
            }
        }
        //if things break
        // let answer = eval(displayArr);
        // let rounded = answer.toFixed(2);
        // Calculation.innerText = ' ';
        // Calculation.innerText = Calculation.innerText + rounded;

        //in rare case the string goes one over due to .length it will still do these buttons
        else {
            Calculation.innerText = 'Too long'
            switch (calcButton.id) {
                case "C": Calculation.innerText = ' '; break;
                case "=":
                    let answer = eval(displayArr);
                    Calculation.innerText = ' ';
                    Calculation.innerText = Calculation.innerText + answer;
                    break;
            }
        }


    })

}

