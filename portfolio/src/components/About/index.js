import React from "react";
import background from "../../assets/home-page/IMG_3163.jpg";

function About() {
  return (
    <section>
      
      <img src={background} style={{ width: "6%", padding: "5px"  }} alt="pic of Travis" />
      <h2 className="title-info">Full Stack Developer</h2>
      <p className="paragraph-descrption">
       And Diagnostic Medical Sonographer<br/><br/>
       Based in Austin, Texas<br/><br/>
       Available for Full-Time or Contract. In Office or Remote.

      </p>
    </section>
  );
}
export default About;
