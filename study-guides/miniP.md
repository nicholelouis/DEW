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

# Temporizador cuenta regresiva interactivo

### html
```htm
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temporizador de Cuenta Regresiva</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Temporizador de Cuenta Regresiva</h1>
    <div id="timer-container">
        <label for="minutes">Minutos:</label>
        <input type="number" id="minutes" min="0" max="60" value="0">
        
        <label for="seconds">Segundos:</label>
        <input type="number" id="seconds" min="0" max="59" value="0">
        
        <button onclick="startTimer()">Iniciar</button>
        <button onclick="resetTimer()">Reiniciar</button>
        
        <div id="countdown">00:00</div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### JS
```js
let countdownInterval;
let remainingTime = 0;

function startTimer() {
    // Obtener los minutos y segundos del input
    const minutes = parseInt(document.getElementById("minutes").value, 10);
    const seconds = parseInt(document.getElementById("seconds").value, 10);
    
    // Calcular el tiempo total en segundos
    remainingTime = minutes * 60 + seconds;

    // Verificar que el tiempo ingresado es válido
    if (remainingTime <= 0) {
        alert("Por favor, ingresa un tiempo mayor a cero.");
        return;
    }

    // Si ya hay un intervalo en curso, limpiarlo
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Iniciar el intervalo que actualiza el temporizador cada segundo
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").textContent = "¡Tiempo completado!";
        alert("¡El tiempo ha terminado!");
        return;
    }

    // Calcular minutos y segundos restantes
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    // Mostrar tiempo restante en formato 00:00
    document.getElementById("countdown").textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Reducir el tiempo restante en un segundo
    remainingTime--;
}

function resetTimer() {
    // Limpiar el intervalo si está en ejecución
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Resetear el contador y el display del temporizador
    remainingTime = 0;
    document.getElementById("countdown").textContent = "00:00";
    document.getElementById("minutes").value = "0";
    document.getElementById("seconds").value = "0";
}
```

### Explicación

1. Inicio del Temporizador:
- El usuario ingresa minutos y segundos en los campos correspondientes.
- Al hacer clic en "Iniciar", la función startTimer() convierte el tiempo total a segundos.
- Se inicia un intervalo (setInterval) que ejecuta la función updateCountdown() cada segundo.

2. Actualización de la Cuenta Regresiva:
- En updateCountdown(), el tiempo se decrementa en un segundo en cada llamada y se actualiza el contenido de #countdown con el formato MM:SS.
- Si el tiempo llega a cero, el temporizador se detiene y se muestra un mensaje de alerta.

3. Reinicio del Temporizador:
- La función resetTimer() limpia el intervalo, restablece el valor de remainingTime a 0 y actualiza el contador visual para mostrar "00:00".


# Menu onteractivo

### html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú de Comandas de Restaurante</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Menú de Comandas</h1>
    </header>

    <div id="menu">
        <h2>Entradas</h2>
        <ul id="entradas">
            <li>
                <span>Ensalada César</span> - <span>$5</span>
                <button onclick="addToOrder('Ensalada César', 5)">Añadir</button>
            </li>
            <li>
                <span>Sopa de Tomate</span> - <span>$4</span>
                <button onclick="addToOrder('Sopa de Tomate', 4)">Añadir</button>
            </li>
        </ul>

        <h2>Platos Principales</h2>
        <ul id="platos-principales">
            <li>
                <span>Pizza Margherita</span> - <span>$12</span>
                <button onclick="addToOrder('Pizza Margherita', 12)">Añadir</button>
            </li>
            <li>
                <span>Burger de Res</span> - <span>$10</span>
                <button onclick="addToOrder('Burger de Res', 10)">Añadir</button>
            </li>
        </ul>

        <h2>Postres</h2>
        <ul id="postres">
            <li>
                <span>Brownie con Helado</span> - <span>$6</span>
                <button onclick="addToOrder('Brownie con Helado', 6)">Añadir</button>
            </li>
            <li>
                <span>Cheesecake</span> - <span>$7</span>
                <button onclick="addToOrder('Cheesecake', 7)">Añadir</button>
            </li>
        </ul>
    </div>

    <div id="pedido">
        <h2>Tu Comanda</h2>
        <ul id="comanda-lista">
            <!-- Los artículos de la comanda se añadirán aquí -->
        </ul>
        <h3>Total: $<span id="total">0</span></h3>
        <button onclick="clearOrder()">Limpiar Comanda</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### JS
```js
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú de Comandas de Restaurante</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Menú de Comandas</h1>
    </header>

    <div id="menu">
        <h2>Entradas</h2>
        <ul id="entradas">
            <li>
                <span>Ensalada César</span> - <span>$5</span>
                <button onclick="addToOrder('Ensalada César', 5)">Añadir</button>
            </li>
            <li>
                <span>Sopa de Tomate</span> - <span>$4</span>
                <button onclick="addToOrder('Sopa de Tomate', 4)">Añadir</button>
            </li>
        </ul>

        <h2>Platos Principales</h2>
        <ul id="platos-principales">
            <li>
                <span>Pizza Margherita</span> - <span>$12</span>
                <button onclick="addToOrder('Pizza Margherita', 12)">Añadir</button>
            </li>
            <li>
                <span>Burger de Res</span> - <span>$10</span>
                <button onclick="addToOrder('Burger de Res', 10)">Añadir</button>
            </li>
        </ul>

        <h2>Postres</h2>
        <ul id="postres">
            <li>
                <span>Brownie con Helado</span> - <span>$6</span>
                <button onclick="addToOrder('Brownie con Helado', 6)">Añadir</button>
            </li>
            <li>
                <span>Cheesecake</span> - <span>$7</span>
                <button onclick="addToOrder('Cheesecake', 7)">Añadir</button>
            </li>
        </ul>
    </div>

    <div id="pedido">
        <h2>Tu Comanda</h2>
        <ul id="comanda-lista">
            <!-- Los artículos de la comanda se añadirán aquí -->
        </ul>
        <h3>Total: $<span id="total">0</span></h3>
        <button onclick="clearOrder()">Limpiar Comanda</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### Explicacion

