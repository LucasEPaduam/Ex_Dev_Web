const form = document.querySelector('form');
const ageInput = document.querySelector('#age');
const ageError = document.querySelector('#age-error');
const success = document.querySelector('#success');
const resetButton = document.querySelector('#reset-button');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = form.elements.name.value;
    const age = parseInt(ageInput.value);

    if (age < 18) {
        ageError.textContent = 'É necessário ter 18 anos ou mais para se candidatar a vaga.';
        return;
    } else {
        success.textContent = 'Cadastrado com sucesso.';
    }

    console.log(`Nome: ${name}, Idade: ${age}`);
    form.reset();
});

resetButton.addEventListener('click', function () {
    location.reload();
});
