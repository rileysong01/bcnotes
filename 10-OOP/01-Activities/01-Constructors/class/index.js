// class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
    constructor(author, title, text, createdOn) {
    this.author = author;
    this.title = title
    this.text = text
    this.createdOn = createdOn
    this.comments = [];
}
}

BlogPost.prototype.printMetaData = function() {
    console.log(`created by ${this.author} on ${this.createdOn}`)
}

BlogPost.prototype.addComment = function(huh) {
    this.comments.push(huh)
}

// class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.
class Comment {
    constructor(author, text, createdOn, reaction) {
        this.author = author;
        this.text = text
        this.createdOn = createdOn
        this.reaction = reaction;
    }
}

Comment.prototype.printMetaData = function() {
    console.log(`${this.author} commented ${this.text} on ${this.createdOn}`)
}

// Create a new object called 'hateComment' using the Comment class constructor.
const hateComment = new Comment('hater', 'bad post op', 'today', 'bad')


// Create a new object called 'myBlogPost' using the BlogPost class constructor.
const myBlogPost = new BlogPost('Darwin', 'Meow', 'This is a good post', 'yesterday')

// Use the addComment() method on your newly created BlogPost to add your newly created Comment to myBlogPost's comments array.
myBlogPost.addComment(hateComment)

myBlogPost.printMetaData()
hateComment.printMetaData();
