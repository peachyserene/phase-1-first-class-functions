const { spy } = require("chai");

function receivesAFunction(spy){
    return spy();
}
receivesAFunction("Pizza")

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(`Pam likes ${spy}`)
    }
}