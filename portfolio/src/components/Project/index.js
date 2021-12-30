import React from "react";

function Projects() {
  return (
    <div>
      <h1>Portfolio</h1>

      <section class="main-content">
        <div>
          <div class="my-info-container" id="my-work">
            <h2 class="section-me">Projects</h2>
            <a
              href="https://tygrski.github.io/soccer-finder/"
              target="_blank"
              alt="image of m pick-a-kick webpage"
            >
              <div class="soccer-finder">
                <h2>Pick-A-Kick</h2>
              </div>
            </a>

            <a
              href="https://github.com/ggamb/Beer-belly-developers-project-2/"
              target="_blank"
              alt="run-buddy waebpage image"
            >
              <div class="beer">
                <h3>
                  <span class="workrb">Beer Belly</span>
                </h3>
              </div>
            </a>

            <a
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
              href="https://github.com/tygrski/weatherDashboard/"
              target="_blank"
              alt="weather-dashboard"
            >
              <div class="weather">
                <h3>
                  <span class="workhr">Weather Dashboard</span>
                </h3>
              </div>
            </a>

            

            {/* this one is nopt displaying outside nav bar */}
            <a
              href="https://github.com/tygrski/budget-tracker-PWA/"
              target="_blank"
              alt="password-generator wabpage image"
            >
              <div class="password">
                <h3>
                  <span class="workhr">Password Generator</span>
                </h3>
              </div>
            </a>
            <a
              href="https://github.com/tygrski/Work-Task-List/"
              target="_blank"
              alt="Work-Task-List wabpage image"
            >
              <div class="work-task-list">
                <h3>
                  <span class="workhr">Work Task List</span>
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
