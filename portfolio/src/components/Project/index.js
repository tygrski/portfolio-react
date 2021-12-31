import React from "react";

function Projects() {
  return (
    <div>
      

      <section class="main-content">
        <h2 class="section-project">Projects</h2>
        <div class="my-info-container" id="my-work">
          <a
            className="portfolio-link"
            href="https://github.com/ggamb/Beer-belly-developers-project-2/"
            target="_blank"
            alt="run-buddy waebpage image"
          >
            <div class="beer">
              <h3>
                <span class="workhr">Beer Belly</span>
              </h3>
              <a href="https://beer-belly.herokuapp.com/" target="_blank">Live link</a>
            </div>
          </a>

          <a
            className="portfolio-link"
            href="https://github.com/tygrski/soccer-finder"
            target="_blank"
            alt="image of m pick-a-kick webpage"
          >
            <div class="soccer-finder">
            <h3>
                <span class="workhr">Pick-A-Kick</span>
              </h3>
              <a href="https://tygrski.github.io/soccer-finder/" target="_blank">Live link</a>
            </div>
          </a>

          <a
            className="portfolio-link"
            href="https://github.com/tygrski/budget-tracker-PWA/"
            target="_blank"
            alt="budget-tracker image"
          >
            <div class="budget">
              <h3>
                <span class="workhr">Budget Tracker</span>
              </h3>
            </div>
          </a>

          <a
            className="portfolio-link"
            href="https://github.com/tygrski/weatherDashboard/"
            target="_blank"
            alt="weather-dashboard"
          >
            <div class="weather">
              <h3>
                <span class="workhr">Weather Dashboard</span>
              </h3>
              <a href="https://tygrski.github.io/weatherDashboard/" target="_blank">Live link</a>
            </div>
          </a>

          <a
            className="portfolio-link"
            href="https://github.com/tygrski/Work-Task-List/"
            target="_blank"
            alt="Work-Task-List wabpage image"
          >
            <div class="work-task-list">
              <h3>
                <span class="workhr">Work Task List</span>
              </h3>
              <a href="https://tygrski.github.io/Work-Task-List/" target="_blank">Live link</a>
            </div>
          </a>
          <a
            className="portfolio-link"
            href="https://github.com/tygrski/Password-Generator/"
            target="_blank"
            alt="password-generator wabpage image"
          >
            <div class="password">
              <h3>
                <span class="workhr">Password Generator</span>
              </h3>
              <a href="https://tygrski.github.io/Password-Generator/" target="_blank">Live link</a>
            </div>
          
          </a>
          
        </div>
      </section>
    </div>
  );
}

export default Projects;
