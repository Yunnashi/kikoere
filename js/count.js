// JavaScript Document

var count = 48 * 60 * 60; // 48 hours in seconds

function doCountDown() {
    setInterval(countDown, 1000);
}

function countDown() {
	count--;
	var hours = Math.floor(count / 3600);
	var minutes = Math.floor((count % 3600) / 60);
	var seconds = count % 60;
	document.getElementById('cd').innerHTML = hours + ":" + minutes + ":" + seconds;
}

doCountDown();