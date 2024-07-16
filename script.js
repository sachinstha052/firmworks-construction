document.getElementById('notify-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    console.log('Email submitted:', email);
    alert('Thank you! You will be notified once we are back online.');
    // Here you would typically send the email to your server
});
