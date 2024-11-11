
# Jquery

## Selectores y atributos

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Selectores en jQuery</title>
    <style>
        div, p, h2, span, form, input, button {
            margin: 5px;
            padding: 5px;
            border: 1px solid black;
        }
        .highlight {
            background-color: yellow;
        }
    </style>
    <!-- Incluimos la librería de jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

    <div id="contenedor">
        <h2>Encabezado dentro del div</h2>
        <p>Primer párrafo dentro del div</p>
        <p>Segundo párrafo dentro del div</p>
        <div class="subcontenedor">
            <p>Hijo directo de subcontenedor</p>
            <span>Elemento span dentro de subcontenedor</span>
        </div>
        <p>Otro párrafo en el div principal</p>
        <h2>Otro encabezado dentro del div</h2>
        <p>Párrafo después del segundo h2</p>
    </div>

    <form>
        <input type="text" value="Texto de ejemplo">
        <input type="password" value="password">
        <input type="radio" name="radio">
        <input type="checkbox" checked>
        <input type="submit" value="Enviar">
        <input type="reset" value="Restablecer">
        <button type="button">Botón</button>
        <input type="file">
        <input type="image" src="https://via.placeholder.com/50" alt="Imagen de ejemplo">
        <select>
            <option>Opción 1</option>
            <option selected>Opción 2</option>
            <option>Opción 3</option>
        </select>
    </form>

    <p class="empty"></p>
    <p>No contiene el texto buscado</p>
    <p>Este párrafo contiene la palabra 'jQuery'.</p>
    <p style="display: none;">Este párrafo está oculto.</p>
    <p></p>

    <script>
        // Selectores de jerarquía
        $('#contenedor > p').css('color', 'blue'); // Cambiar el color de la letra a todos los hijos DIRECTOS del div #contenedor
        $('#contenedor p').css('background-color', 'lightgreen') // color de fondo de todos los hijos DIRECTOS y ANIDADOS del div #contenedor
        $('h2 + p').css('color', 'red') // el hermado (p) que le sigue al h2 (inmediato)
        $('h2 ~ p').css('border', "2px dashed purple") // Todos los hermanos (p) que le siguen a cada h2

        // Selectores de filtros
        $("p:first").addClass("highlight") // selecciona el primer p que encuentra y le añade la clase "highlight" que le agtega un estilo
        $("p:last").css('background-color', 'red') // seleciona el ultimo p
        $("p:even").css('background-color', 'lightblue') // selecciona los p pares
        $("p:odd").css('background-color', 'lightcoral') //Seleciona los p impares
        $("p:eq(2)").css("font-weight", "bold") // p con indice 2 (Empieza desde 0)
        $("p:gt(2)").css("border", "5px solid gray") // p con indice mayores que 2
        $("p:lt(2)").css("border", "5px solid yellow") // p con indice menores que 2
        $("p:not(.highlight)").css("font-style", "italic") // P que no tienen la clase highligth

        // Selectores de contenido
        $('p:contains("jQuery")').css("color", "blue"); // p que contiene la palabra
        $("div:has(span)").css("border", "3px solid red") // div que contiene un span
        $("p:empty").css("background-color", "lightgray") // parrafos vacios
        $("div:parent").css("padding", "10px") // div que tienen hijos

        // Selectores de visibilidad
        $(':hidden').show().css("background-color", "pink") // Muestra los elementos ocultos y les cambia en bg a pink
        $(':visible').css("border", "2px solid green") // Elementos visibles le cambiamos el borde a verde

        // Selectores de formularios
        $(':input').css("margin", "5px") // todos los elemntos de entrada de formularios
        $(':text').css("background-color", "lightyellow") // campos de entradas de texto bg amarillo
        $(':password').css("background-color", "lightblue") // campos de entradas de contraseñas
        $(':radio').parent().css("background-color", "lightgreen") // radio buttons
        $(":checkbox").parent().css("background-color", "lightpink") // checkbox
        $(":submit").css("border", "2px solid blue"); // Boton de submit
        $(":reset").css("border", "2px solid red") // Boton de resetear
        $(":button").css("background-color", "orange") // botones
        $(":file").css("background-color", "red") // elementos de archivos
        $(":image").css("border", "2px solid purple") // Elementos de imagenes
        $(":enabled").css("opacity", "1") // elemntos habilitados
        $(":disabled").css("opacity", "0.5") // elemntos deshabilitados
        $(":selected").css("color", "plum") // elemntos seleccionados en un menú desplegrable
        $(":checked").css("outline", "2px solid green") // elemntos chequeados
        
    </script>
