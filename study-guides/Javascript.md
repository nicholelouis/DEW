# Guia de Resolucion de Ejercicios Javascript

1. Comprender el Requerimiento del Proyecto
Antes de escribir cualquier línea de código, asegúrate de entender bien el objetivo de la app. Pregunta si no tienes claro algo o haz una lista de las funciones que necesitas implementar.

Ejemplos de mini proyectos:
- To-Do List: una app donde puedes agregar, eliminar y marcar tareas como completadas.
- Calculadora: una calculadora básica con operaciones aritméticas.
- Juego de adivinanza de números: una app que genere un número aleatorio y pida al usuario que lo adivine.
- Conversor de unidades: por ejemplo, de kilómetros a millas.

2. Organización y Estructura del Proyecto
Crea los archivos iniciales de tu proyecto:

- index.html (para el HTML de la app)
- styles.css (para los estilos en CSS)
- script.js (para la lógica en JavaScript)

**Asegúrate de enlazar correctamente los archivos CSS y JS en tu archivo HTML:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto de JavaScript</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

3. Estructura HTML Básica
Define el HTML con los elementos básicos de tu app, según el tipo de proyecto. Ejemplo:
Para una To-Do List:

```html
<h1>Lista de Tareas</h1>
<input type="text" id="new-task" placeholder="Nueva tarea...">
<button id="add-task-btn">Agregar</button>
<ul id="task-list"></ul>
```
**Asegúrate de usar IDs y clases para facilitar la manipulación con JavaScript.**

4. Interactividad con JavaScript
Selecciona los elementos HTML que necesitas manipular usando **document.getElementById** o **document.querySelector.**

- Añade los eventos necesarios a los elementos interactivos. Ejemplo:

Al hacer clic en el botón “Agregar” se debe llamar una función que añada una nueva tarea.
Lógica del proyecto: define y organiza el código según la funcionalidad principal. Aquí hay una lista de 

- las tareas comunes que puedes necesitar:
    - Captura de datos del usuario: por ejemplo, al agregar un nuevo elemento en la lista de tareas.
    - Manipulación del DOM: agregar, modificar o eliminar elementos HTML dinámicamente.
    - Validación básica: comprobar que el usuario haya ingresado un valor antes de realizar una acción.
    - Actualizar el contenido en tiempo real, por ejemplo, al completar o eliminar una tarea.

Ejemplo de JavaScript para una To-Do List:
```javascript
// Selecciona los elementos
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Añadir evento al botón
addTaskButton.addEventListener('click', addTask);

function addTask() {
    // Obtener el valor del input
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Validación
    
    // Crear un nuevo elemento de tarea
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    
    // Añadir la tarea a la lista
    taskList.appendChild(listItem);
    
    // Limpiar el input
    taskInput.value = "";
}
```

6. Mejorar la Experiencia del Usuario (Opcional)
Puedes agregar características como:

- Confirmación de eliminación: usa confirm() antes de eliminar un elemento.
- Feedback visual: cambia el color del fondo de la tarea cuando esté completada.
- Persistencia de datos: guarda la lista de tareas en el localStorage para que persista al recargar la página.

Ejemplo de uso de localStorage:

```javascript
// Guardar tareas
localStorage.setItem('tasks', JSON.stringify(tasksArray));

// Recuperar tareas
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
```

7. Pruebas y Debugging
Prueba tu aplicación en cada paso. Esto te permite identificar errores o problemas antes de que el código se vuelva demasiado complejo.

- Usa **console.log()** para ver el flujo de datos y asegurarte de que tus funciones funcionen como esperas.

Revisa errores de sintaxis en la consola del navegador y corrígelos de inmediato.

8. Refactorización (Opcional)

Una vez que todo esté funcionando, revisa tu código para ver si puedes simplificar o reutilizar alguna parte.

Busca fragmentos repetidos y considera moverlos a funciones separadas.

9. Últimos Toques y Entrega

Asegúrate de que la app esté bien estructurada y que todo funcione según lo planeado.
Verifica que has usado nombres de variables y funciones claros y descriptivos.
Ejemplo de Proyecto Completado: To-Do List

- HTML: Estructura con input y lista de tareas.
- CSS: Estilo de lista y diseño básico.
- JavaScript: Agregar, eliminar y marcar tareas como completadas, con persistencia en localStorage.

## Funciones y Métodos

| Función/Método                | Descripción                                                                                          |
|-------------------------------|------------------------------------------------------------------------------------------------------|
| `document.getElementById`      | Selecciona un elemento del DOM por su ID, devolviendo una referencia al elemento.                    |
| `document.querySelector`       | Selecciona el primer elemento que coincida con un selector CSS.                                      |
| `document.querySelectorAll`    | Selecciona todos los elementos que coincidan con un selector CSS, devolviendo una lista de nodos.    |
| `element.addEventListener`     | Añade un evento a un elemento, por ejemplo, "click", "submit", etc., junto con una función manejadora.|
| `element.appendChild`          | Añade un elemento hijo al final de otro elemento.                                                    |
| `element.removeChild`          | Elimina un elemento hijo del DOM desde el elemento padre.                                            |
| `element.innerHTML`            | Establece o devuelve el contenido HTML de un elemento.                                               |
| `element.textContent`          | Establece o devuelve el texto de un elemento sin formato HTML.                                       |
| `element.classList.add`        | Añade una clase CSS al elemento, útil para aplicar estilos específicos.                              |
| `element.classList.remove`     | Elimina una clase CSS del elemento.                                                                  |
| `element.classList.toggle`     | Añade o elimina una clase, dependiendo de si está presente o no en el elemento.                     |
| `localStorage.setItem`         | Almacena un dato en `localStorage` en formato clave-valor. Los datos persisten entre sesiones.      |
| `localStorage.getItem`         | Recupera un dato almacenado en `localStorage` por su clave.                                         |
| `localStorage.removeItem`      | Elimina un dato almacenado en `localStorage` por su clave.                                          |
| `JSON.stringify`               | Convierte un objeto de JavaScript a una cadena de texto JSON para almacenarlo (p. ej., en `localStorage`). |
| `JSON.parse`                   | Convierte una cadena JSON en un objeto JavaScript para su manipulación.                             |
| `console.log`                  | Imprime información en la consola del navegador para fines de depuración.                           |
| `setTimeout`                   | Ejecuta una función después de un tiempo específico (en milisegundos).                              |
| `setInterval`                  | Ejecuta una función repetidamente, cada cierto intervalo de tiempo.                                 |
| `Math.random`                  | Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).                             |
| `Math.floor`                   | Redondea un número decimal hacia abajo, devolviendo un número entero.                               |
| `alert`                        | Muestra una ventana emergente de alerta al usuario.                                                 |
| `prompt`                       | Muestra una ventana emergente que solicita una entrada del usuario y devuelve el texto ingresado.   |
| `confirm`                      | Muestra una ventana emergente que solicita una confirmación del usuario y devuelve `true` o `false`.|
