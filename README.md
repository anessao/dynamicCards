# Dynamic Cards - Dream Journal

## Project Parameters:

1. Create an HTML
	- must have a `<textarea>`
	- must have a `<button>` labeled "create"
1. When the user enters in text into the text area and then **clicks** the "create" button, create a **new card element** in the DOM.
1. When the user clicks the **Delete** button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually [removed](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) from the DOM.

#### TECHNOLOGIES USED
- JavaScript
- HTML
- CSS

- Used JavaScript to interact with the DOM elements by "grabbing" the `<textarea>` input from the user and inputting it into a "pre-styled" div element imported with the `.innerHTML = ""` method.

#### SCREENSHOT OF PAGE WITH ENTERED CARDS
![homepage screenshot](https://raw.githubusercontent.com/anessao/dynamicCards/master/home-screenshot.png)

#### HOW TO RUN CODE
```
1. git clone https://github.com/nss-evening-cohort-05/iife-translator-codemonkeys
2. cd iife-translator-codemonkeys
3. npm install http-server -g
4. http-server -p 8080
```