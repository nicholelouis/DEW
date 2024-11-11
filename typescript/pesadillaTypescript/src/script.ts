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
  