document.addEventListener("DOMContentLoaded", function() {

    var result = 0;
    var resultScreen = document.querySelector("#screen"); //result screen
    var numberButtons = document.querySelectorAll(".number"); //numbers buttons
    var countButtons = document.querySelectorAll(".count");
    var clearAll = document.querySelector("#clearAll"); //clear screen button
    var clearOne = document.querySelector("#clearOne"); //delete one input
    var operatorButtons = document.querySelectorAll(".count"); //operator buttons
    var minusValue = 1; //for numbers >0
    var calculate = document.querySelector("#calculate"); //calculate
    var inputValue1 = ""; // stores input value1
    var inputValue2 = ""; // stores input value2
    var operator = ""; //stores operator

    resultScreen.innerText = result; //show result in resultscreen
    calculate.addEventListener("click", function() {
        switch (operator) {
            case ("add"):
                console.log(operator);
                result = minusValue * (parseInt(inputValue1)) + parseInt(inputValue2);
                break;
            case ("minus"):
                console.log(operator);
                result = minusValue * (parseInt(inputValue1)) - parseInt(inputValue2);
                break;
            case ("multiply"):
                console.log(operator);
                result = minusValue * (parseInt(inputValue1)) * parseInt(inputValue2);
                break;
            case ("divide"):
                console.log(operator);
                result = minusValue * (parseInt(inputValue1)) / parseInt(inputValue2);
                break;
            case (""):
                result = 0;
                break;
        }
        console.log(result);
        showResult();
        operator = ""; //reset inputs
        inputValue2 = ""; //reset inputs
        inputValue1 = ""; //reset inputs
        minusValue = 1; //reset minus
        return result;
    });

    for (var i = 0; i < operatorButtons.length; i++) { //iput operator and store
        operatorButtons[i].addEventListener("click", function(event) {
            if (inputValue1 !== "") {
                operator = (this.getAttribute("data-value"));
            } else if (inputValue1 === "" && this.dataset.value === "minus") {
                minusValue = -1;
            }
        });
    }

    for (var i = 0; i < numberButtons.length; i++) { //input numers and store in proper value
        numberButtons[i].addEventListener("click", function(event) {
            if (operator === "") {
                inputValue1 += this.getAttribute("data-value");
                showInput1();
            } else {
                inputValue2 += this.getAttribute("data-value");
                showInput2();
            }
        });
    }

    function showInput1() { //function that shows input value1 in the screen
        resultScreen.innerText = minusValue * parseInt(inputValue1);
    }

    function showInput2() { //function that shows input value2 in the screen
        resultScreen.innerText = parseInt(inputValue2);
    }

    function showResult() { //function that shows result in the screen
        resultScreen.innerText = result;
    }

    clearAll.addEventListener("click", function(event) {
        clearAllScreen();
    });

    function clearAllScreen() { //function that clears the screen
        resultScreen.innerText = 0;
        inputValue1 = "";
        inputValue2 = "";
    }

    clearOne.addEventListener("click", function(event) {
        clearOneInput();
    });

    function clearOneInput() { //function that clears the one input screen
        console.log(inputValue1.length);
        if (operator === "") {
            if (inputValue1.length > 0) {
                var inputLastIndex = inputValue1.length - 1;
                console.log(inputLastIndex);
                inputValue1 = inputValue1.slice(0, inputLastIndex);
                console.log(inputValue1);
                showInput1();
            }
            return;
        } else {
            if (inputValue2.length > 0) {
                var inputLastIndex = inputValue2.length - 1;
                inputValue2 = inputValue2.slice(0, inputLastIndex);
                showInput2();
            }
            return;
        }
    }

});
