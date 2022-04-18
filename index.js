import validator from './validator.js';

const form = document.querySelector('#form');
const input = document.querySelector('#cardNumber')
const dataValid = document.querySelector('[data-valid]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = input.value;
    const isValid = validator.isValid(value);
    dataValid.dataset.valid = isValid;
});
