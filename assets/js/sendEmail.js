function sendMail(contactForm) {
    emailjs.send("service_aavs7xf", "template_q3ijbm1", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error)
        }
    );
    return false
}