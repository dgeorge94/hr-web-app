const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    isValid = form.checkValidity();


    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    } else {
        message.textContent = 'Login Success!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }

}

function storeFormData() {
    
    console.log(form.email.value);
    console.log(form.password.value);
    
    const user = {
        email: form.email.value,
        password: form.password.value
    };

    console.log(user);
}

function processFormData(e) {
    e.preventDefault();

    storeFormData();
}

form.addEventListener('submit', processFormData());
