/*División de la función de comprobación para facilitar su lectura y organización*/

function validateName(){
	var name_field = document.getElementById('name');
	var valid_name = /^[A-Za-z\s]+$/;
	var error_name = document.getElementById('name_error');

	if (name_field.value == 0) {
		error_name.innerHTML = "Rellene este campo";
		name_field.classList.add("invalid");
		name_field.classList.add("error_icon");
		return false;
	}
	else if (valid_name.test(name_field.value)) {
		name_field.classList.remove("invalid");
		name_field.classList.remove("error_icon");
		error_name.innerHTML = "";
		name_field.classList.add("valid");
		name_field.classList.add("success_icon");
		return true;
	}
	else {
		name_field.classList.remove("valid");
		name_field.classList.remove("success_icon");
		error_name.innerHTML = "Nombre inválido";
		name_field.classList.add("invalid");
		name_field.classList.add("error_icon");
		return false;
	}
	}

function validateEmail() {
	var email_field = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; /*fuente: https://www.w3.org/*/
	var error_email = document.getElementById('email_error');

	if (email_field.value == 0) {
		error_email.innerHTML = "Rellene este campo";
		email_field.classList.add("invalid");
		email_field.classList.add("error_icon");
		return false;
	}
	
	else if (validEmail.test(email_field.value)) {
		email_field.classList.remove("invalid");
		email_field.classList.remove("error_icon");
		error_email.innerHTML = "";
		email_field.classList.add("valid");
		email_field.classList.add("success_icon");
		return true;
	}
	else {
		email_field.classList.remove("valid");
		email_field.classList.remove("success_icon");
		error_email.innerHTML = "Email inválido";
		email_field.classList.add("invalid");
		email_field.classList.add("error_icon");
		return false;
	}
} 

function validatePassword() {
	var password_field = document.getElementById('password');
	var valid_password = /^[\s\S]{1,8}$/;
	var error_password = document.getElementById('password_error');

	if (password_field.value == 0) {
		error_password.innerHTML = "Rellene este campo";
		password_field.classList.add("invalid");
		password_field.classList.add("error_icon");
		return false;
	}
	else if (valid_password.test(password_field.value) ) {
		password_field.classList.remove("invalid");
		password_field.classList.remove("error_icon");
		error_password.innerHTML = "";
		password_field.classList.add("valid");
		password_field.classList.add("success_icon");
		return true;
	}
	else {
		password_field.classList.remove("valid");
		password_field.classList.remove("success_icon");	
		error_password.innerHTML = "No debe tener más de 8 caracteres";
		password_field.classList.add("invalid");
		password_field.classList.add("error_icon");
		return false;
	}
}

function validateConfirm() {
	var password_field = document.getElementById('password');
	var confirm_field = document.getElementById('confirm');
	var error_confirm = document.getElementById('confirm_error');

	if (confirm_field.value == 0) {
		error_confirm.innerHTML = "Rellene este campo";
		confirm_field.classList.add("invalid");
		confirm_field.classList.add("error_icon");
		return false;
	}
	else if (password_field.value == confirm_field.value) {
		confirm_field.classList.remove("invalid");
		confirm_field.classList.remove("error_icon");
		error_confirm.innerHTML = "";
		confirm_field.classList.add("valid");
		confirm_field.classList.add("success_icon");
		return true;
	}
	else {
		confirm_field.classList.remove("valid");
		confirm_field.classList.remove("success_icon");
		error_confirm.innerHTML = "Las contraseñas no coinciden";
		confirm_field.classList.add("invalid");
		confirm_field.classList.add("error_icon");
		return false;
	}
}

function borderButton() {
	var borderButton = document.getElementById('button');
	borderButton.onmouseover = () => {
		borderButton.classList.add('borderColor');
	}
	borderButton.onmouseout = () => {	
		borderButton.classList.remove('borderColor');
	}
}