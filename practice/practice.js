var div1 = document.getElementsByTagName("div");
div1[0].addEventListener("click", function1);

function function1(){
    console.log("clicked");
    div1[0].classList.toggle("circle");
    div1[0].classList.toggle("squarish")
}
