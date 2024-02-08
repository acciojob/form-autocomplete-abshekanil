//your JS code here. If required.
const name = document.getElementById("name");

const email = document.getElementById("email");

const phone = document.getElementById("phone");
const submitBtn = document.getElementById("btn");
submitBtn.innerText = "submit";

let formDataArray = [];

submitBtn.addEventListener("click", function(){

	let formData = {
		name: name.value,
		email: email.value,
		phone: phone.value
	};

	formDataArray.push(formData);

	localStorage.setItem("formData", JSON.stringify(formDataArray));
});

window.addEventListener("load", function(){
	formDataArray = JSON.parse(localStorage.getItem("formData")) || [];

	if(formDataArray.length > 0)
	{
		const lastFormData = formDataArray[formDataArray.length - 1];
		name.value = lastFormData.name;
		email.value = lastFormData.email;
		phone.value = lastFormData.phone;
	}
});


