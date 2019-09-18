const removeFromArray = function() {

    let args = Array.from(arguments);
    let array = args[0];
    let originalArray = args[0];
    args.splice(0,1);
    
    
    
    for(x = 0; x < args.length; x++){
    let value = args[x];
        for(i = 0; i < array.length; i++){
            if(array[i] == value){
                originalArray.splice(i, 1);
            }
    
        }
    }
    
    return originalArray;
    
    }



module.exports = removeFromArray


/* alert(removeFromArray[1,2,3,4],3,2)
        it('removes a single value', function() {
            expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        });
  xit('removes multiple values', function() {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });
  xit('ignores non present values', function() {
    expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
  });
  xit('ignores non present values, but still works', function() {
    expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
  });
  xit('can remove all values', function() {
    expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  });
  xit('works with strings', function() {
    expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
  });
});
*/