</body>
</html>
```

## EventosEfectos

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Manipulación y Eventos en jQuery</title>
    <style>
        .highlight { background-color: yellow; }
        .active { font-weight: bold; color: red; }
        .box { padding: 10px; border: 1px solid black; margin: 10px; }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

    <h1>Manipulación del DOM y Eventos en jQuery</h1>

    <!-- Ejemplo de Modificación de Atributos y Contenido -->
    <a id="link" href="https://www.openai.com">Enlace a OpenAI</a>
    <div id="contentDiv">
        <p>Contenido de prueba en el div.</p>
    </div>
    <button id="changeAttributes">Cambiar Atributos y Contenido</button>

    <!-- Ejemplo de Manipulación de Clases CSS -->
    <div id="miDiv" class="box">Este es un div con clases CSS</div>
    <button id="toggleClass">Alternar Clase</button>

    <!-- Ejemplo de Inserción de Elementos en el DOM -->
    <ul id="lista">
        <li>Elemento existente</li>
    </ul>
    <button id="addElements">Agregar Elementos</button>

    <!-- Ejemplo de Eliminación de Elementos -->
    <div id="contenedor" class="box">Este es un contenedor con varios hijos</div>
    <button id="removeContent">Eliminar Contenido</button>
    <button id="removeContainer">Eliminar Contenedor</button>

    <!-- Ejemplo de Eventos Comunes -->
    <input type="text" id="inputField" placeholder="Escribe algo aquí">
    <button id="submitButton">Enviar</button>

    <!-- Ejemplo de Efectos de Animación -->
    <div id="animatedDiv" class="box">Div con efectos de animación</div>
    <button id="toggleEffects">Alternar Efectos</button>

    <script>
            $(document).ready(function(){
                // Modificaatributos y contenido
                $("#changeAttributes").click(function() {
                $("#link").attr("href", "https://www.google.com").text("Enlace a Google");
                $("#contentDiv").html("<strong>Contenido actualizado</strong> en el div");
                });

                // Manejo de clases con CSS Cada vez que le doy click 'pone y quita' la clase
                $('#toggleClass').click(function(){
                    $("#miDiv").toggleClass('highlight')
                });
            
                // Insersión de elemntos en el DOM
                $('#addElements').click(function(){
                    $("#lista").append("<li>Nuevo elemento al final</li>");
                    $("#lista").prepend("<li>Nuevo elemento al inicio</li>");
                    $("#toggleClass").after("<span> Texto después del botón</span>");
                    $("#toggleClass").before("<span>Texto antes del botón </span>");
                });

                // Eliminación de elementos
                $("#removeContent").click(function() {
                $("#contenedor").empty(); // Elimina el contenido dentro del contenedor
                });

                $("#removeContainer").click(function() {
                $("#contenedor").remove(); // Elimina el contenedor completo
                });

                // Eventos Comunes
                $("#inputField").focus(function() {
                $(this).css("background-color", "lightblue"); // cuando el foco esta en el input se bg azul y cuando no se quita el bg
                }).blur(function() { // blur ews lo contrario a focus
                    $(this).css("background-color", "");
                });

                $("#inputField").change(function() { // cuando el contenido cambia lanza una alerta
                alert("¡El contenido del campo de texto ha cambiado!"); 
                });

                $("#submitButton").click(function() { 
                alert("¡Formulario enviado!"); // en el click lanza una alerta
                });

                $("#inputField").keydown(function() {
                console.log("Tecla presionada"); // salida por consola cuando dentro del campo de input presionas cualuiqer tecla
                });

                $("#inputField").keyup(function() {
                console.log("Tecla liberada"); // salida por consola cuando dentro del campo de input dejas de presionar cualuiqer tecla
                });

                // Efectos de animación
                $("#toggleEffects").click(function() { // cuando click en el boton se aplica una animacion al div mencionado
                $("#animatedDiv").fadeToggle().slideToggle();
                });
            })
    </script>

</body>
</html>
```

## Delegración de eventos

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de jQuery: Delegación de eventos, AJAX y FileReader</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>

    <h2>Delegación de Eventos</h2>
    <button id="agregarElemento">Agregar Elemento a la Lista</button>
    <ul id="listaDinamica"></ul>

    <h2>AJAX: Cargar datos de un servidor</h2>
    <button id="cargarDatos">Cargar Datos</button>
    <div id="resultadoAjax"></div>
    <div id="cargando" style="display:none;">Cargando...</div>

    <h2>Leer un archivo JSON local</h2>
    <input type="file" id="archivoJson" accept=".json">
    <button id="leerJson">Leer archivo JSON</button>
    <div id="resultadoJson"></div>

    <script>
        $(document).ready(function() {
            // Delegación de eventos

                // En el click agrega un elemento li a la lista lu
            $('#agregarElemento').click(function(){
                $('#listaDinamica').append('<li>Elemento Nuevo</li>');
            });

                /* Cuando le damos click a cualquiera de los elementos creados en la funcion anterior
                salta una alerta */
            $('#listaDinamica').on('click', 'li', function() {
                alert("Elemento clicado: " + $(this).text());
            });

            // Encadenamineto de métodos

                /* Cuando le damos click al boton  vacia el div e introduce
                 la frase preparando solicitud con su css */
            $("#cargarDatos").click(function() {
                $("#resultadoAjax").empty().css("color", "blue").text("Preparando solicitud...");
            });

            // Ajax con manejo de errores
                /*
                */
                ('#cargarDatos').click(function() { // añadimos el eventro click
                $.ajax({ // función de jQuery que se utiliza para realizar solicitudes AJAX, es decir, para enviar y recibir datos del servidor de forma asíncrona sin tener que recargar la página.
                    url: 'https://jsonplaceholder.typicode.com/posts/1', // url o la ruta
                    type: 'GET', // configuraciones necesarias de ajax
                    dataType: 'json', 
                    beforeSend: function() { // es una función de callback que se ejecuta antes de que se realice la solicitud.
                        $('#cargando').show(); // muestra un elemento con el ID #cargando, que probablemente es un indicador de carga 
                    },
                    success: function(response) { // Esta función se ejecuta si la solicitud es exitosa  // El responde es el objeto que recibimos del servidor (en este caso, un objeto JSON
                        $('#resultadoAjax').html(
                            "<p>Título: " + response.title + "</p>" + // ara insertar el título y el cuerpo de la publicación en el elemento con el ID
                            "<p>Cuerpo: " + response.body + "</p>"
                        );
                    },
                    error: function(xhr, status, error) { // Si ocurre un error durante la solicitud
                        $('#resultadoAjax').text('Error en la solicitud: ' + error); // muestra un mensaje de error en el elemento #resultadoAjax
                    },
                    complete: function() { // se ejecuta después de que la solicitud se haya completado
                        $('#cargando').hide(); // oculta el indicador de carga
                    }
                });
            });

        })
    </script>
