const reverseString = function(x) {
    let string = x;
    let rString = "";
    
    for(i = string.length; i >= 0; i--){
        rString+= string.charAt(i);
    }

    return rString;

}

module.exports = reverseString





/*
    expect(reverseString('hello')).toEqual('olleh');
 
    expect(reverseString('hello there')).toEqual('ereht olleh')
  
    expect(reverseString('123! abc!')).toEqual('!cba !321')

    */