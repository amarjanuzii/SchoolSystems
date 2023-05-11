(function(){
    emailjs.init("x3O-7Xr4mvBnQ9o4w");
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
    
    
    
        // Get the form values
        var form = document.getElementById('myForm');
        var name = form.elements.floating_first_name.value;
        var email = form.elements.floating_email.value;
        var message = form.elements.floating_company.value;
    
        // Prepare the email template parameters
        var templateParams = {
          from_name: name,
          from_email: email,
          message: message
        };
    
        // Send the email
        emailjs.send('service_vqef9gd', 'template_q2uw979', templateParams)
          .then(function(response) {
            console.log('Email sent!', response.status, response.text);
            // Clear the form fields
            form.reset();
          }, function(error) {
            console.error('Error sending email:', error);
          });
      });
    
  })();




