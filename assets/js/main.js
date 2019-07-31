/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

});

var music = document.getElementById("music");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration;
pauseButton.style.visibility = "hidden";

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
music.addEventListener("timeupdate", timeUpdate, false);

function timeUpdate() {
	var playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.width = playPercent + "px";

	var secondsIn = Math.floor(((music.currentTime / duration) / 3.5) * 100);
	if (secondsIn <= 9) {
		timer.innerHTML = "0:0" + secondsIn;
	} else {
		timer.innerHTML = "0:" + secondsIn;
	}
}

playButton.onclick = function() {
	music.play();
	playButton.style.visibility = "hidden";
	pause.style.visibility = "visible";
}

pauseButton.onclick = function() {
	music.pause();
	playButton.style.visibility = "visible";
	pause.style.visibility = "hidden";
}

music.addEventListener("canplaythrough", function () {
	duration = music.duration;
}, false);