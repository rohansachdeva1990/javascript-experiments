# Functional Programming

--

Functional Programming in a Nutshell is about decomposing a problem
into a bunch of small and reusable functions that take some input and
return a result.

They don't mutate or change the data. With this structure we can compose
these functions to build more complex functions.

Benefits:-

- More concise
- Easier to debug
- Easier to test
- More scalable (because we can run many function in parallel and take on the
  advantage many CPU cores)

In JS:-

1. Functions as First-class Citizens, which means

   - We can treat them like any other variablee
   - Pass them as arguments
   - Return them from other functions

2. Higher Order Functions

   - A higher order function is a function that takes a function as an argument or returns it or both.

3. Function Composition
4. Composing and Piping
5. Currying

   - Allows us to take a function that has N arguments and convert it to a function that has a single argument
   - With currying, instead of separating our arguments with comma we separate them using parenthesis

6. Pure Functions

   - A function is pure, if everytime we call a function and give it the same arguments, it always returns the same result.
   - No random values
   - No current date/time
   - No global state (DOM, files, db etc)
   - No mutation of parameters
   - Some Benefits;
     - Self-documenting
     - Easily testable
     - Concurrency
     - Cacheable ??

7. Immutable

   - Once created cannot be changed
   - In JS, object and arrays are not immutable, whether it be const or let
   - We always create new object, when dealing with immutability
   - Why immutable (Pros)
     - Predictability
     - Faster Change Detection
     - Concurrency
   - Some Cons

     - Performance
     - Memory

   - Updating objects
   - Updating arrays
   - Popular libraries enforcing immutability:-
     - Immutable (by FB)
     - Immer (by MobX)
     - Mori
