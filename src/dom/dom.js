/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
  document.getElementById('change-my-color').style.color = 'red'
}

/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {
  // const add = document.getElementById('add-your-elements-in-this-element')
  const p1 = document.createElement('p')
  p1.innerText = 'Bonjour'
  const p2 = document.createElement('p')
  p2.innerText = 'Toto'
  document.getElementById('add-your-elements-in-this-element').appendChild(p1)
  document.getElementById('add-your-elements-in-this-element').appendChild(p2)
}

/**
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
  // Write your code here
}
