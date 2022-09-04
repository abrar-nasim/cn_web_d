// javascript to implement smooth scrolling

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);
for(var i=0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.innerText.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();

            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            
            window.scrollBy(0,50)
        },20);
    });
}


// javascript to implement dynamic skill progress

let skillBarProgress = document.querySelectorAll(".skill-progress > div");
let skillSection = document.getElementById("skills");

window.addEventListener("scroll", checkScroll);
let animationHit = false;

initializeBars();

function initializeBars(){
    for(let i=0; i<skillBarProgress.length; i++){
        skillBarProgress[i].style.width = 0 + "%"; 
    }
}

function fillBars(){
    for(let bar of skillBarProgress){
        let currentWidth = 0;
        let targetWidth = bar.getAttribute('data-bar-width');

        let interval = setInterval(function(){
            if(currentWidth >= targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + "%";

        },5);
    }
}


function checkScroll(){
    let coordinates = skillSection.getBoundingClientRect();
    if(!animationHit && coordinates.top <= window.innerHeight){
        animationHit = true;
        fillBars();
    }else if(animationHit && coordinates.top > window.innerHeight){
        animationHit = false;
        initializeBars();
    }
}