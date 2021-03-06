import BlogpostService from "../Services/BlogpostService.js";
import STORE from "../store.js"
import Blogpost from "../Models/Blogpost.js";

//Private
function _drawBlogposts() {
  STORE.saveState()
  let template = ''
  STORE.State.blogposts.forEach(p => template += p.Template)
  document.getElementById('posts').innerHTML = template

}










//Public
export default class BlogpostController {
  constructor() {
    console.log("Controller Check");
    _drawBlogposts();
  }

  createPost(event) {
    event.preventDefault()
    let form = event.target
    let newPost = { title: form.blogtitle.value, post: form.blogtext.value }
    BlogpostService.createPost(newPost)
    _drawBlogposts();
  }

  removePost(id) {

    BlogpostService.removePost(id)
    _drawBlogposts();


  }

  addComment(event, id) {
    event.preventDefault()
    let form = event.target
    let newComment = form.comment.value
    BlogpostService.addComment(newComment, id)
    _drawBlogposts();
  }
  removeComment(id, comment) {

    BlogpostService.removeComment(id, comment)
    _drawBlogposts();
  }





}
