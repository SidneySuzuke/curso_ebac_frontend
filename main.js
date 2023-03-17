const form = document.getElementById('form-valida');
const valora = document.getElementById('valor-a');
const valorb = document.getElementById('valor-b');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (valorb.value <= valora.value) { 
        alert (`Valor ${valorb.value} não é maior que valor ${valora.value}`)
        } else {
        alert (`Valor ${valorb.value} é maior que valor ${valora.value}`)
        }
})

