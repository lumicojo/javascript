// ex 13 -2 areaCircle
//create a circle obj using obj literal syntax
//circle.radius = 2;, console.log(circle.area); only read property we need (get)

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;// this is formula
    }
    
}
console.log(circle.area);