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
