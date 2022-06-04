


function betterCountdown() {
    var currTime = 10;
    //For loop implemented to achieve countdown with fewer lines of code
    for (var i = 1; i <= 11; i++) {
        //i set to 11 rather than ten so that "BLASTOFF!!!" is printed after 1 instead of at 1
        if (i == 11) {
            setTimeout(function () {
                //Code for timer display readout
                document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!";
            }, 1000 * i);
        }
        
          //Warning activated by conditional time event
          else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "WARNING! <br> Less than half way to launch: <br> T - = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } 
        //Change in format of timer to display current time
        else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "T MINUS " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}


function playStation(){
   console.log("play space station sounds");
   mySound = new sound("us-lab-background.mp3");
   mySound.play();
}

function playBowie(){
    mysound = new sound()
 }
 function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("contols","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
       this.sound.play();
    }
    this.stop = function(){
       this.sound.pause();
    }
}