</body>
</html>
```

# TypeScript

## Ejercicios del examen pasado en typescript

### script
```ts
$(document).ready(() => {
    // EJERCICIO 1:
  
    // Referencias a los elementos principales
    const animalOptions = $("#animal-options"); // Primer nivel
    const breedOptions = $("#breed-options"); // Segundo nivel dinámico
    const resultDisplay1 = $("#result-display1"); // Área de texto del Ejercicio 1
    
    // Limpia las opciones y el resultado cada vez que se selecciona un nuevo animal en el primer nivel
    animalOptions.on("change", () => {
      const selectedAnimal = $("input[name='animal']:checked").val();
      breedOptions.empty(); // Limpia las opciones de raza
      resultDisplay1.empty(); // Limpia el área de resultados
      
      // Crea opciones de raza basadas en la elección de animal
      if (selectedAnimal === "perros") {
        createBreedOptions(["Chihuahua", "Pastor Alemán", "Mastín"]);
      } else if (selectedAnimal === "gatos") {
        createBreedOptions(["Persa", "Angora", "Siamés"]);
      }
    });
    
    // Función para crear opciones de raza
    function createBreedOptions(breeds: string[]): void {
      breeds.forEach(breed => {
        const checkbox = $("<input>").attr({
          type: "checkbox",
          value: breed.substring(0, 3).toLowerCase(),
          name: "breed"
        });
        const label = $("<label>").text(breed);
        
        // Añade checkbox y etiqueta al DOM
        breedOptions.append(checkbox).append(label).append("<br>");
        
        // Maneja el evento de cambio para cada checkbox
        checkbox.on("change", () => updateSelectedBreeds());
      });
    }
    
    // Función para actualizar y mostrar las razas seleccionadas
    function updateSelectedBreeds(): void {
      const selectedBreeds = $("input[name='breed']:checked")
        .map((_, elem) => $(elem).next("label").text())
        .get();
      resultDisplay1.text(selectedBreeds.join(", "));
    }
  
  
    // EJERCICIO 2:
  
    function json2sessionStorage(json: { [key: string]: any }, move: boolean = false): void {
        // Recorre cada clave-valor en el JSON
        for (let key in json) {
          if (json.hasOwnProperty(key)) {
            sessionStorage.setItem(key, JSON.stringify(json[key])); // Guarda en sessionStorage
            
            // Si `move` es true, elimina el valor del JSON original
            if (move) {
              delete json[key];
            }
          }
        }
      }
      
      function sessionStorage2json(json: { [key: string]: any }, move: boolean = false): void {
        // Recorre cada clave en sessionStorage
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i) as string;
          json[key] = JSON.parse(sessionStorage.getItem(key) as string); // Copia a JSON
          
          // Si `move` es true, elimina el valor de sessionStorage
          if (move) {
            sessionStorage.removeItem(key);
          }
        }
      }
  
    // EJERCICIO 3
  
    const input = $("#input-count");
    const btnLanzar = $("#btn-lanzar");
    const btnParar = $("#btn-parar").prop("disabled", true);
    const resultDisplay2 = $("#result-display2"); // Cambiado a un ID único para el Ejercicio 3
  
    // Se define timer con el tipo correcto
    let timer: ReturnType<typeof setInterval>;
  
    // Función de lanzar dados
    function lanzarDados() {
      let n = parseInt(input.val() as string);
      
      // Validación del valor de entrada usando expresión regular
      if (!/^(0|[1-9]|1[0-9]|20)$/.test(input.val() as string)) {
        alert("Introduce un número entre 0 y 20.");
        return;
      }
      
      // Bloquear entrada y botones
      input.prop("disabled", true);
      btnLanzar.prop("disabled", true);
      btnParar.prop("disabled", false);
      
      resultDisplay2.text("Lanzando...");
      
      // Inicializa el intervalo para lanzar los dados cada 10 segundos
      timer = setInterval(() => {
        if (n <= 0) {
          detenerDados();
          resultDisplay2.text("Ya no hay más tiradas.");
          return;
        }
        
        // Genera un número aleatorio entre 1 y 6 (simula una tirada de dado)
        const tirada = Math.floor(Math.random() * 6) + 1;
        resultDisplay2.text(`El valor obtenido al lanzar es ${tirada}, quedan ${--n} tiradas.`);
        input.val(n.toString());
      }, 10000);
    }
  
    // Función para detener los lanzamientos
    function detenerDados() {
      clearInterval(timer); // Detiene el intervalo
      btnLanzar.prop("disabled", false); // Habilita el botón "Lanzar"
      btnParar.prop("disabled", true); // Deshabilita el botón "Parar"
      input.prop("disabled", false); // Habilita la entrada
      resultDisplay2.text(""); // Limpia el área de resultados
    }
  
    // Asignar eventos a los botones
    btnLanzar.on("click", lanzarDados);
    btnParar.on("click", detenerDados);
  });
