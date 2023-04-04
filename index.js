
var buttons = document.querySelectorAll(".drum");

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){

        var key = this.innerHTML;

        playSound(key);
        buttonAnimation(key);

    })
}

document.addEventListener("keydown", function(evt){

    var key = evt.key;

    playSound(key);
    buttonAnimation(key);
    
})

function playSound(key){

    var audio;

    switch(key){

        case "w" : 
            audio = new Audio("sounds/tom-1.mp3");
            break;

        case "a" : 
            audio = new Audio("sounds/tom-2.mp3");
            break;

        case "s" : 
            audio = new Audio("sounds/tom-3.mp3");
            break;

        case "d" : 
            audio = new Audio("sounds/tom-4.mp3");
            break;

        case "j" : 
            audio = new Audio("sounds/snare.mp3");
            break;

        case "k" : 
            audio = new Audio("sounds/kick-bass.mp3");
            break;

        case "l" : 
            audio = new Audio("sounds/crash.mp3");
            break;

        default: console.log(key);
    }

    audio.play();
}

function buttonAnimation(key){

    var drum = document.querySelector("." + key);
    drum.classList.add("pressed");

    setTimeout(function(){
        drum.classList.remove("pressed")
    }, 100);

}