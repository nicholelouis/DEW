/*5. Muestra la fecha y hora actuales en 
formato: “DD/MM/YYYY hh:mm:ss TimeZone”*/

let today = new Date();

let month = (today.getMonth() +1).toString().padStart(2, '0');
let day = today.getDate().toString().padStart(2, '0');
let year = today.getFullYear();

let hours = today.getHours().toString().padStart(2, '0');
let minutes = today.getMinutes().toString().padStart(2, '0');
let seconds = today.getSeconds().toString().padStart(2, '0');

let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${timezone}`);