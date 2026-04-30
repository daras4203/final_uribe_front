document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: usuario,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error("Credenciales incorrectas");
        }

        localStorage.setItem("user", usuario);

        window.location.href = "views/menu.html";

    } catch (error) {
        alert(error.message);
    }
});