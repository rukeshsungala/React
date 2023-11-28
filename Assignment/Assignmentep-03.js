// import React from "react";
// import ReactDOM from "react-dom";

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const header = React.createElement("div", { id: "header" }, [
//   React.createElement("h1", {}, "this is h1 tag"),
//   React.createElement("h2", {}, "this is h2 tag"),
//   React.createElement("h3", {}, "this is h3 tag"),
// ]);

// Q: Create the same element using JSX

// const header = (
//   <div className="Title">
//     <h1 key={"h1"}>This is h1 tag</h1>
//     <h2 key={"h2"}>This is h2 tag</h2>
//     <h3 key={"h3"}>This is h3 tag</h3>
//   </div>
// );

// Q: Create a functional component of the same with JSX
// const Header = function () {
//   return (
//     <div className="Title">
//       <h1 key={"h1"}>This is h1 tag</h1>
//       <h2 key={"h2"}>This is h2 tag</h2>
//       <h3 key={"h3"}>This is h3 tag</h3>
//     </div>
//   );
// };

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src="logo" alt="Logo" />
      </div>
      <div className="center">
        <input
          className="input"
          type="text"
          placeholder="Search for anything you want...."
        />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div className="right">
        <img src="usericon" alt="User Icon" />
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
