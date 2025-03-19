const emailInput = document.querySelector("#input-email");
const wrongEmail = document.createElement("span");
wrongEmail.classList.add("error-message");

function wrongEmailEvent(event) {
  if (event.target.value === "") {
    event.target.classList.add("warning");
    event.target.classList.remove("done");
    wrongEmail.textContent = "이메일을 입력해주세요.";
  } else if (!event.target.checkValidity()) {
    event.target.classList.add("warning");
    event.target.classList.remove("done");
    wrongEmail.textContent = "잘못된 이메일 형식입니다.";
  } else {
    event.target.classList.remove("warning");
    event.target.classList.add("done");
    wrongEmail.textContent = "";
  }
  emailInput.parentElement.appendChild(wrongEmail);
  if (wrongEmail.textContent === "") {
    emailInput.parentElement.removeChild(wrongEmail);
  }
}

emailInput.addEventListener("focusout", wrongEmailEvent);

const passwordInput = document.querySelector("#input-password");
const wrongPassword = document.createElement("span");
wrongPassword.classList.add("error-message");

function wrongPasswordEvent(event) {
  if (event.target.value === "") {
    event.target.classList.add("warning");
    event.target.classList.remove("done");
    wrongPassword.textContent = "비밀번호를 입력해주세요.";
  } else if (event.target.value.length < 8) {
    event.target.classList.add("warning");
    event.target.classList.remove("done");
    wrongPassword.textContent = "비밀번호를 8자 이상 입력해주세요.";
  } else {
    event.target.classList.remove("warning");
    event.target.classList.add("done");
    wrongPassword.textContent = "";
  }
  passwordInput.parentElement.appendChild(wrongPassword);
  if (wrongPassword.textContent === "") {
    passwordInput.parentElement.removeChild(wrongPassword);
  }
}

passwordInput.addEventListener("focusout", wrongPasswordEvent);

const loginButton = document.querySelector(".login-page .submit-button");
loginButton.disabled = true;
function activateButton() {
  if (
    emailInput.classList.contains("done") &&
    passwordInput.classList.contains("done")
  ) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

emailInput.addEventListener("input", activateButton);
passwordInput.addEventListener("input", activateButton);
emailInput.addEventListener("focusout", activateButton);
passwordInput.addEventListener("focusout", activateButton);
