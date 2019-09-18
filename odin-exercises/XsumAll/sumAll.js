const sumAll = function(a,b) {

let finalSum = 0;
let smallerNum = 0;
let largerNum = 0;

if(a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number'){
    return "ERROR";
}

if(a<b){
    smallerNum = a;
    largerNum = b;
} else {
    smallerNum = b;
    largerNum = a;
}

for(i = smallerNum; i <= largerNum; i++){
    finalSum+=i;
}

return finalSum;


}

module.exports = sumAll


/*

- create a variable to hold the final sum 
- loop through the given numbers
- on each iteration add the number to the sum 
- return the sum after finishing the loop

describe('sumAll', function() {
  it('sums numbers within the range', function() {
    expect(sumAll(1, 4)).toEqual(10);
  });
  xit('works with large numbers', function() {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  xit('works with larger number first', function() {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  xit('returns ERROR with negative numbers', function() {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  xit('returns ERROR with non-number parameters', function() {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  xit('returns ERROR with non-number parameters', function() {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
});

*/