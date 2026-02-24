1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
getElementById:
I use this when I need one specific element by its id,It returns a single element or null if not found.
Most used and Fastest because id is unique.

getElementsByClassName:
I use this for elements with the same class.It returns an HTMLCollection.
It needs a loop to access items.

querySelector:
I use this when I want the first element that matches any CSS selector.
Returns one element.

querySelectorAll
I use this when I want all elements matching a CSS selector.
Returns a NodeList.


2. How I create and insert a new element into the DOM:
Create element → document.createElement()
Add content → innerText or innerHTML
Insert it → append, appendChild, or prepend
Example:
const div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);


3. What is Event Bubbling and how it works:
Event bubbling means the event starts from the target element and moves upward to its parent elements.
So if I click a button inside a div:
button → div → body → document
Each parent can handle the same event unless I stop it.


4. What is Event Delegation and why it’s useful:
Event delegation is when I add one event listener to a parent instead of many children, and detect which child triggered it.
I use it for Better performance, Works for dynamically added elements and Cleaner code.
Example :
add click listener to ul instead of every li.