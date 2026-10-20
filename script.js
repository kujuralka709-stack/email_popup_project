const overlay = document.getElementById("overlay");
const closePopup = document.getElementById("closePopup");
const openPopup = document.getElementById("openPopup");
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

let popupClosed = false;

// Show popup after 3 seconds
setTimeout(() => {
    if (!popupClosed) {
        showPopup();
    }
}, 3000);

function showPopup() {
    overlay.classList.add("show");
}

// Close popup
function hidePopup() {
    overlay.classList.remove("show");
    popupClosed = true;
}

// Close button
closePopup.addEventListener("click", hidePopup);

// Close when clicking outside the modal
overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        hidePopup();
    }
});

// Open popup using Subscribe Now button
openPopup.addEventListener("click", function () {
    if (!popupClosed) {
        showPopup();
    }
});

// Email form validation
emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!emailInput.checkValidity()) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Thank you for subscribing!";
    message.style.color = "green";

    emailForm.reset();
});