#### HTML:
La página tiene un menú dividido en tres secciones: Entradas, Platos Principales, y Postres. Cada sección contiene productos con su precio y un botón para añadirlo a la comanda.
Cuando el usuario añade un item, este aparece en la sección "Tu Comanda", donde se muestra el nombre del producto, su precio y un botón para eliminarlo.

#### JavaScript:
addToOrder(itemName, itemPrice): Esta función agrega un producto al pedido, actualizando tanto la lista de productos en la comanda como el total.
updateOrder(): Actualiza la lista de la comanda en la interfaz. Muestra cada producto con un botón de eliminar.
removeFromOrder(itemToRemove): Elimina un producto del pedido y actualiza tanto la lista como el total.
updateTotal(): Actualiza el total de la comanda mostrado en la página.
clearOrder(): Limpia la comanda y restablece el total a 0.

# Menu con .JSON

### html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú de Restaurante con Datos desde JSON</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Menú del Restaurante</h1>
    </header>

    <div id="menu">
        <!-- Aquí se cargarán dinámicamente los productos del menú -->
    </div>

    <div id="pedido">
        <h2>Tu Comanda</h2>
        <ul id="comanda-lista">
            <!-- Los artículos de la comanda se añadirán aquí -->
        </ul>
        <h3>Total: $<span id="total">0</span></h3>
        <button onclick="clearOrder()">Limpiar Comanda</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

Parte del json
```js
[
    {
        "category": "Entradas",
        "items": [
            { "name": "Ensalada César", "price": 5 },
            { "name": "Sopa de Tomate", "price": 4 }
        ]
    }, ... sigue
```

### Js
```js
let total = 0;
const orderList = [];

// Función para cargar los datos del JSON (simulado)
function loadMenu() {
    // Usamos fetch para simular la obtención de datos de un archivo JSON
    fetch('data.json')
        .then(response => response.json())  // Convertir la respuesta a JSON
        .then(menuData => {
            // Llamamos a la función para mostrar el menú
            displayMenu(menuData);
        })
        .catch(error => {
            console.error('Error al cargar los datos del menú:', error);
        });
}

// Función para mostrar el menú en la página
function displayMenu(menuData) {
    const menuContainer = document.getElementById("menu");

    // Iteramos a través de las categorías y los elementos
    menuData.forEach(category => {
        const categorySection = document.createElement('div');
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        categorySection.appendChild(categoryTitle);

        const categoryList = document.createElement('ul');

        category.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.name}</span> - <span>$${item.price}</span>`;

            // Botón para añadir al pedido
            const addButton = document.createElement('button');
            addButton.textContent = "Añadir";
            addButton.onclick = () => addToOrder(item.name, item.price);
            li.appendChild(addButton);

            categoryList.appendChild(li);
        });

        categorySection.appendChild(categoryList);
        menuContainer.appendChild(categorySection);
    });
}

// Función para añadir un item a la comanda
function addToOrder(itemName, itemPrice) {
    // Añadir el item a la lista de la comanda
    orderList.push({ name: itemName, price: itemPrice });

    // Actualizar el total
    total += itemPrice;

    // Actualizar la vista de la comanda y el total
    updateOrder();
    updateTotal();
}

