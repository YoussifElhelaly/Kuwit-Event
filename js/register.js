emailjs.init("_gl28_XU_UTAXDwQ8krsN");
let form = document.getElementById('contact-form')
form.addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_0gfo18w', 'template_ykvxege', this)
        .then(function () { alert('Email sent successfully!'); },
            function (error)
            {
                alert('Failed to send email: ' + JSON.stringify(error));
             });
});