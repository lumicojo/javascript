function playVideo() {
  console.log(this);
}

playVideo.call({name: 'lumi'});
playVideo.apply({name: 'lumi'});
playVideo.bind({name: 'lumi'})();
playVideo();




const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => {
       console.log(this.title, tag);  // = title a a, ab,ac
    });
  }
};
video.showTags(); // = title a,b,c





// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c'],
//   showTags() {
//     const self = this;
//     this.tags.forEach(function(tag) {
//        console.log(this.title, tag);  // = title a a, ab,ac
//     }.bind(this));
//   }
// };
// video.showTags(); // = title a,b,c

