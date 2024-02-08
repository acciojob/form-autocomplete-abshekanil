//your JS code here. If required.
const name = document.getElementById("name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const job = document.getElementById("job");
const number = document.getElementById("number");
const submitBtn = document.getElementById("btn");

localStorage.setItem(name, name.value);
localStorage.setItem(age, age.value);
localStorage.setItem(email, email.value);
localStorage.setItem(job, job.value);
localStorage.setItem(number, number.value);

localStorage.getItem(name);
localStorage.getItem(age);
localStorage.getItem(email);
localStorage.getItem(job);
localStorage.getItem(number);