```

### HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Examen Práctico: jQuery + TypeScript</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/typescript@4.4.4/lib/typescript.js"></script>
  <script src="path/to/your/typescript/file.js"></script>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .section { margin-bottom: 20px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
    .section h2 { margin-top: 0; }
  </style>
</head>
<body>

  <!-- Ejercicio 1: Sistema de Elección Anidado -->
  <div class="section" id="ejercicio1">
    <h2>Ejercicio 1: Sistema de Elección Anidado</h2>
    
    <!-- Primer Nivel de Selección -->
    <div id="animal-options">
      <label><input type="radio" name="animal" value="elija"> Elija Animal</label>
      <label><input type="radio" name="animal" value="perros"> Perros</label>
      <label><input type="radio" name="animal" value="gatos"> Gatos</label>
    </div>
    
    <!-- Segundo Nivel de Selección Dinámico -->
    <div id="breed-options" style="margin-top: 10px;"></div>
    
    <!-- Área para Mostrar Texto -->
    <div id="result-display1" style="margin-top: 10px; font-weight: bold;"></div>
  </div>

  <!-- Ejercicio 2: Transferencia de JSON a sessionStorage -->
  <div class="section" id="ejercicio2">
    <h2>Ejercicio 2: Transferencia entre JSON y sessionStorage</h2>
    
    <!-- Datos de Prueba en JSON -->
    <p>Datos de prueba JSON:</p>
    <pre id="json-data">{ "nombre": "Juan", "edad": 25, "ciudad": "Madrid" }</pre>
    
    <!-- Botones de Acción -->
    <button id="btn-json2sessionStorage" onclick="json2sessionStorage(testData, false)">Copiar JSON a sessionStorage</button>
    <button id="btn-json2sessionStorage-move" onclick="json2sessionStorage(testData, true)">Mover JSON a sessionStorage</button>
    <button id="btn-sessionStorage2json" onclick="sessionStorage2json(testData, false)">Copiar sessionStorage a JSON</button>
    <button id="btn-sessionStorage2json-move" onclick="sessionStorage2json(testData, true)">Mover sessionStorage a JSON</button>
    
    <!-- Mostrar Resultados de Transferencia -->
    <p>Revisa la consola para verificar los datos en <code>sessionStorage</code>.</p>
  </div>

  <!-- Ejercicio 3: Lanzador de Dados Virtual -->
  <div class="section" id="ejercicio3">
    <h2>Ejercicio 3: Lanzador de Dados Virtual</h2>
    
    <!-- Input y Botones de Control -->
    <label for="input-count">Número de tiradas (0 - 20):</label>
    <input type="text" id="input-count" maxlength="2" style="width: 40px;">
    <button id="btn-lanzar">Lanzar</button>
    <button id="btn-parar" disabled>Parar</button>
    
    <!-- Área de Mensajes de Resultado -->
    <div id="result-display2" style="margin-top: 10px; font-weight: bold;"></div>
  </div>

  <!-- Script de TypeScript compilado en JavaScript -->
  <script src="../../dist/script.js"></script>

  <script>
    // Definición de datos de prueba en JSON para el Ejercicio 2
    const testData = {
      nombre: "Juan",
      edad: 25,
      ciudad: "Madrid"
    };
  </script>

</body>
</html>
```

## Pesadilla typescript

```ts
$(function(){
        let msg:string = 'holis'
        $('#output1').text(`${msg}`)
    

// Ejercicio D1S1.1.1
    interface Freddy{
        name: string;
        edad: number;
        pesadilla: string;
    }
    let freddy: Freddy = {
        name : "Freddy",
        edad : 24,
        pesadilla : "Lo que sea"
    }
    $('#output2').text(`${freddy.name}$ {freddy.edad} ${freddy.pesadilla}`)

    
// Ejercicio D1S1.1.2

function atacar(arma:string){
    $('#output3').text(`Fredy ataca con ${arma}`)}
    atacar('peluche')
 
// Ejercicio D1S2.1.1

function saltar(ref:number, valor:number=5){
    $('#output4').text(`Fredy salta ${valor} metros /  Freddy salta ${ref}`)
}

 saltar(10)

// Ejercicio D1S2.1.2
class Pesadilla {
    nombre: string;
    constructor(nombre:string){
        this.nombre = nombre;
    }
    gritar=(): void => {
        const mensaje = `${this.nombre.toUpperCase()} aquí está`
        $('#output5').text(mensaje)
    }
}
const pesadilla = new Pesadilla('Freddy');
pesadilla.gritar();



// Ejercicio D1S2.2.1
class Pesadilla1 {
    nombre: string;
    constructor(nombre:string){
        this.nombre = nombre;
    }
    gritar=(): void => {
        const mensaje = `${this.nombre.toUpperCase()} aquí está`
        $('#output6').text(mensaje)
    }
}
const pesadilla1 = new Pesadilla1('Coco');
pesadilla1.gritar();

// Ejercicio D1S2.2.2

})
```

