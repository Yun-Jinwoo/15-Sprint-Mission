const emailInput = document.querySelector("#input-email");
const wrongEmail = document.createElement("span");

function wrongEmailEvent(event) {
  event.target.classList.add("warning");
  if (event.target.value === "") {
    wrongEmail.textContent = "이메일을 입력해주세요.";
  } else if (!event.target.checkValidity()) {
    wrongEmail.textContent = "잘못된 이메일 형식입니다.";
  } else {
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

function wrongPasswordEvent(event) {
  event.target.classList.add("warning");
  if (event.target.value === "") {
    wrongPassword.textContent = "비밀번호를 입력해주세요.";
  } else if (event.target.value.length < 8) {
    wrongPassword.textContent = "비밀번호를 8자 이상 입력해주세요.";
  } else {
    wrongPassword.textContent = "";
  }

  passwordInput.parentElement.appendChild(wrongPassword);
  if (wrongPassword.textContent === "") {
    passwordInput.parentElement.removeChild(wrongPassword);
  }
}

passwordInput.addEventListener("focusout", wrongPasswordEvent);
