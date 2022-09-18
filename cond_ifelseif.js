function isRose(cat) {
    if(cat ==='rose') {
        return 'hi rose you are cute'
    }else if(typeof cat === 'string'){
        return 'hi ${cat}'
    } else {
        return 'Sorry, please pass in a cat name'
    }
}



//ternary

function isRose(cat) {
    switch(cat) {
        case'roswe':
          return 'hi rose you are cute'
        case 'ted':
            return 'nice to see you'
        default:
            return `hi ${cat}`    
    }
}