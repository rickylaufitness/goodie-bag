import React from "react";
import Candies from "./Candies";
import { Link, Route } from "react-router-dom";

export const Root = props => {
  return (
    <div>
      <nav>
        Goodie Bag
        <Link to="/candies">Candies</Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Route path="/candies" component={Candies} />
      </main>
    </div>
  );
};

export default Root;
