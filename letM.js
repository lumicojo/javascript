//9-let vs var
// var => function-scoped
// ES6 (ES2015); let, const => block-scoped
function start() {
    for (let i =0; i < 5; i++){
        console.log(i);
    }
}
start();

// never use var