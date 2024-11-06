# Conceptos básicos

| Concepto               | Descripción | Ejemplo de Código |
|------------------------|-------------|--------------------|
| **Bucle `for`**        | Recorre una secuencia de valores un número determinado de veces. | ```javascript\nfor (let i = 0; i < 5; i++) {\n    console.log(i);\n}\n``` |
| **Bucle `while`**      | Ejecuta un bloque de código mientras se cumpla una condición. | ```javascript\nlet i = 0;\nwhile (i < 5) {\n    console.log(i);\n    i++;\n}\n``` |
| **Bucle `for...of`**   | Recorre elementos de un array o iterable, como un `string`. | ```javascript\nconst array = [1, 2, 3];\nfor (const num of array) {\n    console.log(num);\n}\n``` |
| **Bucle `for...in`**   | Recorre propiedades de un objeto (ideal para iterar sobre objetos). | ```javascript\nconst obj = {a: 1, b: 2};\nfor (const key in obj) {\n    console.log(key, obj[key]);\n}\n``` |
| **Objeto**             | Colección de pares clave-valor que representa una entidad. | ```javascript\nconst persona = {\n    nombre: "Ana",\n    edad: 25\n};\n``` |
| **Acceder a un Objeto**| Accede a valores en un objeto mediante `.` o `[]`. | ```javascript\nconsole.log(persona.nombre); // "Ana"\nconsole.log(persona["edad"]); // 25\n``` |
| **Modificar un Objeto**| Cambia valores o añade propiedades a un objeto existente. | ```javascript\npersona.edad = 26;\npersona.pais = "México";\n``` |
| **Función**            | Bloque de código reutilizable. Puede tener parámetros y devolver un valor. | ```javascript\nfunction saludar(nombre) {\n    return `Hola, ${nombre}`;\n}\nconsole.log(saludar("Ana"));\n``` |
| **Función Flecha**     | Función corta usando `=>`. Ideal para funciones rápidas. | ```javascript\nconst saludar = nombre => `Hola, ${nombre}`;\nconsole.log(saludar("Ana"));\n``` |
| **Array**              | Colección ordenada de elementos, accedidos por índice. | ```javascript\nconst frutas = ["manzana", "plátano", "cereza"];\n``` |
| **Acceder a un Array** | Accede a elementos por índice. | ```javascript\nconsole.log(frutas[0]); // "manzana"\n``` |
| **Modificar un Array** | Cambia elementos, añade o elimina usando métodos. | ```javascript\nfrutas.push("naranja");\nfrutas[1] = "fresa";\n``` |
| **Método `.push()`**   | Añade uno o más elementos al final del array. | ```javascript\nfrutas.push("uva");\n``` |
| **Método `.pop()`**    | Elimina el último elemento del array. | ```javascript\nfrutas.pop();\n``` |
| **Método `.shift()`**  | Elimina el primer elemento del array. | ```javascript\nfrutas.shift();\n``` |
| **Método `.unshift()`**| Añade uno o más elementos al inicio del array. | ```javascript\nfrutas.unshift("sandía");\n``` |
| **Condicional `if`**   | Ejecuta código si se cumple una condición. | ```javascript\nif (frutas.length > 0) {\n    console.log("Hay frutas disponibles");\n}\n``` |
| **Condicional `if...else`** | Ejecuta un bloque si se cumple una condición, otro bloque si no se cumple. | ```javascript\nif (frutas.length > 0) {\n    console.log("Hay frutas");\n} else {\n    console.log("No hay frutas");\n}\n``` |
| **Operador Ternario**  | Forma breve de un `if...else`. | ```javascript\nconst mensaje = frutas.length > 0 ? "Hay frutas" : "No hay frutas";\n``` |
| **`switch`**           | Ejecuta bloques de código según el valor de una variable. | ```javascript\nconst fruta = "manzana";\nswitch (fruta) {\n    case "manzana":\n        console.log("Es una manzana");\n        break;\n    case "plátano":\n        console.log("Es un plátano");\n        break;\n    default:\n        console.log("Fruta desconocida");\n}\n``` |
| **`try...catch`**      | Maneja errores para evitar que el código se detenga. | ```javascript\ntry {\n    let resultado = dividir(10, 0);\n} catch (error) {\n    console.error("Ocurrió un error:", error.message);\n}\n``` |
| **`setTimeout`**       | Ejecuta código después de un tiempo especificado (ms). | ```javascript\nsetTimeout(() => {\n    console.log("Han pasado 2 segundos");\n}, 2000);\n``` |
| **`setInterval`**      | Ejecuta código repetidamente cada intervalo especificado (ms). | ```javascript\nsetInterval(() => {\n    console.log("Cada segundo");\n}, 1000);\n``` |
| **JSON.stringify**     | Convierte un objeto o array en un texto JSON. Ideal para `localStorage`. | ```javascript\nconst obj = {nombre: "Ana"};\nconst json = JSON.stringify(obj);\n``` |
| **JSON.parse**         | Convierte una cadena JSON en un objeto o array de JavaScript. | ```javascript\nconst obj = JSON.parse(json);\n``` |
| **`localStorage.setItem`** | Guarda un dato en `localStorage` con una clave. Persiste incluso al cerrar el navegador. | ```javascript\nlocalStorage.setItem("nombre", "Ana");\n``` |
| **`localStorage.getItem`** | Recupera un dato de `localStorage` por su clave. | ```javascript\nconst nombre = localStorage.getItem("nombre");\n``` |
| **`localStorage.removeItem`** | Elimina un dato de `localStorage` por su clave. | ```javascript\nlocalStorage.removeItem("nombre");\n``` |



