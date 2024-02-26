// JS - JavaScript //

function calcGrade() {
	let mark = document.querySelector("#marks");

	if (mark.value >= 80 && mark.value <= 100) {
		let gpaResult = document.querySelector("#gpa-result");
		gpaResult.innerText = "GPA - 5.00 : A+";
	} else if (mark.value >= 70 && mark.value <= 79) {
		let gpaResult = document.querySelector("#gpa-result");
		gpaResult.innerText = "GPA - 4.00 : A";
	} else if (mark.value >= 60 && mark.value <= 69) {
		let gpaResult = document.querySelector("#gpa-result");
		gpaResult.innerText = "GPA - 3.50 : A-";
	} else if (mark.value >= 50 && mark.value <= 59) {
		let gpaResult = document.querySelector("#gpa-result");
		gpaResult.innerText = "GPA - 3.00 : B";
	} else if (mark.value >= 40 && mark.value <= 49) {
		let gpaResult = document.querySelector("#gpa-result");
		gpaResult.innerText = "GPA - 2.00 : C";
	} else if (mark.value >= 33 && mark.value <= 39) {
		let gpaResult = document.querySelector("#gpa-result");
		gpaResult.innerText = "GPA - 1.00 : D";
	} else if (mark.value >= 0 && mark.value <= 32) {
		let gpaResult = document.querySelector("#gpa-result");
		gpaResult.innerText = "GPA - 0.00 : F";
	} else {
		let gpaResult = document.querySelector("#gpa-result");
		gpaResult.innerText = "GPA";
	}
}