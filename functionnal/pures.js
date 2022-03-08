function myFunction(number){ //not pure
    return number * Math.random() //random number makes it impure
}

console.log(myFunction(2))

function getActualDate(){ // not pure
    return new Date()
}

// Rules to get a pure function :

// 1 don't use any random numbers
// 2 don't use the current time/data
// 3 don't use any global state (DOM, files, db...)
// 4 we don't mutate the input parameters

function isMajor(age){ // not pure
    return age > minAge
}
function isMajor(age, minAge){ // finally pure
    return age > minAge
}

function sum(a,b){ // pure function
    return a+b
}

// Bénéfices

// - self-documenting : what does the function need is obvious
// - easier to test : no global var specified before testing
// - scalable: no global state and we don't modify the input parameters [concurrency]
// they are cacheable: 