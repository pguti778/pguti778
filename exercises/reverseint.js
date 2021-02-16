
reverseint = (x) => {
    var s = (x ?? "").toString();
    var  negative = 1;
    if(s[0] === "-") {
        negative = -1;
        s = s.substring(1, s.length);
    }
    s = s.split("").reverse().join('');
    return  parseInt(s)  * negative;
}

console.log(reverseint(-124));
console.log(reverseint(1534236469 ));