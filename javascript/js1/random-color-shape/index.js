const background = document.getElementById("outer-circle");

const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };
   
  const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
   
    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };
   
  const setBackgroundColor = () => {
    const randomColor = getRandomColor();
    background.style.backgroundColor = randomColor;
    background.style.color = randomColor;
  };
   
//   setBackgroundColor();
   
//   setInterval(() => {
//     setBackgroundColor();
//   }, 1500);


var button = document.getElementById("button1");
button.addEventListener("click", setBackgroundColor);

// changing shape script
var inner_shape = document.getElementById("inner-shape"); 

const circle = () => {
  inner_shape.style.borderRadius = "50%";
};

const rectangle = () => {
  inner_shape.style.width = "100px";
};


const rhombus = () => {
  inner_shape.style.transform = "skew(20deg)";
};

const parallelogram = () => {
  inner_shape.style.transform = "skew(20deg)";
  inner_shape.style.width = "50px";
};



var functions = [ circle, parallelogram, rectangle, rhombus  ];
const f1 = () => {
  functions[Math.floor(Math.random()*functions.length)]();
}
var button2 = document.getElementById("button2");
button2.addEventListener("click",    f1  );
 

