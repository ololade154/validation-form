let nameError = document.querySelector(".name-error");
let phoneError = document.querySelector(".phone-error");
let emailError = document.querySelector(".email-error");
let messageError = document.querySelector(".message-error");
let submitError = document.querySelector(".submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  nameError.innerHTML =
    '<img src="/images/check-circle-fill.svg" alt="" class="image2">';
  return true;
}
function validatePhone() {
  let phone = document.getElementById("phone-name").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "phone no is required";
    return false;
  }
  if (phone.length != 10) {
    phoneError.innerHTML = "phone no should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digit please";
    return false;
  }
  phoneError.innerHTML =
    '<img src="/images/check-circle-fill.svg" alt="" class="image2">';
  return true;
}
function validateEmail() {
  let email = document.getElementById("email-name").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML =
    '<img src="/images/check-circle-fill.svg" alt="" class="image2">';
  return true;
}
function validateMessage() {
  let message = document.getElementById("message-name").value;
  let required = 30;
  let leftValue = required - message.length;
  if (leftValue > 0) {
    messageError.innerHTML = leftValue + "more characters required ";
    return false;
  }
  messageError.innerHTML =
    '<img src="/images/check-circle-fill.svg" alt="" class="image2">';
  return true;
}
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
