import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <Link to="/detail/1">Detail</Link>
    </div>
  );
};

export default Home;
