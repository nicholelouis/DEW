/* Implementar una función hdec2hms(x) que transforme una hora en 
formato decimal a su equivalente en formato hh:mm:ss (en texto). 
Por ejemplo, 8.25 = “8:15:00” y 10.12 = “10:07:12”. 
Implementar también la función inversa hms2hdec(h,m,s).*/

function hdec2hms(num) {
    let total = String(num).split('.');
    let hour = parseInt(total[0], 10);
    let decimalPart = parseFloat('0.' + (total[1] || '0'));
    let min = Math.round((parseFloat('0.' + total[1]) * 60)); 
    let seconds = Math.round((decimalPart * 60 - min) * 60);;
    min = min.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    return `${hour}:${min}:${seconds}`;
  }

  function hms2hdec(h,m,s) {
    let integer = h;
    let min = m / 60;
    let sec = s / 3600;
    let decimal =  min + sec;
    
    return integer + decimal
  }

console.log(hdec2hms(10.12));
console.log(hdec2hms(8.25));