import React from "react";
import background from "../../assets/home-page/IMG_3163.jpg";

function About() {
  return (
    <section>
      <h1 className="title">About Me</h1>
      <img src={background} style={{ width: "6%" }} alt="pic of Travis" />
      <h2 className="title-info">Full Stack Developer :</h2>
      <p className="paragraph-descrption">
        My skills include HTML 5, CSS, Javascrpit, JQuery, Bootstrap, APIs, Node
        JS, Jest , Express JS, mySQL, noSQL, Mongoose, and React.
      </p>
    </section>
  );
}
export default About;
