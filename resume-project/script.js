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