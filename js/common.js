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

// 버튼 클릭시 특정 페이지로 이동
function redirectToPage(event, redirectUrl) {
  event.preventDefault();
  window.location.href = redirectUrl;
}

export { togglePasswordVisibility, redirectToPage };
