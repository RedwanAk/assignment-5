


- Also answer these React questions at the end of your Readme (write the answers in your own words, short and simple):
  1. What is JSX, and why is it used in React?
  2. What is the difference between props and state?
  3. What does the `useState` hook do, and where did you use it in this project?
  4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
  5. Why does every item in a `.map()` list need a unique `key` prop?
  6. What is conditional rendering? Show one place you used it (example: the empty stack message).
  7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?



  <!-- Answers -->
 
  1. `JSX` is a syntax extension for JavaScript that lets us write HTML-like markup directly inside JavaScript files.
  
  2. `Props` are read-only inputs passed from a parent component and `State` is dynamic data managed internally by the component itself.
  
  3. `useState` stores and updates changing data in a React component. In this project, it is used in `Technologies.tsx` to track the technologies selected by the user in `selectedTechs`.
  
  4. `useEffect` runs side effects such as fetching data after a component renders. However, this project does not use `useEffect` it loads `data.json` with `fetch()` and React’s `use()` hook instead.

  5. Each item needs a unique `key` so React can identify it, track changes, and update the list efficiently when items are added, removed, or changed.

  6. Conditional rendering means showing different UI based on a condition. In this project, when `selectedTechs.length === 0` it displays “Your stack is empty.” otherwise it shows the selected technologies.

  7. A parent passes data to a child through props. The child can send data back by calling a callback function that the parent passes as a prop.
