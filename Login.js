var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var submit = document.querySelector('button[name="submit"]');
var msg = document.querySelector('#msg');

// validator 
document.addEventListener('click', function validate(event) {
    if (event.target.innerHTML === 'Login') {
        if (username.value === "" || email.value === "" || password.value === "") {
            msg.className = 'error';
            msg.style.padding = '1em';
            msg.innerHTML = 'All fields are required!';
        }
        else if (!isNaN(username.value) || !isNaN(email.value)) {
            msg.className = 'error';
            msg.style.padding = '1em';
            msg.innerHTML = 'Username/Email must not include numbers!';

        }
        else if (password.value.length < 8) {
            msg.className = 'error';
            msg.style.padding = '1em';
            msg.innerHTML = 'Aleast not less than <b> 8 </b> characters!';
        }
        else {
            msg.className = 'success';
            msg.style.padding = '1em';
            msg.innerHTML = "<b>" + username.value + ", Signed in completely with <b>" + email.value + '</b>';

        }
    }
})
