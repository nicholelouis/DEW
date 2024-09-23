/*Implementar una función que dada una fecha en texto 
(por ejemplo “2018-09-20”), devuelva la fecha juliana equivalente.
Para realizar la suma, ten en cuenta que la fecha juliana almacena días, 
mientras que el tiempo_unix en javascript contiene milisegundos, 
por lo que hay que transformarlo en días. Por cierto, 
¿de dónde crees que ha salido el valor 2440587.5?*/

function JDate(date) {
    let formar_date = new Date(date);
    
    let unix_date = formar_date.getTime();
    const milli_per_day = 86400000;
  
    let unix_days = unix_date / milli_per_day;
    let julian_date = unix_days + 2440587.5;
    return julian_date;
  }
  
  console.log(JDate('2024-09-18'));