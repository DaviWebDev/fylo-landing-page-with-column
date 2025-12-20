document.addEventListener("submit", (e) => {
    if (!e.target.classList.contains("cta__form")) return;

    e.preventDefault();

    const form = e.target;
    const input = form.querySelector(".cta__input");

    if (input.checkValidity()) {
        form.classList.remove("has-error");
    } else {
        form.classList.add("has-error");
    }
});
