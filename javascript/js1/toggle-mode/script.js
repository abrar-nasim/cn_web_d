var button = document.getElementById("toggle");
button.addEventListener("click", f1);


var b = document.getElementById("bodyy");
var h = document.getElementsByTagName("h2");
var ts = document.getElementById("toggle-circle");

function f1(){
    var background = b.style.backgroundColor;

    if(background === "white"){
        b.style.backgroundColor="black";
        h[0].style.color = "white";
        ts.style.marginLeft = "37px"
    } else{
        b.style.backgroundColor="white";
        h[0].style.color = "black";
        ts.style.marginLeft = "-5px"
    }
    
}