// Actualizar la vista de la comanda
function updateOrder() {
    const comandaLista = document.getElementById("comanda-lista");
    comandaLista.innerHTML = ''; // Limpiar la lista de la comanda

    // Mostrar los items en la lista de la comanda
    orderList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;

        // Añadir un botón para eliminar el item
        const removeButton = document.createElement('button');
        removeButton.textContent = "Eliminar";
        removeButton.onclick = () => removeFromOrder(item);

        li.appendChild(removeButton);
        comandaLista.appendChild(li);
    });
}

// Función para eliminar un item de la comanda
function removeFromOrder(itemToRemove) {
    // Eliminar el item de la lista de la comanda
    const index = orderList.indexOf(itemToRemove);
    if (index > -1) {
        orderList.splice(index, 1);
    }

    // Actualizar el total
    total -= itemToRemove.price;

    // Actualizar la lista de la comanda y el total
    updateOrder();
    updateTotal();
}

// Actualizar el total de la comanda
function updateTotal() {
    const totalElement = document.getElementById("total");
    totalElement.textContent = total.toFixed(2);
}

// Limpiar la comanda
function clearOrder() {
    // Limpiar la comanda y el total
    orderList.length = 0;
    total = 0;

    updateOrder();
    updateTotal();
}

// Cargar el menú cuando la página se haya cargado
window.onload = loadMenu;
```

# App de pelis

### Html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación de Películas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Lista de Películas</h1>
    </header>

    <div id="movie-list">
        <!-- Las películas se cargarán aquí -->
    </div>

    <div id="favorites">
        <h2>Favoritas</h2>
        <ul id="favorites-list">
            <!-- Aquí se agregarán las películas favoritas -->
        </ul>
        <h3>Total de Favoritas: <span id="favorites-count">0</span></h3>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

parte del json
```js
[
    {
        "title": "El Padrino",
        "genre": "Crimen, Drama",
        "year": 1972,
        "rating": 9.2
    }, ...sigue
```

```js
let favoriteMovies = [];

// Cargar las películas desde el archivo JSON
function loadMovies() {
    // Usamos fetch para obtener los datos de un archivo JSON
    fetch('data.json')
        .then(response => response.json())  // Convertir la respuesta a JSON
        .then(movies => {
            displayMovies(movies); // Mostrar las películas
        })
        .catch(error => {
            console.error('Error al cargar las películas:', error);
        });
}

// Mostrar las películas en la interfaz
function displayMovies(movies) {
    const movieListContainer = document.getElementById("movie-list");

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <h3>${movie.title} (${movie.year})</h3>
            <p><strong>Género:</strong> ${movie.genre}</p>
            <p><strong>Calificación:</strong> ${movie.rating}</p>
            <button onclick="addToFavorites('${movie.title}', '${movie.year}')">Añadir a Favoritas</button>
        `;
        movieListContainer.appendChild(movieItem);
    });
}

// Agregar una película a la lista de favoritas
function addToFavorites(title, year) {
    // Evitar agregar duplicados
    if (!favoriteMovies.find(movie => movie.title === title)) {
        favoriteMovies.push({ title, year });
        updateFavorites();
    }
}

// Mostrar la lista de favoritas en la interfaz
function updateFavorites() {
    const favoritesListContainer = document.getElementById("favorites-list");
    const favoritesCount = document.getElementById("favorites-count");

    // Limpiar la lista de favoritas
    favoritesListContainer.innerHTML = '';

    // Añadir las películas favoritas a la lista
    favoriteMovies.forEach(movie => {
        const favoriteItem = document.createElement('li');
        favoriteItem.textContent = `${movie.title} (${movie.year})`;
        favoritesListContainer.appendChild(favoriteItem);
    });

    // Actualizar el número de películas favoritas
    favoritesCount.textContent = favoriteMovies.length;
}

// Cargar las películas cuando la página se cargue
window.onload = loadMovies;
```

## Resumen 

1. Cargar el archivo data.json con fetch
El primer paso es recuperar la información de un archivo JSON que contiene datos sobre las películas. Para ello, usamos el método fetch. Este método se encarga de enviar una solicitud a un servidor (en este caso, simulamos que es un archivo en el servidor local) y obtener la información.

```js
fetch('data.json')
    .then(response => response.json())  // Convertir la respuesta a JSON
    .then(movies => {
        displayMovies(movies); // Llamamos a la función para mostrar las películas
    })
    .catch(error => {
        console.error('Error al cargar las películas:', error);
    });

```

- fetch('data.json'): Aquí usamos fetch para pedir el archivo data.json. Este archivo contiene la información de las películas.

- .then(response => response.json()): Cuando fetch recibe la respuesta (es decir, el archivo data.json), convierte esa respuesta en un objeto JavaScript usando .json().

- .then(movies => { ... }): Después de que los datos se convierten en objetos JavaScript, llamamos a la función displayMovies(movies) para mostrar las películas en la página.

- .catch(error => {...}): Si hay un error en el proceso (como que no se encuentre el archivo data.json), lo mostramos en la consola con console.error.


2. Mostrar las películas en la página
La función displayMovies es la que se encarga de mostrar las películas que vienen desde el archivo JSON en la página web. Vamos a ver cómo funciona:

```js
function displayMovies(movies) {
    const movieListContainer = document.getElementById("movie-list");

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <h3>${movie.title} (${movie.year})</h3>
            <p><strong>Género:</strong> ${movie.genre}</p>
            <p><strong>Calificación:</strong> ${movie.rating}</p>
            <button onclick="addToFavorites('${movie.title}', '${movie.year}')">Añadir a Favoritas</button>
        `;
        movieListContainer.appendChild(movieItem);
    });
}
```

- movies.forEach(movie => {...}): Recibimos las películas en la variable movies (un array). Usamos forEach para recorrer cada película y mostrarla en la página.

- const movieItem = document.createElement('div'): Para cada película, creamos un div (un bloque HTML) que contendrá la información de esa película.

- movieItem.innerHTML = ...: Aquí le agregamos el contenido HTML al div. Mostramos el título de la película, el año, el género y la calificación, y también añadimos un botón que dice "Añadir a Favoritas". Este botón ejecutará la función addToFavorites cuando se haga clic en él.

- movieListContainer.appendChild(movieItem): Finalmente, agregamos cada película a la lista de películas en el contenedor (#movie-list), que es donde se mostrarán todas las películas en la página.


3. Agregar una película a las "Favoritas"
Cuando el usuario hace clic en el botón de "Añadir a Favoritas", se ejecuta la función addToFavorites:

```js
function addToFavorites(title, year) {
    if (!favoriteMovies.find(movie => movie.title === title)) {
        favoriteMovies.push({ title, year });
        updateFavorites();
    }
}
```

- if (!favoriteMovies.find(movie => movie.title === title)): Este condicional verifica si la película que estamos agregando ya está en la lista de favoritas. Si ya está, no hace nada; si no está, la agrega.

- favoriteMovies.push({ title, year }): Si la película no está en la lista de favoritas, la añadimos al array favoriteMovies con el título y año de la película.

- updateFavorites(): Después de agregar la película, llamamos a la función updateFavorites para actualizar la lista de favoritas y mostrarla en la página.

4. Mostrar las "Favoritas"
La función updateFavorites es la que actualiza la lista de películas favoritas en la página:

```js
function updateFavorites() {
    const favoritesListContainer = document.getElementById("favorites-list");
    const favoritesCount = document.getElementById("favorites-count");

    favoritesListContainer.innerHTML = '';  // Limpiar la lista actual de favoritas

    favoriteMovies.forEach(movie => {
        const favoriteItem = document.createElement('li');
        favoriteItem.textContent = `${movie.title} (${movie.year})`;
        favoritesListContainer.appendChild(favoriteItem);
    });

    favoritesCount.textContent = favoriteMovies.length;
}
```

- favoritesListContainer.innerHTML = '': Primero limpiamos la lista de favoritas, para asegurarnos de que no haya repeticiones o elementos viejos.

- favoriteMovies.forEach(movie => {...}): Recorremos todas las películas que están en la lista de favoritas (favoriteMovies) y las mostramos en la página.

- favoritesCount.textContent = favoriteMovies.length: Finalmente, actualizamos el contador de "Favoritas", que es el número total de películas que se han agregado a la lista.

5. Cargar el menú cuando la página se carga
Para que todo esto funcione, necesitamos cargar las películas cuando la página se ha cargado. Esto lo logramos con el evento window.onload:

```js
window.onload = loadMovies;
``` 

- window.onload: Este evento se ejecuta cuando toda la página (incluyendo el HTML, CSS y JavaScript) ha sido completamente cargada. Al momento de cargar la página, se ejecuta la función loadMovies, que se encarga de cargar las películas desde el archivo data.json.

Resumen
- Recuperamos los datos de un archivo JSON utilizando fetch y los convertimos en objetos JavaScript.
- Mostramos las películas en la página utilizando innerHTML y las mostramos dinámicamente.
- Permites que el usuario agregue películas a una lista de favoritas, asegurándote de que no se repitan.
- Actualizas la interfaz de la lista de favoritas y el contador de favoritas cuando el usuario agrega una película.
- Cuando la página se carga, todo el proceso comienza con window.onload, que llama a loadMovies para obtener y mostrar las películas.