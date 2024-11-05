/*¿Cuántos segundos han pasado desde que naciste? 
¿y minutos? ¿y horas? ¿y días? 
Implementar una función que dada una fecha cualquiera en formato 
“yyyy-mm-dd”, devuelva cuánto tiempo ha pasado desde esa fecha. 
La función aceptará un segundo parámetro para indicar en qué 
unidad se quiere obtener el resultado: 
‘d’ → días, ‘h’ → horas, ‘m’ → minutos y ‘s’ → segundos. 
Si no es ninguna de estas unidades, se mostrará un error. */


function seconds_calc(today, day) {
    return (today - day) / 1000; 
}

function birthCalculator(date, format) {
    let today = new Date();
    let day = new Date(date);
    let seconds = seconds_calc(today, day);

    switch (format) {
        case 's':
            return seconds; 
        case 'm':
            return seconds / 60; 
        case 'h':
            return seconds / 3600; 
        case 'd':
            return seconds / 86400; 
        default:
            return 'Formato no soportado'; 
    }
}