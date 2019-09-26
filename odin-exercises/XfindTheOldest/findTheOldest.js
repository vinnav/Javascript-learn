let findTheOldest = function(people) {
    const oldest = people.sort(function(a,b){
        if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
            return -1;
        } else {
            return 1;
        }
    })
    return oldest[0];
}

module.exports = findTheOldest


//not solved if the oldest is still living, add a check and compare birth year
//with death = new Date().getFullYear();