### html

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pesadilla en TypeScript</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <style>
        /* CSS Styles */
        body {
            background-color: #111;
            color: #e0e0e0;
            font-family: Arial, sans-serif;
            text-align: left;
        }

        h1 {
            color: crimson;
        }

        .exercise {
            margin: 20px 0;
        }

        .output {
            color: #00ff00;
            font-weight: bold;
            margin: 10px 0;
        }
    </style>
    <link rel="stylesheet" type="text/css" href="https://www3.gobiernodecanarias.org/educacion/cau_ce/cookies/cookieconsent.min.css"/><script  type="text/javascript" src="https://www3.gobiernodecanarias.org/educacion/cau_ce/cookies/cookieconsent.min.js"></script><script type="text/javascript" src="https://www3.gobiernodecanarias.org/educacion/cau_ce/cookies/cauce_cookie.js"></script><script type="text/javascript" src="https://www3.gobiernodecanarias.org/educacion/cau_ce/estadisticasweb/scripts/piwik-base.js"></script><script type="text/javascript" src="https://www3.gobiernodecanarias.org/educacion/cau_ce/estadisticasweb/scripts/piwik-eforma.js"></script></head>
    <body>
        <h1>Pesadilla en TypeScript</h1>

        <!-- Exercise Descriptions -->
        <div class="exercise">
            <p><strong>D1S1.1. ¿Qué es TypeScript?</strong></p>
            <p>Ejercicio 1: Define un mensaje y muéstralo en el div con id
                "output1"</p>
            <div id="output1" class="output"></div>
        </div>

        <div class="exercise">
            <p>Ejercicio 2: Crea un objeto Freddy con nombre, edad y
                pesadilla. Muéstralo en el div con id "output2" </p>
            <div id="output2" class="output"></div>
        </div>

        <div class="exercise">
            <p><strong>D1S2.1. Funciones Tipadas</strong></p>
            <p>Ejercicio 1: Define una función atacar al que se le pase por
                valor el texto del arma y muestre
                en el div con id "output3" el mensaje `Freddy ataca con
                ${arma}`.
            </p>
            <div id="output3" class="output"></div>
        </div>

        <div class="exercise">
            <p>Ejercicio 2: Crea una función saltar con parámetro opcional y
                saque en el div con id "output4"
                el mensaje `Freddy salta (parámetro opcional) / (valor pasado
                por referencia) metros`" </p>
            <div id="output4" class="output"></div>
        </div>

        <div class="exercise">
            <p><strong>D1S2.2. Funciones Flecha y sus diferencias con funciones
                    tradicionales</strong></p>
            <p>Ejercicio 1: Crear clase Pesadilla con una Función tradicional
                gritar con this. Se le pasa un nombre en la función devuelve:
                ¡nombre(en mayúsculas) está aquí! para
                ser mostrado en el div con id "output5"
            </p>
            <div id="output5" class="output"></div>
        </div>

        <div class="exercise">
            <p>Ejercicio 2: Crear clase Pesadilla con unaFunción flecha gritar
                que mantiene el contexto de this. Se le pasa un nombre en la
                función devuelve: ¡nombre(en mayúsculas) está aquí! para
                ser mostrado en el div con id "output6"</p>
            <div id="output6" class="output"></div>
        </div>

        <script src="../../dist/script.js"></script>
    </body>
</html>
```

## Menú interactivo

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Comanda Restaurante - Horror Edition</title>
        <link rel="stylesheet" href="styles.css">
        <script src="https://code.jquery.com/jquery-3.7.1.js"
            integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
            crossorigin="anonymous"></script>
        <script src="scripts.js" defer></script>
    </head>
    <body>
        <div class="container">
            <!-- Columna izquierda: Menú principal -->
            <div class="menu-left">
                <button class="menu-btn" id="bebidas"
                    data-category="bebidas" >Bebidas</button>
                <button class="menu-btn primer-plato" id="primer-plato" data-category="primer-plato">Primer
                    Plato</button>
                <button class="menu-btn segundo"  data-category="segundo-plato">Segundo
                    Plato</button>
                <button class="menu-btn postre"
                    data-category="postres">Postres</button>
            </div>

            <!-- Columna central: Subcategorías y listado de productos -->
            <div class="menu-right">
                <!-- Título del restaurante --> 
                <h1 id="titulo-restaurante">Restaurante Buen Gusto</h1>

                <!-- Subcategorías -->
                <div class="sub-menu">
                    <!-- Los botones de subsecciones se generan dinámicamente -->
                </div>

                <!-- Listado de productos -->
                <div class="product-list">
                    <!-- Los productos se generarán dinámicamente aquí -->
                </div>

                <!-- Botón para enviar la comanda -->
                <button id="enviarComanda">Enviar Comanda</button>
            </div>

            <div class="selected-products">
                <h2>Productos Seleccionados</h2>
                <ul id="productos-seleccionados">
                    <!-- Los productos seleccionados se mostrarán aquí -->
                </ul>

                <!-- Contenedor para el mensaje de confirmación -->
                <div id="mensaje-confirmacion"
                    style="display: none; text-align: center; margin-top: 20px;">
                    ¡Comanda enviada con éxito!
                </div>

            </div>

        </div>
    </body>
</html>
```

