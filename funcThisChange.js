// 11- Changing this
//how to change value in the function

//    this is the new version USE IT
const video = { 
    title: 'a', 
    tags: ['a', 'b', 'c'],
    showTags() {  
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
}; 
video.showTags(); 







// const video = { 
//     title: 'a', 
//     tags: ['a', 'b', 'c'],
//     showTags() {  
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }.bind(this));
//     }
// }; 
// video.showTags(); 




// function playVideo(a, b) {
//     console.log(this);

// }
// playVideo.call({ name: 'Mosh' }, 1, 2);
// playVideo.apply({ name: 'Mosh' }, [1, 2]);// apply is only for arguments and need array
// playVideo.bind({ name: 'Mosh' })(); //it retuns a new func and point to this obj (same line) permanent


// playVideo();
