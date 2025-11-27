const API = "https://defco-backend.onrender.com";

// ----------------------------
// LOGIN
// ----------------------------
async function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  try {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
      window.location.href = "home.html";
    } else {
      alert("Credenciales incorrectas");
    }
  } catch (err) {
    alert("Error de conexión con backend");
    console.error(err);
  }
}

// ----------------------------
// LOGOUT
// ----------------------------
function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

// ----------------------------
// GENERAR LOG
// ----------------------------
function log(msg) {
  document.getElementById("log").innerHTML = msg;
}

// ----------------------------
// ABRIR PUERTA
// ----------------------------
async function openDoor() {
  log("Ejecutando apertura…");

  const res = await fetch(`${API}/abrir`, {
    method: "POST",
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  log(JSON.stringify(data));
}

// ----------------------------
// CREAR USUARIO
// ----------------------------
async function crearUsuario() {
  log("Creando usuario…");

  const body = {
    employeeNo: String(Math.floor(Math.random() * 9000) + 1000),
    name: "Usuario Test"
  };

  const res = await fetch(`${API}/crearUsuario`, {
    method: "POST",
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  log(JSON.stringify(data));
}

// ----------------------------
// ASIGNAR TARJETA
// ----------------------------
async function asignarTarjeta() {
  log("Asignando tarjeta…");

  const card = String(Math.floor(Math.random() * 90000000) + 10000000);

  const res = await fetch(`${API}/asignarTarjeta`, {
    method: "POST",
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ card })
  });

  const data = await res.json();
  log(JSON.stringify(data));
}

// ----------------------------
// GENERAR QR
// ----------------------------
async function generarQR() {
  log("Generando QR…");

  const res = await fetch(`${API}/generarQR`, {
    method: "POST",
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  log(JSON.stringify(data));
}
