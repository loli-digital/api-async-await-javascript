<h1>APIs públicas con JavaScript</h1>

<p>Una API pública es un servicio en internet que devuelve información en formato JSON.</p>
<p>En este caso, puede ser una API que devuelva chistes, frases, usuarios ficticios, etc.</p>

<h2>Ejercicio de usuaria con async y await:</h2>

<ul>
    <li>Cuando la persona pulse un botón en tu página, se hará una petición a la API de JSON Placeholder</li>
    <li>La URL que debes usar es: <b>https://jsonplaceholder.typicode.com/users/3</b></li>
    <li>Accede al objeto JSON para obtener el nombre (name) y el correo electrónico (email) de usuaria</li>
    <li>Muestra la información en el párrafo</li>
    <li>Si ocurre algún error en la petición (por ejemplo, no hay conexión o la API responde mal), la promesa debe rechazar y mostrar un mensaje de error en pantalla</li>
    <li>El mensaje debe aparecer dentro de un elemento del HTML (no solo en consola)</li>
</ul>