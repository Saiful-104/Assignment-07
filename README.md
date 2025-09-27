  1
   What is JSX?
    JSX stands for JavaScript XML.
    It is a syntax extension for JavaScript, mainly used in React.
    JSX allows writing HTML-like code inside JavaScript.
    It is not HTML, but it gets compiled into JavaScript.

Why is JSX used?
  Makes writing UI code simpler and cleaner.
  Improves readability of code.
  Lets you combine markup and logic in the same file.
  Allows JavaScript expressions inside markup using { }.
  Produces better error and warning messages, making debugging easier.

//2

  Difference Between State and Props
State
  State is the component’s own data.
  It is mutable (can be changed) and can be updated within the component.
  When state changes, the component re-renders.
  Controls the internal logic and behavior of the component.

Props
  Props stand for Properties.
  They are used to pass data from parent to child components.
  Props are immutable (cannot be changed inside the child component).
  Help in making components reusable, since the same component can behave differently with different props.


//3
   What is useState?
     useState is a React Hook that allows functional components to have their own state variables.
     It helps manage dynamic data inside a component.
     It returns a state value and a function to update that state.

How does it work?
   When a component first renders, useState initializes the state with a default value.
   If the state is updated using the provided function, React will re-render the component to reflect the new value.
   This makes components interactive and dynamic.

Key Points
  Allows functional components to store and manage data.
  State updates cause re-rendering of the component.
  Helps in building interactive UIs.

 //4
  How can you share state?
    In React, state is local to a component by default. To share it, you need to lift the state up or use other methods.

Ways to Share State
   Lifting State Up
   Move the shared state to the closest common parent component.
   Pass the data down as props to child components.

Using Context API
   Provides a way to share state globally without passing props through multiple levels.
   Useful for theme, authentication, or global settings.
   State Management Libraries
   Tools like Redux, Zustand, or MobX can manage and share state across multiple components.
   Useful for large applications with complex state needs.

Key Point
  For small apps → Lifting State Up is usually enough.
  For larger apps → Context or external libraries make state management easier.

//5

  How is event handling done?
    React handles events using synthetic events, which are cross-browser wrappers around native events.
    Events in React are written in camelCase instead of lowercase like in HTML.
    Instead of strings, event handlers are passed as functions.

Key Points
   Event handlers are functions defined inside the component.
   You can pass arguments to event handlers if needed.
   React automatically binds this in functional components (for class components, you may need to bind manually).
   Common events include: onClick, onChange, onSubmit, onMouseEnter, etc.
