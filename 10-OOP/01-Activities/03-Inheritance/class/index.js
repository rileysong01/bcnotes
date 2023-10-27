// class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}
// Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn); //passes authorName, text, and createdOn from ForumItem to BlogPost

    //properties specific to BlogPost
    this.title = title;
    this.comments = [];
  }
  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn)
    this.reaction = reaction;
  }
}

// new object using the Comment class constructor.
const hateComment = new Comment('hater', 'bad post','today', 'bad')

// new object using the BlogPost class constructor.
const myPost = new BlogPost('Darwin', 'meow', 'miau', 'yesterday')

// Log both newly created BlogPost and Comment to the console.

myPost.addComment(hateComment)
console.log(hateComment)
console.log(myPost)
