## About
- This package uses the Intersection Observer API to detect if an element is in the browser viewport.

## Example
```

// Get the element using querySelector
let elementSelector = document.querySelector('.elementSelector');

// Check out the Intersection Observer API for all posible options
let options = {
    root: null,
    rootMargin: "10px 0px 10px 0px", // Offset position
};

//Callback function
function handleCallback(entry, observer) {
    
    if (entry[0].isIntersecting == true) {
        // If element is in the viewport
        // Code goes here
        console.log('Element is in the Viewport');
    } else {
        // If element is NOT in the viewport
        // Code goes here
        console.log('Element is NOT in the Viewport');
    }

}

// To create a new instance
new isInViewport(elementSelector, handleCallback, options);


```