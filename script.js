function saveData(){
	let data = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		phone: document.getElementById("phone").value
	};

	let forms = localStorage.getItem("forms");
	if(forms){
		forms = JSON.parse(forms);
	}else
	{
		forms = [data];
	}
	localStorage.setItem("forms", JSON.stringify(forms));
}

function autoFillForm(){
	let forms = localStorage.getItem("forms");
	if(forms){
		forms = JSON.parse(forms);
		let lastForm = forms[forms.length - 1];
		document.getElementById("name").value = lastForm.name;
		document.getElementById("email").value = lastForm.email;
		document.getElementById("phone").value = lastForm.phone;
	}
	
}

const submitBtn = document.getElementById("btn");

submitBtn.addEventListener("click", function(){
	saveData();
});

window.addEventListener("load", function(){
	autoFillForm();
});