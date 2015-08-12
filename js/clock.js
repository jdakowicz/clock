$(document).ready(function () {
	var getTime = function () {
		var time = new Date(),
			date = { 
				hour: time.getHours() % 12,
				minutes: time.getMinutes(),
				seconds: time.getSeconds()
			};
		return date;
	};
	var $minutes = $('.minutes'),
		$seconds = $('.seconds'),
		$hours = $('.hours');
	var rotate = function(number) {
		return { 'transform' : 'rotate(' + number + 'deg)',
			'-webkit-transform' : 'rotate(' + number + 'deg)' };
	};

	setInterval(function () {
		$seconds.css(rotate(getTime().seconds * 6));
		$minutes.css(rotate(getTime().minutes * 6 + Math.floor(getTime().seconds)/10));
		$hours.css(rotate(getTime().hour * 30 + Math.floor(getTime().minutes)/2));
	}, 500);
});