1. Bucle for
Un bucle for recorre una secuencia de valores un número determinado de veces.

```js
for (let i = 0; i < 5; i++) {
    console.log(i); // Imprime 0, 1, 2, 3, 4
}
```

2. Bucle while
El bucle while ejecuta un bloque de código mientras se cumpla una condición.

```js
let i = 0;
while (i < 5) {
    console.log(i); // Imprime 0, 1, 2, 3, 4
    i++;
}
```

3. Bucle for...of
El bucle for...of recorre elementos de un array o de un iterable, como un string.

```js
const array = [1, 2, 3];
for (const num of array) {
    console.log(num); // Imprime 1, 2, 3
}
```

4. Bucle for...in
El bucle for...in recorre propiedades de un objeto.

```js
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key, obj[key]); // Imprime 'a 1' y 'b 2'
}
```

5. Objeto
Un objeto es una colección de pares clave-valor que representa una entidad.

```js
const persona = {
    nombre: "Ana",
    edad: 25
};
```

6. Acceder a un Objeto
Puedes acceder a valores en un objeto mediante el operador . o [].

```js
console.log(persona.nombre);    // "Ana"
console.log(persona["edad"]);   // 25
```

7. Modificar un Objeto
Para cambiar valores o añadir propiedades en un objeto existente.

```js
persona.edad = 26;
persona.pais = "México";
console.log(persona); // {nombre: "Ana", edad: 26, pais: "México"}
```

8. Función
Una función es un bloque de código reutilizable. Puede tener parámetros y devolver un valor.

```js
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar("Ana")); // "Hola, Ana"
```

9. Función Flecha
Las funciones flecha permiten una sintaxis corta usando =>.

```js
const saludar = nombre => `Hola, ${nombre}`;
console.log(saludar("Ana")); // "Hola, Ana"
```

10. Array
Un array es una colección ordenada de elementos, accedidos por índice.

```js
const frutas = ["manzana", "plátano", "cereza"];
```

11. Acceder a un Array
Para acceder a un elemento del array por índice.

```js
console.log(frutas[0]); // "manzana"
```

12. Modificar un Array
Puedes cambiar elementos o añadir/eliminar usando varios métodos.

```js
frutas.push("naranja");   // Añade "naranja" al final
frutas[1] = "fresa";      // Cambia "plátano" a "fresa"
```

13. Método .push()
El método push() añade uno o más elementos al final del array.

```js
frutas.push("uva");
console.log(frutas); // ["manzana", "fresa", "cereza", "naranja", "uva"]
```

14. Método .pop()
El método pop() elimina el último elemento del array.

```js
frutas.pop();
console.log(frutas); // ["manzana", "fresa", "cereza", "naranja"]
```

15. Método .shift()
El método shift() elimina el primer elemento del array.

```js
frutas.shift();
console.log(frutas); // ["fresa", "cereza", "naranja"]
```

16. Método .unshift()
El método unshift() añade uno o más elementos al inicio del array.

```js
frutas.unshift("sandía");
console.log(frutas); // ["sandía", "fresa", "cereza", "naranja"]
```

17. Condicional if
La estructura if ejecuta código solo si se cumple una condición.

```js
if (frutas.length > 0) {
    console.log("Hay frutas disponibles");
}
```

18. Condicional if...else
El condicional if...else ejecuta un bloque si se cumple la condición y otro si no se cumple.

```js
if (frutas.length > 0) {
    console.log("Hay frutas");
} else {
    console.log("No hay frutas");
}
``` 

19. Operador Ternario
El operador ternario es una forma breve de if...else.

```js
const mensaje = frutas.length > 0 ? "Hay frutas" : "No hay frutas";
console.log(mensaje);
```

20. switch
La estructura switch ejecuta bloques de código según el valor de una variable.

```js
const fruta = "manzana";
switch (fruta) {
    case "manzana":
        console.log("Es una manzana");
        break;
    case "plátano":
        console.log("Es un plátano");
        break;
    default:
        console.log("Fruta desconocida");
}
```

21. try...catch
try...catch maneja errores para evitar que el código se detenga si ocurre uno.

```js
try {
    let resultado = dividir(10, 0);
} catch (error) {
    console.error("Ocurrió un error:", error.message);
}
``` 

22. setTimeout
setTimeout ejecuta código después de un tiempo especificado (en milisegundos).

```js
setTimeout(() => {
    console.log("Han pasado 2 segundos");
}, 2000);
```

23. setInterval
setInterval ejecuta código repetidamente en intervalos específicos (en milisegundos).

```js
setInterval(() => {
    console.log("Cada segundo");
}, 1000);
```

24. JSON.stringify
JSON.stringify convierte un objeto o array en una cadena JSON. Es útil para almacenar en localStorage.

```js
const obj = { nombre: "Ana" };
const json = JSON.stringify(obj);
console.log(json); // '{"nombre":"Ana"}'
```

25. JSON.parse
JSON.parse convierte una cadena JSON en un objeto o array de JavaScript.

```js
const obj = JSON.parse(json);
console.log(obj); // { nombre: "Ana" }
```

26. localStorage.setItem
localStorage.setItem guarda un dato en localStorage con una clave. Este dato persiste incluso si cierras el navegador.

```js
localStorage.setItem("nombre", "Ana");
```

27. localStorage.getItem
localStorage.getItem recupera un dato de localStorage por su clave.

```js
const nombre = localStorage.getItem("nombre");
console.log(nombre); // "Ana"
```

28. localStorage.removeItem
localStorage.removeItem elimina un dato de localStorage por su clave.

```js
localStorage.removeItem("nombre");
```