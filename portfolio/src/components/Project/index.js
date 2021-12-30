import React from "react";
// import soccer from "../../assets/projects/pick-a-kick.jpg";
// import beer from "../../assets/projects/beer-belly.jpg";



function Projects() {
  return (
    <div>
      <h1>My Portfolio</h1>

      <section class="main-content">
            <div>
               
                <div class="my-info-container" id="my-work">
                        <h2  class="section-me">Projects</h2>
                        <a href="https://tygrski.github.io/soccer-finder/" target="_blank" alt="image of m pick-a-kick webpage">
                            <div class="soccer-finder">
                                <h2>Pick-A-Kick</h2>
                            </div>
                        </a>
                        <a  href="https://tygrski.github.io/run-buddy/" target="_blank"  alt= "run-buddy waebpage image">
                        <div class="runbuddy">
                            <h3><span class="workrb">Beer Belly</span></h3>
                      </div>
                    </a>
                    <a href="https://tygrski.github.io/challenge1/" target="_blank" alt= "Hoiseon wabpage image">
                    <div class="horiseon">
                        <h3><span class="workhr">Horiseon</span></h3>
                    </div>
                </a>
                    <a href="https://tygrski.github.io/Portfolio/" target="_blank" alt="image of m portfolio webpage">
                    <div class="portfolio">
                        <h2>My portfolio</h2>
                    </div>
                </a>
                </div>
           
            
            </div>
        </section>
    </div>
  );
}

export default Projects;
