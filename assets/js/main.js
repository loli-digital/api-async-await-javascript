const btn = document.querySelector(".btn");
const frase = document.querySelector(".mensaje");

btn.addEventListener("click", async (e) => {
  e.preventDefault();

  frase.textContent = "Cargando...";
  frase.style.color = "#000";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");

    if (!response.ok) {
      throw new Error("Error en la respuesta de la red");
    }

    const data = await response.json();

    frase.textContent = `Nombre: ${data.name}, Email: ${data.email}`;
    
  } catch (error) {
    frase.textContent = "Error: no se pudo obtener la información.";
    frase.style.color = "#DC3545";
    console.error("Hubo un problema con la operación fetch:", error);
  }
});