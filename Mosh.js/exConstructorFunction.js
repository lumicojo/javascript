//19-ex-5- ConstructorFunction
//create a post obj
// we building a blog in engine the user is drafting
//a post but they not publish yet.How the function look like
// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         { author: 'a', body: 'b' }, // we can have another comment;
//         { author: 'c', body: 'd'},
//     ],
//     isLive: true
// }

let post = new Post('a', 'b', 'c');
console.log(post);

function Post(title, body,author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}