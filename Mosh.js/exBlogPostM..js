// 18 Ex-4 Blog Post Obj
//use obj literal syntax to create intial blog post
//create a blog post with this properties;
// title
// body
//author
// views
// comments    == has 2 prop( author, body) use obj lit sintax to initial comment obj
// isLive      can be true or false

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b' }, // we can have another comment;
        { author: 'c', body: 'd'},
    ],
    isLive: true
}
console.log(post);
