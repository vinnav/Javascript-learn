const caesar = function(string, shift) {
    return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
}
const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};
    /*    stringCode= [];
    for (i=0; i<a.length; i++){
        if(a.charAt(i).match(/[a-z]/i)){
        stringCode.push(parseInt(a.charCodeAt(i)+b));
        } else {
            stringCode.push(a.charCodeAt(i));
        }
        //if(i<a.length-1){
        //    stringCode += ",";
        //} 
    }
    return  String.fromCharCode.apply(null, stringCode);
*/


module.exports = caesar
