function receivesAFunction (callback) {
    let sum = 'spy';
    callback(sum);
}
function returnsANamedFunction() {
    return  function helloFunc(){
        return console.log('hello');
    };
};
function returnsAnAnonymousFunction() {
    return function() {
        return console.log("world");
    };
};