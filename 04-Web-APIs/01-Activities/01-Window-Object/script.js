// Logs the global object (window)
console.log("this: ");
console.log(this);

// Logs the document object (webpage HTML)
console.log("window.document: ");
console.log(window.document);


//"window" and "document" objects are part of the WEB API 
    // NOT native JavaScript objects
    // made available by browser environement to faciliate interaction between JavaScript code & webpage

// Logs body of document
console.log("document.body: ");
console.log( document.body); 

// Logs all root (top-level/outermost) HTML elements
console.log(document.documentElement);

// Logs document head element
console.log(document.head);