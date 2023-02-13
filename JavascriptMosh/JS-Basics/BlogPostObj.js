// create a blog post obj with this properties
// title,,body,,author, views, comments ,
// each comment it should have couple property: author,body.
// use obj literal syntax to create a blog post

let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    {author: "a", body: "b"},
    {author: "c", body: "d"}
  ],
  isLive: true
}
console.log(post)
