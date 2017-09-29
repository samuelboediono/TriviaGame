var count = 25;

var correct = 0;
var incorrect = 0;
var unanswered = 0;



$(document).ready(function(){

	$("#mid_game").hide();
	$("#end_game").hide();

	$("#trivia_button").on("click", function() {
		$("#start_game").hide();
		$("#mid_game").show();
		startCountDown();
		return;
	});


	function countDown() {
		count--;
		$("#timer_left").html(count + " seconds");

		$("#done").on("click", function() {
			count = 0;
			return;
		});

		if(count === -1) {
			timeOut();
			$("#mid_game").hide();
		}
	}

	function startCountDown() {
		setInterval(countDown, 1000);
	}


	function timeOut() {

		var q1 = $('input:radio[name="q1"]:checked').val();
		var q2 = $('input:radio[name="q2"]:checked').val();
		var q3 = $('input:radio[name="q3"]:checked').val();
		var q4 = $('input:radio[name="q4"]:checked').val();
		var q5 = $('input:radio[name="q5"]:checked').val();
		var q6 = $('input:radio[name="q6"]:checked').val();
		var q7 = $('input:radio[name="q7"]:checked').val();
	
		if(q1 === undefined) {
			unanswered++;
		}
		else if(q1 === "Illinois") {
			correct++;
		}
		else {
			incorrect++;
		}


		if(q2 === undefined) {
			unanswered++;
		}
		else if(q2 === "1906") {
			correct++;
		}
		else {
			incorrect++;
		}


		if(q3 === undefined) {
			unanswered++;
		}
		else if(q3 === "Sacramento") {
			correct++;
		}
		else {
			incorrect++;
		}


		if(q4 === undefined) {
			unanswered++;
		}
		else if(q4 === "Miami") {
			correct++;
		}
		else {
			incorrect++;
		}


		if(q5 === undefined) {
			unanswered++;
		}
		else if(q5 === "Chevrolet") {
			correct++;
		}
		else {
			incorrect++;
		}


		if(q6 === undefined) {
			unanswered++;
		}
		else if(q6 === "Golden Gate Bridge") {
			correct++;
		}
		else {
			incorrect++;
		}


		if(q7 === undefined) {
			unanswered++;
		}
		else if(q7 === "Nile") {
			correct++;
		}
		else {
			incorrect++;
		}


		$("#correctanswer").html(correct);
		$("#incorrectanswer").html(incorrect);
		$("#unansweredanswer").html(unanswered);

		$("#end_game").show();
	}
});