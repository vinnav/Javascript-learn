/*const repeatString = function(x, y) {
    let string = x;
    for(i = 0; i < y; i++){
        string += x;
    }

}

module.exports = repeatString
*/

function repeatString(x, y) {
    let string = "";
    if(y < 0){
        return "ERROR";
    }
    for(i = 0; i < y; i++){
        string += x;
    }
    return string;

}

module.exports = repeatString