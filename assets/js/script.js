document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("button");
		const form = document.getElementById("send");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            btn.value = "Sending...";

            const serviceID = "service_eluxnvc";
            const templateID = "Gmail";

            emailjs.sendForm(serviceID, templateID, this).then(
                () => {
                    btn.value = "Send Email";
                    event.reset();
                },
                (err) => {
                    btn.value = "Send Email";
                    alert(JSON.stringify(err));
                }
            );
            form.reset();
        });
});
