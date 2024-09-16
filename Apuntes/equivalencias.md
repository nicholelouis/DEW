# Equivalencias Python -> JavaScript

| **Concepto**                | **Python**                                                                 | **JavaScript**                                                             |
|-----------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Variables**                | `x = 5`                                                                   | `let x = 5;`                                                              |
|                             | `nombre = "Hola"`                                                         | `const nombre = "Hola";`                                                  |
| **Funciones**                | `def saludar():`                                                          | `function saludar() {`                                                    |
|                             | `    return "Hola"`                                                       | `    return "Hola"; }`                                                    |
| **Condicionales**            | `if x > 5:`                                                               | `if (x > 5) {`                                                            |
|                             | `elif x == 5:`                                                            | `} else if (x === 5) {`                                                   |
|                             | `else:`                                                                   | `} else {`                                                                |
| **Ciclos (Loops)**           | `for i in range(5):`                                                      | `for (let i = 0; i < 5; i++) {`                                           |
|                             | `    print(i)`                                                            | `    console.log(i); }`                                                   |
| **Listas (Arreglos)**        | `mi_lista = [1, 2, 3]`                                                    | `let mi_lista = [1, 2, 3];`                                               |
|                             | `mi_lista.append(4)`                                                      | `mi_lista.push(4);`                                                       |
| **Diccionarios (Objetos)**   | `persona = {"nombre": "Juan", "edad": 30}`                                | `let persona = {nombre: "Juan", edad: 30};`                               |
|                             | `persona["nombre"]`                                                       | `persona.nombre`                                                          |
| **List Comprehension**       | `cuadrados = [x**2 for x in range(5)]`                                    | `let cuadrados = Array.from({length: 5}, (_, x) => x ** 2);`              |
| **Manejo de Excepciones**    | `try:`                                                                    | `try {`                                                                   |
|                             | `except ZeroDivisionError:`                                               | `} catch (error) {`                                                       |
| **Clases y Objetos (POO)**   | `class Persona:`                                                          | `class Persona {`                                                         |
|                             | `    def __init__(self, nombre, edad):`                                    | `    constructor(nombre, edad) {`                                         |
|                             | `    def saludar(self):`                                                  | `    saludar() {`                                                         |
| **Funciones Lambda**         | `suma = lambda x, y: x + y`                                               | `const suma = (x, y) => x + y;`                                           |
| **Importación de Módulos**   | `import math`                                                            | `import { sqrt } from 'math';`                                            |
| **Map, Filter, Reduce**      | `cuadrados = list(map(lambda x: x**2, numeros))`                          | `let cuadrados = numeros.map(x => x ** 2);`                               |
|                             | `pares = list(filter(lambda x: x % 2 == 0, numeros))`                      | `let pares = numeros.filter(x => x % 2 === 0);`                           |
| **Async/Await**              | `async def obtener_datos():`                                              | `async function obtenerDatos() {`                                         |
|                             | `    datos = await alguna_funcion_async()`                                | `    let datos = await algunaFuncionAsync();`                             |
| **Entrada y Salida**         | `nombre = input("Introduce tu nombre: ")`                                 | `let nombre = prompt("Introduce tu nombre:");`                            |
|                             | `print(f"Hola, {nombre}")`                                                | `console.log(\`Hola, ${nombre}\`);`                                       |
| **Comentarios**              | `# Este es un comentario`                                                 | `// Este es un comentario`                                                |
|                             |                                                                            | `/* Este es un comentario de varias líneas */`                            |
