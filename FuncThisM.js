//10 this Keyword
// the object that is executing the current function
//if the function is a part of the object  we call method == obj
// if the function is not part of a obj function == is refernce global obj wich is the  (window obj in browser, global in node)

    /// Method of Object
// const video = { //obj
//     title: 'a', // property
//     play() {    // method
//         console.log(this);
//     }
// };  
// video.stop = function() {
// // stop is a method in the video obj
//     console.log(this);
// }
// video.play();



///////////////////
/////    function -> global (window, global)

// const video = { //
//     title: 'a', // 
//     play() {    // 
//         console.log(this);
//     }
// };  
// function playVideo() { 
    
//     console.log(this);// we see this in browser and global node
// }
// playVideo();





// const video = { //
//     title: 'a', // 
//     play() {    // 
//         console.log(this);
//     }
// }; 

// function Video(title) { // constructor function
//     this.title = title;
//     console.log(this); // we get new obj  instead of window obj
// }

// const v = new Video('b'); 
// // the (new) operator create a new empty obj like This{}
// // and sets this point to the empty obj


// Ex:
const video = { 
    title: 'a', 
    tags: ['a', 'b', 'c'],
    showTags() {    
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this); //this is second param
    }
}; 
video.showTags();
//this is for current obj,then tags prop