This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a basic React app
Things I learned
- creating a class in a component: a class in JavaScript mimics a class in other OO languages, but it is not quite the same thing. JS uses prototypes and the prototype chain in order to access properties on a child object rather than actually copying the class and all of it's properties like in C#
- a constructor function instantiates an object inside of a class. You need to use the super(); keyword before you can use this 'this' keyword in a constructor function. The constructor function 'constructs' the state object when the component mounts
- this.state is the object that the constructor functions builds upon mounting
- methods are functions contained in the class, i.e. properties of the class object. The distinction between a method and a normal function is the invocation context - i.e. methods need to utilize the 'this' keyword so that they point to the object that they are properties of, whereas a functions' context is the global, or window object. So the distinction has to do with context
- we use methods in order to set a new state with this.setState({}). We then call those methods in our HTML(JSX) using event handlers, passing in parameters when appropriate, in order to manipulate, update, and change the DOM
- we use a return statement in the render function contained in the class in order to return some JSX that is transpiled into HTML
- onChange and onClick are JavaScript events - I need to research events more, but they are basically DOM manipulators 