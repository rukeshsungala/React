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

/\*\*

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
