# Create Element

const heading = React.createElement("h1", { id: "heading" }, "React ");

# JSX for create Element

const Title = () => <h1 className="head">React using jsx</h1>;

# Functional Component using JSX

// const HeadingComponent = function () {
// return (
// <div id="container">
// {Title()}
// <Title></Title>
// <Title />
// <h1 className="heading">Nameste</h1>
// </div>
// );
// };

# Food App

- Header
- -Logo
- -Nav-items
- -cart
- Body
- -Search
- -RestarantContainer
- -ResturantCard
- -Img
- -Name of Res, Star Rating, cuisine, delivery time
- Footer
- -Copyright
- -Links
- -Address
- -Contact
  \*/

Two types of Export/Import

1.Default Export/Import

export default Component;
import Component from "./path";

2.Named Export/Import

export const Component;
import Component from "./path";

# React Hooks

(Normal JS Utility function)
-useState() - Super Powerful state variables in react
-useEffect()

# Algorithm

-React uses Reconcilation Alogorithm( React Fiber)
-Virtual DOM is a representation of actual DOM
-Actual Dom is basically an Object

- Diff algorithm will find out the difference between previous and current virtual DOM

# 2 types routing in web apps

-Client Side Routing
-Server Side Routing

# Redux Toolkit

-Install @reduxjs/toolkit and react-redux
-Build our store
-connect our store to our app
-slice(cartSlice)
-dispatch(action)
-selector

# Types of testing (developer)

- Unit Testing --> testing one unit
  -Integration testing --> integrated parts testing
  -End to End Testing -e2e testing --> whole application

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- jest configuration--> npx jest --init
- Install jsdom library
- Install @bable/preset-react and include inside babel config file
- Install testing library - npm i -D @testing-library/jest-dom

#