```javascript
$(document).ready(function() {
    $.getJSON('productos.json', function(data) {
        const productosSeleccionados = {}; 
        
        const subMenus = {
            bebidas: `
                <button class="item" data-type="Refrescos">Refrescos</button>
                <button class="item" data-type="Calientes">Calientes</button>
                <button class="item" data-type="Alcohólicas">Alcohólicas</button>`,
            "primer-plato": `
                <button class="item" data-type="Sopa">Sopa</button>
                <button class="item" data-type="Ensalada">Ensalada</button>`,
            "segundo-plato": `
                <button class="item" data-type="Carne">Carne</button>
                <button class="item" data-type="Pescado">Pescado</button>
                <button class="item" data-type="Vegetariano">Vegetariano</button>`,
            postres: `
                <button class="item" data-type="Frutas">Fruta</button>
                <button class="item" data-type="Dulces">Dulces</button>`
        };



        $('.menu-btn').on('click', function() {
            const category = $(this).data('category');
            $('.sub-menu').html(subMenus[category]);
            $('.product-list').empty();
        });

        function mostrarProductos(type) {
            $('.product-list').empty();
            if (data[type]) {
                data[type].forEach((item) => {
                    $('.product-list').append(`
                        <div class="producto">
                            <p>${item.nombre}</p>
                            <span id="cantidad-${(item.nombre).replace(/\s+/g, '')}" class="cantidad">0</span>
                            <button class="decrementar" data-nombre="${(item.nombre).replace(/\s+/g, '')}">-</button>
                            <button class="incrementar" data-nombre="${(item.nombre).replace(/\s+/g, '')}">+</button>
                        </div>
                    `);
                });
            }
        }

        $('.sub-menu').on('click', '.item', function() {
            const type = $(this).data('type');
            mostrarProductos(type);
        });

        $('.product-list').on('click', '.incrementar', function() {
            const nombreProducto = $(this).data('nombre');
            if (!productosSeleccionados[nombreProducto]) {
                productosSeleccionados[nombreProducto] = 0;
            }
            productosSeleccionados[nombreProducto]++;
            actualizarCantidadVisual(nombreProducto);
            actualizarListaSeleccionados();
        });

        $('.product-list').on('click', '.decrementar', function() {
            const nombreProducto = $(this).data('nombre');
            if (productosSeleccionados[nombreProducto] > 0) {
                productosSeleccionados[nombreProducto]--;
                actualizarCantidadVisual(nombreProducto);
                actualizarListaSeleccionados();
            }
        });

        function actualizarCantidadVisual(nombreProducto) {
            $(`#cantidad-${(nombreProducto)}`).text(productosSeleccionados[nombreProducto]);
        }

        function actualizarListaSeleccionados() {
            $('#productos-seleccionados').empty();
            for (const [producto, cantidad] of Object.entries(productosSeleccionados)) {
                if (cantidad > 0) {
                    $('#productos-seleccionados').append(`<li>${producto}: ${cantidad}</li>`);
                }
            }
        }

        $('#enviarComanda').on('click', function() {
            $('#mensaje-confirmacion').fadeIn().delay(2000).fadeOut(); 
            
            for (const producto in productosSeleccionados) {
                productosSeleccionados[producto] = 0;
                actualizarCantidadVisual(producto);
            }
            actualizarListaSeleccionados(); 
        });
    });
});
```

## LaberintoGame

```typescript
namespace LaberintoGame {
    export class Celda {
        constructor(public x: number, public y: number) {}
    }

    export class Jugador extends Celda {
        energia: number = 100;

        mover(dx: number, dy: number): void {
            this.x += dx;
            this.y += dy;
            this.energia -= 1; 
        }
    }

    export class Trampa extends Celda {
        constructor(x: number, y: number) {
            super(x, y);
        }
    }

    export class ObjetoEspecial extends Celda {
        constructor(x: number, y: number) {
            super(x, y);
        }
    }

    export class Salida extends Celda {
        constructor(x: number, y: number) {
            super(x, y);
        }
    }

    class Matriz<T> {
        private datos: (T | null)[][];

        constructor(public filas: number, public columnas: number) {
            this.datos = new Array(filas).fill(null).map(() => new Array(columnas).fill(null));
        }

        set(x: number, y: number, valor: T) {
            if (this.enLimites(x, y)) this.datos[y][x] = valor;
        }

