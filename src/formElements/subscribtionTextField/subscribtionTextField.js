let subscribtionField = document.getElementsByClassName('formElements__subscribtionTextField_fieldBtn_field')[0];
let subscribtionButton = document.getElementsByClassName('formElements__subscribtionTextField_fieldBtn_button')[0];
subscribtionField.addEventListener('mouseover', function(event) {
    subscribtionButton.classList.add('Bhover');
});
subscribtionField.addEventListener('mouseout', function(event) {
    subscribtionButton.classList.remove('Bhover');
});
subscribtionButton.addEventListener('mouseover', function(event) {
    subscribtionField.classList.add('Fhover');
});
subscribtionButton.addEventListener('mouseout', function(event) {
    subscribtionField.classList.remove('Fhover');
});
