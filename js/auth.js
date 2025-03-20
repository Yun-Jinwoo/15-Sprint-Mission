/* email 에러 메시지 처리 */
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

/* nickname 에러 메시지 처리 */

const nicknameInput = document.querySelector("#input-nickname");
const wrongNickname = document.createElement("span");
wrongNickname.classList.add("error-message");

function wrongNicknameEvent(event) {
  if (event.target.value === "") {
    event.target.classList.add("warning");
    event.target.classList.remove("done");
    wrongNickname.textContent = "닉네임을 입력해주세요.";
  } else {
    event.target.classList.remove("warning");
    event.target.classList.add("done");
    wrongNickname.textContent = "";
  }
  nicknameInput.parentElement.appendChild(wrongNickname);
  if (wrongNickname.textContent === "") {
    nicknameInput.parentElement.removeChild(wrongNickname);
  }
}

nicknameInput.addEventListener("focusout", wrongNicknameEvent);

/* password 에러 메시지 처리 */
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

/* password-check 에러 메시지 처리 */
const passwordCheckInput = document.querySelector("#input-password-check");
const wrongpasswordCheck = document.createElement("span");
wrongpasswordCheck.classList.add("error-message");

function wrongPasswordCheckEvent(event) {
  if (event.target.value !== passwordInput.value) {
    event.target.classList.add("warning");
    event.target.classList.remove("done");
    wrongpasswordCheck.textContent = "비밀번호가 일치하지 않습니다.";
  } else {
    event.target.classList.remove("warning");
    event.target.classList.add("done");
    wrongpasswordCheck.textContent = "";
  }
  passwordCheckInput.parentElement.appendChild(wrongpasswordCheck);
  if (wrongpasswordCheck.textContent === "") {
    passwordCheckInput.parentElement.removeChild(wrongpasswordCheck);
  }
}

passwordCheckInput.addEventListener("focusout", wrongPasswordCheckEvent);

/* email, password에 유효한 값이 입력되면 로그인 페이지 버튼 활성화 */
const loginButton = document.querySelector(".login-page .submit-button");
loginButton.disabled = true;
function activateLoginButton() {
  if (
    emailInput.classList.contains("done") &&
    passwordInput.classList.contains("done")
  ) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

emailInput.addEventListener("input", activateLoginButton);
passwordInput.addEventListener("input", activateLoginButton);
emailInput.addEventListener("focusout", activateLoginButton);
passwordInput.addEventListener("focusout", activateLoginButton);

/* email, nickname, password, password-check에 유효한 값이 입력되면 회원가입 페이지 버튼 활성화 */
const signupButton = document.querySelector(".signup-page .submit-button");
signupButton.disabled = true;
function activateSignupButton() {
  if (
    emailInput.classList.contains("done") &&
    nicknameInput.classList.contains("done") &&
    passwordInput.classList.contains("done") &&
    passwordCheckInput.classList.contains("done")
  ) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
}

emailInput.addEventListener("input", activateSignupButton);
nicknameInput.addEventListener("input", activateSignupButton);
passwordInput.addEventListener("input", activateSignupButton);
passwordCheckInput.addEventListener("input", activateSignupButton);
emailInput.addEventListener("focusout", activateSignupButton);
nicknameInput.addEventListener("focusout", activateSignupButton);
passwordInput.addEventListener("focusout", activateSignupButton);
passwordCheckInput.addEventListener("focusout", activateSignupButton);