        private enLimites(x: number, y: number) {
            return x >= 0 && y >= 0 && this.columnas > x && this.filas > y;
        }

        get(x: number, y: number): T | null {
            return this.datos[y][x];
        }
    }

    export class Juego {
        private laberinto: Matriz<Celda>;
        private jugador: Jugador;
        private tiempoRestante: number = 120;
        private interval: NodeJS.Timeout | null = null;
        private juegoIniciado: boolean = false;

        constructor(private filas: number, private columnas: number) {
            this.laberinto = new Matriz<Celda>(filas, columnas);
            this.jugador = new Jugador(0, 0);
            this.inicializarLaberinto();
        }

        private inicializarLaberinto(): void {
            this.laberinto.set(0, 0, this.jugador);

            for (let i = 0; i < 5; i++) {
                let x = Math.floor(Math.random() * this.columnas);
                let y = Math.floor(Math.random() * this.filas);
                while (this.laberinto.get(x, y) !== null) {
                    x = Math.floor(Math.random() * this.columnas);
                    y = Math.floor(Math.random() * this.filas);
                }
                this.laberinto.set(x, y, new Trampa(x, y));
            }

            for (let i = 0; i < 3; i++) {
                let x = Math.floor(Math.random() * this.columnas);
                let y = Math.floor(Math.random() * this.filas);
                while (this.laberinto.get(x, y) !== null) {
                    x = Math.floor(Math.random() * this.columnas);
                    y = Math.floor(Math.random() * this.filas);
                }
                this.laberinto.set(x, y, new ObjetoEspecial(x, y));
            }

            this.laberinto.set(this.columnas - 1, this.filas - 1, new Salida(this.columnas - 1, this.filas - 1));
        }

        moverJugador(dx: number, dy: number): void {
            let nuevoX = this.jugador.x + dx;
            let nuevoY = this.jugador.y + dy; 

            if (nuevoX >= 0 && nuevoX < this.columnas && nuevoY >= 0 && nuevoY < this.filas) {
                let celdaActual = this.laberinto.get(this.jugador.x, this.jugador.y);
                this.laberinto.set(this.jugador.x, this.jugador.y, new Celda(0, 0)); 

                this.jugador.mover(dx, dy);

                let celdaNueva = this.laberinto.get(nuevoX, nuevoY);
                if (celdaNueva instanceof Trampa) {
                    this.jugador.energia -= 20; 
                } else if (celdaNueva instanceof ObjetoEspecial) {
                    this.jugador.energia += 10; 
                } else if (celdaNueva instanceof Salida) {
                    this.terminarJuego(true); 
                }

                this.laberinto.set(nuevoX, nuevoY, this.jugador);
                this.renderizarLaberinto();

                if (this.jugador.energia <= 0) {
                    this.terminarJuego(false); 
                }
            }
        }

        private actualizarEnergia(): void {
            $('#energia').text('Energía: ' + this.jugador.energia);
        }

        private actualizarTiempo(): void {
            $('#timer').text( 'tiempo: ' + this.tiempoRestante + 's');
        }

        private iniciarTemporizador(): void {
            if (!this.juegoIniciado) { 
                this.juegoIniciado = true; 
                this.interval = setInterval(() => {
                    this.tiempoRestante--;
                    this.actualizarTiempo();
    
                    if (this.tiempoRestante <= 0) {
                        this.terminarJuego(false);
                    }
                }, 1000);
            }
        }

        renderizarLaberinto(): void {
            let $laberinto = $('#laberinto');
            $laberinto.empty();

            for (let y = 0; y < this.filas; y++) {
                for (let x = 0; x < this.columnas; x++) {
                    let celda = this.laberinto.get(x, y);
                    let $celda = $('<div>').addClass('celda');

                    if (celda instanceof Jugador) {
                        $celda.addClass('jugador');
                    } else if (celda instanceof Trampa) {
                        $celda.addClass('trampa');
                    } else if (celda instanceof ObjetoEspecial) {
                        $celda.addClass('objeto');
                    } else if (celda instanceof Salida) {
                        $celda.addClass('salida');
                    }

                    $laberinto.append($celda);
                }
                $('#iniciar').hide();
                this.iniciarTemporizador();
                $('#detail').hide();
            }

            this.actualizarEnergia(); 
            this.actualizarTiempo(); 
        }

        private terminarJuego(gano: boolean): void {
            if (this.interval) {
                clearInterval(this.interval); 
            
            }

            if (gano) {
                alert('Felicidades! Has ganado ✨');
            } else {
                alert('Lo lamento, has perdido ☠️');
            }

            location.reload(); 
        }
    }
}

$(document).ready(() => {
    let juego = new LaberintoGame.Juego(10, 10);
    $('#iniciar').on('click', () => {
        juego.renderizarLaberinto();
        $(document).on('keydown', (e) => {
            switch(e.which) {
                case 37: 
                    juego.moverJugador(-1, 0);
                    break;
                case 38: 
                    juego.moverJugador(0, -1);
                    break;
                case 39: 
                    juego.moverJugador(1, 0);
                    break;
                case 40: 
                    juego.moverJugador(0, 1);
                    break;
            }
        });
    });
});
```

```html

