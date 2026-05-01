let submitbtn = document.querySelector('.submitbtn');

function funcAlert() {
    alert('Your query has been submitted');
}

submitbtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    funcAlert();
});


