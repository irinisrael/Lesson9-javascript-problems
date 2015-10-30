 $(document).ready(function() {

	function addLeadingZero(baseString, digitCount) {

		var zeroString = '';
		for (var i = 0; i < digitCount - 1; i++) {
				zeroString = zeroString + '0';
		}

		//add leading zeroes
		var hasLeadingZero = zeroString + baseString;

		//get last three characters and digitCount
		var lastChars = hasLeadingZero.substr(digitCount * -1);
		return lastChars;

	}

	//every second
	setInterval(function() {

		//get current time
		var date = new Date();

		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		if (hours > 12) {
			var hoursTwelve = hours - 12;
		}

		var color;

		if(minutes % 2 == 0) {
			//then even
				color="purple";
			} else {
			//then odd
				color="black";
			}
		document.body.style.background = color;

		//update DOM elements
		$('.hours').text(hoursTwelve);
		$('.minutes').text(addLeadingZero(minutes, 2));
		$('.seconds').text(addLeadingZero(seconds, 2));

	}, 10);

});