<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rescate en el Laberinto</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>El Laberinto</h1>
        <div id="laberinto"></div>
        <div id="info-panel">
            <p id="energia">Energía: 100</p>
            <p id="timer">Tiempo: 120s</p>
            <div id="detail">
                <ul>
                    <h2>Leyenda</h2>
                    <li>cuadrado <span style="color: green;">verde</span>: jugador</li>
                    <li>cuadrado <span style="color: red;">rojo</span>: obstáculo (resta energía)</li>
                    <li>cuandrado <span style="color: rgb(158, 158, 1);">amarillo</span>: zona de cura (aumenta energía)</li>
                    <li>cuadrado <span style="color: blue;">azul</span>: salida</li>
                </ul>
            </div>
            <button id="iniciar">Iniciar Juego</button>
        </div>
        <script src="../../dist/script.js"></script>
    </body>
</html>
```

## Adivina el numero

```typescript
// Adivina el número en TypeScript

class GuessingGame {
    private targetNumber: number;
    private attempts: number;

    constructor(private min: number = 1, private max: number = 100) {
        this.targetNumber = this.generateRandomNumber();
        this.attempts = 0;
    }

    // Método para generar el número aleatorio
    private generateRandomNumber(): number {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

    // Método para adivinar el número
    public guess(number: number): string {
        this.attempts++;

        if (number === this.targetNumber) {
            return `¡Felicidades! Adivinaste el número ${this.targetNumber} en ${this.attempts} intentos.`;
        } else if (number < this.targetNumber) {
            return "El número es mayor. Intenta de nuevo.";
        } else {
            return "El número es menor. Intenta de nuevo.";
        }
    }

    // Método para reiniciar el juego
    public reset(): void {
        this.targetNumber = this.generateRandomNumber();
        this.attempts = 0;
    }
}

// Ejemplo de uso del juego en consola
const game = new GuessingGame();

console.log("Adivina el número entre 1 y 100.");

let userGuess: number | null = null;

while (userGuess !== game["targetNumber"]) {
    userGuess = parseInt(prompt("Ingresa tu número: ") || "");

    if (!isNaN(userGuess)) {
        console.log(game.guess(userGuess));
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
}
```

### Explicación:

1. Clase GuessingGame:
- La clase genera un número aleatorio cuando se instancia.
- El método guess compara la entrada del usuario con el número objetivo y devuelve mensajes según si el número es mayor, menor o correcto.
- El método reset reinicia el juego, generando un nuevo número objetivo.

2. Ejemplo de uso:
- Se crea una instancia de GuessingGame.
- Se usa un ciclo while para permitir al usuario intentar adivinar hasta que logre acertar.

# Iniciar proyecto en TS

1. Instalación y Configuración del Proyecto 

1.1.- Asegúrate de tener instalado Node.js

	Escribe en una terminal: node -v 
	
	Si te devuelve la versión es que está instalado si no procede a instalarlo descárgalo e instálalo desde Node.js. 

1.2.- Abre tu proyecto en Visual Studio Code (VSC) 

	Puedes hacerlo desde el menú "Archivo" > "Abrir carpeta", seleccionando la carpeta que contiene tus archivos.

1.3.- Crea la estructura de carpetas

proyecto/
├── src/
│   ├── script.ts
│   └── public/
│       ├── index.html
│       └── styles.css
├── dist/
│   

1.4.- Inicia el Proyecto Node
	Abre una terminal en VSC (Terminal > Nueva terminal).	
    Ejecuta npm init -y para crear un archivo package.json con la configuración predeterminada del proyecto.

1.5.- Instala TypeScript y otros paquetes necesarios
	npm install typescript ts-node @types/jquery --save-dev

2. Configuración de TypeScript
	Genera un archivo de configuración de TypeScript:		
    npx tsc --init	

Esto creará un archivo tsconfig.json en tu proyecto. En este archivo, asegúrate de que las siguientes opciones están configuradas:

{  "compilerOptions":
 {    "target": "es5",    
 "module": "commonjs",   
  "outDir": "./dist",    
  "rootDir": "./src",    
  "strict": true  }}

2.1.- Estructura de carpeta final
Proyecto/
├── node_modules/
├── src/
│   ├── script.ts
│   └── public/
│       ├── index.html
│       └── styles.css
├── dist/
│   └── script.js   // generado tras compilar TypeScript
├── package-lock.json
├── package.json
└── tsconfig.json

3. Compilación de TypeScript a JavaScript

En el archivo package.json, agrega un script para compilar TypeScript e iniciar el proyecto con start:

"scripts": {
"start": "ts-node src/script.ts",  
"build": "tsc"}

o este(
    "scripts": {
  "build": "tsc",
  "start": "node dist/script.js"
}
)

o este(
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "ts-node src/script.ts",
    "build": "tsc"
  }, 
)

Compila el proyecto ejecutando en la terminal:	
npm run build 
Esto generará los archivos .js en la carpeta dist.

4. Ejecución de la aplicación
	Desde VSC seleccionamos el fichero index.html y pulsamos “Go Live” y ¡Listo!.
