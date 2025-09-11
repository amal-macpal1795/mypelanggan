// LOGIN FORM HANDLER
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // arahkan ke dashboard
  } else {
    alert("Invalid email or password");
  }
});
