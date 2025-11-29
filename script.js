 // Load stored user data
  document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("username") || "Guest User";
    const email = localStorage.getItem("email") || "guest@example.com";

    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;

    document.getElementById("username").value = name;
    document.getElementById("email").value = email;
  });

  function saveProfile() {
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
      alert("Please fill out both fields.");
      return;
    }

    localStorage.setItem("username", name);
    localStorage.setItem("email", email);

    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;

    alert("Profile updated successfully!");
  }

  function logout() {
    localStorage.clear();
    window.location.href = "index.html";
  }