function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("successMessage").innerText =
        "Thank you! We will contact you shortly.";
}
