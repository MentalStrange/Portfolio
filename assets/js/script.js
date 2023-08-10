document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("button");

    document
        .getElementById("send")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            btn.value = "Sending...";

            const serviceID = "service_eluxnvc";
            const templateID = "Gmail";

            emailjs.sendForm(serviceID, templateID, this).then(
                () => {
                    btn.value = "Send Email";
                    alert("Sent!");
                },
                (err) => {
                    btn.value = "Send Email";
                    alert(JSON.stringify(err));
                }
            );
        });
});
