/* ==============================
//* DOM IN JAVASCRIPT
//* ==============================*/

//? When a web browser loads an HTML document, it parses the HTML source code and creates a tree-like structure known as the Document Object Model (DOM). This DOM tree represents the structure of the HTML document, with each HTML element being a node in the tree.

//? This entire DOM tree is then accessible to JavaScript as an object. JavaScript can interact with this object to manipulate the content, structure, and style of the document dynamically. The DOM essentially serves as an interface between the HTML document and JavaScript, providing a way for scripts to access and modify the document's structure and content.

//todo The Document Object Model (DOM) is an Application Programming Interface (API). The DOM Tree is the structure of your HTML document, as represented by the DOM API. As stated, this API then gives us many methods and properties that we can use to manipulate the Tree, and therefore, by extension, the document.

//* Here is a types of nodes in js:

//? Element node:  An HTML tag, the tree building blocks.

//? Text node:  In the DOM tree, text content, including new lines, spaces, and tabs, is treated as text nodes.

//? Attribute node: An attribute of an element.

//? Comment node: Represent comments within the HTML document.

//? Processing instruction node:  A processing instruction node, such as <? xml-stylesheet … ?>.

//? Document node:  A document node.

//? Document type node: A document type node, such as <! DOCTYPE html>



//* ==============================
//* DOM Navigation
//* ==============================

//? document represents the entire document
// console.log(document);

//? Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).

//? parentNode / parentElement:
// Navigate to the parent node or element.

// Document and DocumentFragment nodes can never have a parent, so parentNode will always return null. It also returns null if the node has just been created and is not yet attached to the tree.

//? childNodes / children:
// Navigate to child nodes or elements.

// childNodes is a property that returns a NodeList containing all child nodes of a given element, including text nodes and comment nodes.

//? firstChild / firstElementChild:
// Navigate to the first child node or element.

//todo The Element suffix in firstElementChild and similar properties signifies that only element nodes are considered.

//? lastChild / lastElementChild:
// Navigate to the last child node or element.

//? nextSibling / nextElementSibling:
// Navigate to the next sibling node or element.

//? previousSibling / previousElementSibling:
// Navigate to the previous sibling node or element.

//? closest(selector):
// Find the closest ancestor of the current element that matches a given selector.

//* ==============================
//* DOM Filtering
//* ==============================

//? childNodes / children:
// Get a NodeList or HTMLCollection and filter based on your criteria.

//? Filtering Siblings:
//? nextSibling / nextElementSibling
//? previousSibling / previousElementSibling

//? closest(selector):
//? Find the closest ancestor that matches a given selector.
//? The closest(selector) method is used to find the closest ancestor of an element that matches a specified CSS selector. This method traverses up the DOM tree, starting from the current element, and returns the first ancestor that matches the provided selector. If no matching ancestor is found, it returns null.





//* ==============================
//* DOM Searching
//* ==============================
//? getElementById(id): Find an element by its ID.

//? getElementsByClassName(className): Find elements with a specific class name.

//? getElementsByTagName(tagName): Find elements with a specific tag name.

//? querySelector(selector): Find the first element that matches the specified CSS selector.

//? querySelectorAll(selector): Find all elements that match the specified CSS selector.





