//8- Local vs GlobalScope
const color = 'red';//globalScope   this is globalScope is access every were.
// const is avaliable to all this page
function start(){
    const message = 'hi';
    //const color = 'blue';// local Scope do't use the same const for local as veriable
    console.log(color);
}
function stop() {
    const message = 'bye';
}
start();