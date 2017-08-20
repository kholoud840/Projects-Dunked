$(document).ready(function () {
var header = document.querySelector('#sidebar'),
    toggleButton = document.querySelector('#toggleButton');

    toggleButton.addEventListener('click', function(){
    header.classList.toggle('is-active');
});

});