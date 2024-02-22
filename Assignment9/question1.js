// Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript

const nodes = document.querySelectorAll("p");
nodes.forEach((node) => (node.textContent = "How’s the Josh?"));

/*
    The above code will first find all the p tags and store it in a nodes variable and 
    then we can loop through the nodes and set the textContent of them.
*/
