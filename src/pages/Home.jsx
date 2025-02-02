import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <Link to="/detail/1">Detail1</Link>
      <Link to="/detail/2">Detail2</Link>
    </div>
  );
};

export default Home;
