var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = null;
var operand2 = null;
var operator = null;

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if(value == "+"){
            if(display.innerText == ''){
                display.innerText = "error";
            }else{
                operator = "+";
                operand1 = parseFloat(display.innerText);
                display.innerText = "";
            }
        } else if(value == "-"){
            if(display.innerText == ''){
                display.innerText = "error";
            }else{
                operator = "-";
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
            }

        } else if(value == "/"){
            if(display.innerText == ''){
                display.innerText = "error";
            }else{
                operator = "/";
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
            }

        } else if(value == "*"){
            if(display.innerText == ''){
                display.innerText = "error";
            }else{
                operator = "*";
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
            }

        } else if(value == "%"){
            if(display.innerText == ''){
                display.innerText = "error";
            }else{
                operator = "%";
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
            }

        } else if(value == "="){
            operand2 = parseFloat(display.textContent);
            if(operator == '/' && operand2 == '0'){
                display.innerText = 'error';
            } else {
                var result = eval( operand1 + " " + operator + " " + operand2 )
                display.innerText = result;
            }

            
        } else if(value == "AC"){
            display.innerText = "";
        } else{
            display.innerText += value;
        }

    });
}
