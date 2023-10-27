// a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogPost(author, title, text, createdOn) {
    this.author = author; //this. refers to the new object that is created with the constructor 
    this.title= title
    this.text = text
    this.createdOn = createdOn
    this.printMetaData = function () {
        console.log(`created by ${this.author} on ${this.createdOn}`)
    }
}


const myBlog = new BlogPost('riley', 'first post', 'haha', 'sept 1st 2023')
myBlog.printMetaData() // --> logs 'created by riley on sept 1st 2023'
console.log(myBlog)

myBlog.author = 'darwin';
myBlog.printMetaData() // --> logs 'created by darwin on sept 1st 2023'
