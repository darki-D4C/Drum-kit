

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHtml = this.innerHTML;

        audioPlay(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    
    });


}

document.addEventListener("keydown",function(event){
    audioPlay(event.key);
    buttonAnimation(event.key);
});


function audioPlay(key){
    switch (key) {
        case "w":
            var tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();

            break; 
        case "a":
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();

            break;
        case "s":
            var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();

            break;
        case "d":
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();


            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();

            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();

            break;
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();

            break;

        default:
            break;
    }

}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed")
    },1000)
}