// Initialize EmailJS with your user ID
emailjs.init({
              publicKey: "UGsYCKpdWOCxRXfCC",
            });

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Prepare the data to be sent
    var templateParams = {
        from_name: name,
        from_email: email,
        message_html: message,
    };

    // Send the email
    emailjs.send('service_uv6y1fd', 'template_butrjzn', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Your message has been sent successfully!');
        }, function(error) {
           console.log('FAILED...', error);
           alert('Failed to send the message, please try again later.');
        });
});
