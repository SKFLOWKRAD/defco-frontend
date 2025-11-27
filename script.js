const API = "https://defco-backend.onrender.com";

async function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  try {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
      window.location.href = "home.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  } catch (e) {
    console.error(e);
    alert("Error conectando con el servidor");
  }
}
