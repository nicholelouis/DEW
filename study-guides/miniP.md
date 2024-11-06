# Mini Projects

## ToDo App

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Lista de Tareas</h1>
    <input type="text" id="taskInput" placeholder="Añadir nueva tarea">
    <button onclick="addTask()">Añadir</button>
    <ul id="taskList"></ul>
    <script src="script.js"></script>
</body>
</html>
```

```js
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskInput.value;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.onclick = () => taskList.removeChild(listItem);

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
        
        taskInput.value = "";
    }
}
```

## Calc basic

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
</head>
<body>
    <h1>Calculadora Básica</h1>
    <div id="calculator">
        <input type="text" id="display" disabled>
        <div id="buttons">
            <button onclick="appendNumber('7')">7</button>
            <button onclick="appendNumber('8')">8</button>
            <button onclick="appendNumber('9')">9</button>
            <button onclick="setOperation('/')">/</button>
            <button onclick="appendNumber('4')">4</button>
            <button onclick="appendNumber('5')">5</button>
            <button onclick="appendNumber('6')">6</button>
            <button onclick="setOperation('*')">*</button>
            <button onclick="appendNumber('1')">1</button>
            <button onclick="appendNumber('2')">2</button>
            <button onclick="appendNumber('3')">3</button>
            <button onclick="setOperation('-')">-</button>
            <button onclick="appendNumber('0')">0</button>
            <button onclick="clearDisplay()">C</button>
            <button onclick="calculate()">=</button>
            <button onclick="setOperation('+')">+</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```js
let display = document.getElementById("display");
let currentOperation = null;
let currentValue = "";

function appendNumber(number) {
    display.value += number;
}

function setOperation(operation) {
    currentValue = display.value;
    currentOperation = operation;
    display.value = "";
}

function calculate() {
    if (currentOperation && currentValue) {
        const result = eval(currentValue + currentOperation + display.value);
        display.value = result;
        currentOperation = null;
        currentValue = "";
    }
}

function clearDisplay() {
    display.value = "";
    currentOperation = null;
    currentValue = "";
}
```

## Conversor de moneda

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de Moneda</title>
</head>
<body>
    <h1>Conversor de Moneda</h1>
    <input type="number" id="amount" placeholder="Monto">
    <select id="currencyFrom">
        <option value="USD">Dólares</option>
        <option value="EUR">Euros</option>
    </select>
    <button onclick="convertCurrency()">Convertir</button>
    <select id="currencyTo">
        <option value="EUR">Euros</option>
        <option value="USD">Dólares</option>
    </select>
    <p id="result">Resultado: </p>
    <script src="script.js"></script>
</body>
</html>
```

```js
function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("currencyFrom").value;
    const to = document.getElementById("currencyTo").value;
    let result = 0;

    if (from === "USD" && to === "EUR") {
        result = amount * 0.85; // Ejemplo de tasa de cambio
    } else if (from === "EUR" && to === "USD") {
        result = amount * 1.18; // Ejemplo de tasa de cambio
    }

    document.getElementById("result").textContent = "Resultado: " + result.toFixed(2);
}
```

## Reloj Digital

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reloj Digital</title>
</head>
<body>
    <h1>Reloj Digital</h1>
    <div id="clock">00:00:00</div>
    <script src="script.js"></script>
</body>
</html>
```

```js
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
```

## Adivina el número

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Adivinar el Número</title>
</head>
<body>
    <h1>Adivina el Número</h1>
    <p>He pensado en un número entre 1 y 100. ¿Puedes adivinarlo?</p>
    <input type="number" id="guessInput" placeholder="Tu adivinanza" min="1" max="100">
    <button onclick="checkGuess()">Adivinar</button>
    <p id="message"></p>
    <p id="attempts">Intentos: 0</p>
    <script src="script.js"></script>
</body>
</html>
```

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    attempts++;
    
    if (guess < randomNumber) {
        document.getElementById("message").textContent = "El número es mayor.";
    } else if (guess > randomNumber) {
        document.getElementById("message").textContent = "El número es menor.";
    } else {
        document.getElementById("message").textContent = "¡Felicidades! Adivinaste el número.";
    }
    
    document.getElementById("attempts").textContent = "Intentos: " + attempts;
}
```

## Gallery ligthbox

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería de Imágenes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Galería de Imágenes</h1>
    <div class="gallery">
        <img src="image1.jpg" onclick="openLightbox(this.src)">
        <img src="image2.jpg" onclick="openLightbox(this.src)">
        <img src="image3.jpg" onclick="openLightbox(this.src)">
    </div>
    <div id="lightbox" onclick="closeLightbox()">
        <img id="lightboxImg">
    </div>
    <script src="script.js"></script>
</body>
</html>
```

```js
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
```

```css
body {
    font-family: Arial, sans-serif;
}

.gallery img {
    width: 100px;
    margin: 10px;
    cursor: pointer;
}

#lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
}

#lightbox img {
    max-width: 90%;
    max-height: 90%;
}
```

## Formulario Validacion de datos

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro</title>
</head>
<body>
    <h1>Formulario de Registro</h1>
    <form id="registrationForm" onsubmit="return validateForm()">
        <label for="name">Nombre:</label>
        <input type="text" id="name"><br>
        
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email"><br>
        
        <label for="password">Contraseña:</label>
        <input type="password" id="password"><br>
        
        <button type="submit">Registrarse</button>
        <p id="errorMessage"></p>
    </form>
    <script src="script.js"></script>
</body>
</html>
```

```js
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (name.trim() === "") {
        errorMessage.textContent = "El nombre no puede estar vacío.";
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "El correo electrónico no es válido.";
        return false;
    }

    if (password.length < 8) {
        errorMessage.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return false;
    }

    errorMessage.textContent = "";
    alert("Registro exitoso!");
    return true;
}
```

## Sist Puntuación

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Puntos</title>
</head>
<body>
    <h1>Contador de Puntos</h1>
    <p>Puntuación: <span id="score">0</span></p>
    <button onclick="addPoint()">Añadir Punto</button>
    <button onclick="subtractPoint()">Restar Punto</button>
    <button onclick="resetScore()">Reiniciar</button>
    <script src="script.js"></script>
</body>
</html>
```

```js
let score = 0;

function updateScore() {
    document.getElementById("score").textContent = score;
}

function addPoint() {
    score++;
    updateScore();
}

function subtractPoint() {
    if (score > 0) {
        score--;
        updateScore();
    }
}

function resetScore() {
    score = 0;
    updateScore();
}
```