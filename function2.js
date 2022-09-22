function razzle() {
    console.log("you've been razzled");
}
razzle();

function razzle(lawyer = "Billy", target = "'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
}
razzle(); //=> Billy razzle-dazzles 'em!
razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!
