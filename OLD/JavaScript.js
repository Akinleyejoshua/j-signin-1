// LOGIN VALIDATOR

var htmlBody = document.querySelector('body');
var hmtlForm = document.querySelector('form');
var htmlLabels = document.querySelectorAll('label');
var htmlInputs = document.querySelectorAll('input');

//Body style
htmlBody.style.background = 'whitesmoke';
htmlBody.style.padding = '10px';
htmlBody.style.fontFamily = 'monospace'

//Form Style
hmtlForm.style.background = 'white';
hmtlForm.style.padding = '10px';
hmtlForm.style.textAlign = 'center';
hmtlForm.style.border = 'none';
hmtlForm.style.borderRadius = '0.4em';
hmtlForm.style.boxShadow = '0px 0px 6px gray';

//Label style
for (i = 0; htmlLabels.length > i; i++){
	htmlLabels[i].style.color = 'skyblue';
}

//Input style
for (i = 0; htmlInputs.length > i; i++){
	var input = htmlInputs[i]
	input.style.border = 'none';
	input.style.background = 'whitesmoke';
	input.style.padding = '5px';
	input.style.boxShadow = '0px 0px 1px gray';
	input.style.borderRadius = '0.2em';
}
htmlInputs[2].style.color = 'skyblue'
htmlInputs[2].style.boxShadow = '1px 1px 8px gray'

// INPUT 
var email = document.querySelector(`[type = 'email']`);
var password = document.querySelector(`[type = 'password']`);
var login = document.querySelector(`[type = 'button']`);
var msg = document.querySelector(`#msg`);

login.addEventListener('click', validate);

function validate(){
	
	if (email.value === '' ||  password.value === ''){
		msg.className = 'alert danger-alert';
		msg.innerHTML = 'Error Signing in';
	}
	else{
		msg.className = 'alert success-alert';
		msg.innerHTML = 'Signed in';
	};
}
