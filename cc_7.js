let headlineInput = document.querySelector("#headline-input");

let updateButton = document.querySelector("#update-button");

let ctaHeadline = document.querySelector("#cta-headline");

updateButton.addEventListener("click", function() {
    ctaHeadline.textContent = headlineInput.value;
});