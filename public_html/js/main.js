window.onload = function() {

	
    var duration = document.getElementById('ratio');
    var pause = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";
    var play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26";
    var flip = true;
    var animate = document.getElementsByTagName("animate")[0];
    var svg = document.getElementById('svg');
    var defs = document.getElementById('defs');
    
    var startDuration;
    //document.getElementById('ratio').max = video.duration;

    var playbutton = document.getElementById("playpause");
    playbutton.addEventListener("click", function() {
		if (video.paused) {
			video.play();
            defs.getAttribute("class", "pause");
            animate.beginElement();
		} else {
			video.pause();
			defs.getAttribute("class", "");
            animate.beginElement();
		}
    });
	

    var video = document.getElementById("movie");
    video.addEventListener("click", function() {
        video.volume = 0.5;
		if (video.paused) {
			video.play();
            defs.getAttribute("class", "pause");
            animate.beginElement();
        } else {
			video.pause();
			defs.getAttribute("class", "");
            animate.beginElement();
		}
	});

    var volume = document.getElementById('volume');
    volume.addEventListener("change", function() {
        video.volume = this.value / 100;
        if (this.value > 0) {
            video.muted = false;
            playbutton.style.a
        }
        else {
            video.muted = true;
            playbutton.style.background = "/image/unmute.png";
        }
    });

	var soundbutton = document.getElementById("sound");
    soundbutton.addEventListener("click", function() {
		if (video.muted == false) {
            video.muted = true;
			playbutton.style.background = "/image/unmute.png";
		} else { 
            if (video.volume == 0) {
                video.volume = 0.5;
                volume.value = 50;
            }
            video.muted = false;
			playbutton.style.background = "/image/mute.png";
		}
	});

    var fullscreenButton = document.getElementById("fullscreen");
    fullscreenButton.addEventListener("click", function() {
         if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen();
		}
	});

}


