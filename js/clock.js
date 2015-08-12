$(document).ready(function () {
	var $minutes = $('.minutes'),
		$seconds = $('.seconds'),
		$hours = $('.hours'),
		$half1 = $('.quarter1 .quarter-inner'),
		$half2 = $('.quarter2 .quarter-inner');
	var getTime = function () {
		var time = new Date(),
			date = { 
				hour: time.getHours() % 12,
				minutes: time.getMinutes(),
				seconds: time.getSeconds(),
				milis: time.getMilliseconds()
			};
		return date;
	};
	var rotate = function(number) {
		return { 'transform' : 'rotate(' + number + 'deg)',
			'-webkit-transform' : 'rotate(' + number + 'deg)' };
	};
	var startClock = function () {
		setInterval(function () {
			$seconds.css(rotate(getTime().seconds * 6));
			$minutes.css(rotate(getTime().minutes * 6 + Math.floor(getTime().seconds)/10));
			$hours.css(rotate(getTime().hour * 30 + Math.floor(getTime().minutes)/2));
		}, 500);
	};
	var startCircle = function () {
		setInterval(function () {
			var secs = getTime().seconds,
				milis = getTime().milis;
			if (secs === 0 && milis <= 11) {
				$half2.css(rotate(0));
				$half1.css(rotate(0))
			} else if (secs < 30) {
				$half2.css(rotate(secs * 6 + (milis / 1000) * 6));
			} else if (secs === 30 && milis < 11) {
				$half2.css(rotate(180));
			} else {
				$half1.css(rotate(secs * 6 + (milis / 1000) * 6 - 180));
			}
		}, 10);
	}
	startClock();
	startCircle();
});