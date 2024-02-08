//your JS code here. If required.
const name = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const job = document.getElementById("job");
const phone = document.getElementById("phone");
const submitBtn = document.getElementById("btn");

submitBtn.addEventListener("click", function () {
	localStorage.setItem("name", name.value);
	localStorage.setItem("age", age.value);
	localStorage.setItem("email", email.value);
	localStorage.setItem("job", job.value);
	localStorage.setItem("phone", phone.value);
});

window.addEventListener("load",function (){
	name.value = localStorage.getItem("name");
	age.value = localStorage.getItem("age");
	email.value = localStorage.getItem("email");
	job.value = localStorage.getItem("job");
	phone.value = localStorage.getItem("phone");
});


