/* 눈모양 버튼 클릭시 */
function togglePasswordVisibility(button) {
  const passwordInput = button.previousElementSibling;
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    button.classList.add("visible");
  } else {
    passwordInput.type = "password";
    button.classList.remove("visible");
  }
}

export { togglePasswordVisibility };
