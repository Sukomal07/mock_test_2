const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const passwordInput = document.getElementById('password')
const ageInput = document.getElementById('age')
const genderInput = document.getElementById('gender')
const dobInput = document.getElementById('dob')
const colorInput = document.getElementById('color')
const submit = document.getElementById('submit')

function validateForm() {

    const errorMessages = document.getElementsByClassName('error-message');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].textContent = '';
    }

    // Name validation
    if (nameInput.value === '') {
        showError(nameInput, 'Name is required');
        return;
    }

    // Email validation
    if (emailInput.value === '') {
        showError(emailInput, 'Email is required');
        return;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Invalid email format');
        return;
    }

    // Phone validation
    if (phoneInput.value === '') {
        showError(phoneInput, 'Phone number is required');
        return;
    } else if (!isValidPhone(phoneInput.value)) {
        showError(phoneInput, 'Invalid phone number format');
        return;
    }

    // Password validation
    if (passwordInput.value === '') {
        showError(passwordInput, 'Password is required');
        return;
    } else if (!isValidPassword(passwordInput.value)) {
        showError(passwordInput, 'Password must be at least 6 characters long');
        return;
    }

    // Age validation
    if (ageInput.value === '' || isNaN(ageInput.value) || ageInput.value < 18 || ageInput.value > 100) {
        showError(ageInput, 'Please enter a valid age (between 18 and 100)');
        return;
    }

    // Gender validation
    if (genderInput.value === '') {
        showError(genderInput, 'Gender is required');
        return;
    }

    // Date of Birth validation
    if (dobInput.value === '') {
        showError(dobInput, 'Date of Birth is required');
        return;
    }

    // Color validation
    if (colorInput.value === '') {
        showError(colorInput, 'Favorite Color is required');
        return;
    }
}

function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Phone number validation regex
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function isValidPassword(password) {
    // Password length validation
    return password.length >= 6;
}
submit.addEventListener('submit', function(e){
    e.preventDefault()
    validateForm()
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        password: passwordInput.value,
        age: ageInput.value,
        gender: genderInput.value,
        dob: dobInput.value,
        color: colorInput.value
    };
    console.log(formData);
})
