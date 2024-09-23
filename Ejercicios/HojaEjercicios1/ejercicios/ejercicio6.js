/*6. Construye una fecha a partir del texto 
“02/04/2015”. Muestra la fecha con console.log, 
¿qué obtienes? Prueba ahora con “2015-04-02”.
¿Cómo podrías crear una fecha con el texto 
“April 02, 2015”? */


let date = new Date('02/04/2015');
console.log(date)

/* Con este formato: “02/04/2015”, es probable que obtengamos un resultado erroneo
debido que JavaScript lo podria interpretar como 02 de abril o 04 de febrero
dependiendo del entorno donde lo ejecutemos, los otros dos formatos (“2015-04-02”,
“April 02, 2015”) son más confiables y podemos obtener un resulta acertado */