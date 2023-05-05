const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const orderInput = document.querySelector("#order");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (nameInput.value === "") {
    showError(nameInput, "Name is required");
  } else {
    showSuccess(nameInput);
  }

  if (emailInput.value === "") {
    showError(emailInput, "Email is required");
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Please enter a valid email address");
  } else {
    showSuccess(emailInput);
  }

  if (phoneInput.value === "") {
    showError(phoneInput, "Phone number is required");
  } else if (!isValidPhone(phoneInput.value)) {
    showError(phoneInput, "Please enter a valid phone number");
  } else {
    showSuccess(phoneInput);
  }

  if (orderInput.value !== "" && !isValidOrderNumber(orderInput.value)) {
    showError(orderInput, "Please enter a valid order number");
  } else {
    showSuccess(orderInput);
  }

  if (subjectInput.value === "") {
    showError(subjectInput, "Subject is required");
  } else {
    showSuccess(subjectInput);
  }

  if (messageInput.value === "") {
    showError(messageInput, "Message is required");
  } else {
    showSuccess(messageInput);
  }
});

function showError(input, errorMessage) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const errorText = formControl.querySelector("small");
  errorText.innerText = errorMessage;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  const emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function isValidOrderNumber(order) {
  const orderRegex = /^\d+$/;
  return orderRegex.test(order);
}
