const leapYears = function(a) {
    if((a % 4 == 0 && a % 100 !== 0) || a % 400 == 0){
        return true;
    }
return false;
}

module.exports = leapYears


/*

Leap years are years divisible by four (like 1984 and 2004). 
However, years divisible by 100 are not leap years (such as 1800 and 1900) 
unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 

describe('leapYears', function() {
  it('works with non century years', function() {
    expect(leapYears(1996)).toEqual(true);
  });
  xit('works with non century years', function() {
    expect(leapYears(1997)).toEqual(false);
  });
  xit('works with ridiculously futuristic non century years', function() {
    expect(leapYears(34992)).toEqual(true);
  });
  xit('works with century years', function() {
    expect(leapYears(1900)).toEqual(false);
  });
  xit('works with century years', function() {
    expect(leapYears(1600)).toEqual(true);
  });
  xit('works with century years', function() {
    expect(leapYears(700)).toEqual(false);
  });
});

*/