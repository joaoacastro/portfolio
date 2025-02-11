import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="apresentation">
      <div className="HiThere">
        <img
          src="https://readme-typing-svg.herokuapp.com?font=Ubuntu&weight=500&size=40&pause=1000&color=15F72A&center=true&vCenter=true&width=635&height=80&lines=Hi+there!+👋;Welcome+to+my+Portfolio+page+😁"
          alt="Typing SVG"
        />
      </div>
      <hr/>
      <div className="title">
        <h1>João Antônio de Castro</h1>
        <h2>
          {" "}
          <p>&lt; Web Developer /&gt;</p>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Home;
