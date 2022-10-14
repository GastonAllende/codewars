/*

Write a function, which takes a non-negative integer (seconds) as input and returns the 
time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

function humanReadable(secondsIn) {
	const pad = function (val) {
		return val < 10 ? "0" + val : val;
	};

	const sec = parseInt(secondsIn, 10); // convert value to number if it's string
	let hours = Math.floor(sec / 3600); // get hours
	let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
	let seconds = sec - hours * 3600 - minutes * 60; //  get seconds

	return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
