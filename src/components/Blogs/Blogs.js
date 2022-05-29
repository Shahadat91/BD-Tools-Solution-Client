import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h5>
          Q-1: How will you improve the performance of a React Application?
        </h5>
        <p>
          Optimizing performance in a React application 1. Keeping component
          state local where necessary. 2. Memoizing React components to prevent
          unnecessary re-renders. 3. Code-splitting in React using dynamic
          import() 4. Windowing or list virtualization in React. 5. Lazy loading
          images in React.
        </p>
      </div>
      <div>
        <h5>
          Q-2: What are the different ways to manage a state in a React
          application?
        </h5>
        <p>
          There are four main types of state you need to properly manage in your
          React apps: Local state. Global state. Server state. URL state.
        </p>
      </div>
      <div>
        <h5>Q-3: How does prototypical inheritance work?</h5>
        <p>
          In object-oriented programming, inheritance enables new objects to
          take on the properties of existing objects. A class that is used as
          the basis for inheritance is called a superclass or base class. A
          class that inherits from a superclass is called a subclass or derived
          class. React has a powerful composition model, and is recommend to use
          composition instead of inheritance to reuse code between components.
          However, there can be cases where inheritance is preferred to
          composition like reusing a particular functionality of a component
          than the component itself. In JavaScript, one of the ways to leverage
          inheritance is using extends keyword on the constructor function.
          Function that gets extended is the superclass class while the one
          extending is the subclass.
        </p>
      </div>
      <div>
        <h5>
          Q-4: You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h5>
        <p>The filter() method returns a new array of all the values in an array that matches the conditions of a function. If there is no match, the method returns an empty array. So, by using filter we can products by name.</p>
      </div>
      <div>
        <h5>Q-5: What is a unit test? Why should write unit tests?</h5>
        <p>
          UNIT TESTING is a type of software testing where individual units or
          components of a software are tested. The purpose is to validate that
          each unit of the software code performs as expected. Unit Testing is
          done during the development (coding phase) of an application by the
          developers. Unit Tests isolate a section of code and verify its
          correctness. A unit may be an individual function, method, procedure,
          module, or object.
        </p>
        <p>
          Unit testing allows software developers to actually think through the
          design of the software and what has to be done before they write the
          code. This can help them to stay focused and can also help them to
          create much better designs.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
