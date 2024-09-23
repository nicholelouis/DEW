function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function rad2deg(rad) {
    return rad * (180 / Math.PI);
}

function sinDeg(x) {
    let radians = deg2rad(x);
    return Math.sin(radians);  
}

function cosDeg(x) {
    let radians = deg2rad(x);
    return Math.cos(radians);  
}

function sinDegAlt(x) {
    let cos = cosDeg(x); 
    return Math.sqrt(1 - cos * cos);
}

function cosDegAlt(x) {
    let sen = sinDeg(x); 
    return Math.sqrt(1 - sen * sen);
}
    