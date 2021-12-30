import React from "react";
import soccer from "../../assets/projects/pick-a-kick.jpg";
import beer from "../../assets/projects/beer-belly.jpg";



function Projects() {
  return (
    <div>
      <h1>My Portfolio</h1>

      <section class="main-content">
        <div className="my-info-container" id="my-work">
          <div style={{background: `url(${soccer})`, width:"15%", height:"60%",  backgroundSize: 'cover',
            overflow: 'hidden',   }}>
           <a
              href="https://github.com/tygrski/soccer-finder"
              target="_blank"
              alt="image of m pick-a-kick webpage"
            >
              <h2>Pick-A-Kick</h2>
            </a>
          </div>

          <div style={{background: `url(${beer})`, width:"15%", height:"60%",  backgroundSize: 'cover',
            overflow: 'hidden',   }}>
           <a
              href="https://github.com/tygrski/soccer-finder"
              target="_blank"
              alt="image of m pick-a-kick webpage"
            >
              <h2>Beer-Belly</h2>
            </a>
          </div>

          <div style={{background: `url(${soccer})`, width:"15%", height:"60%",  backgroundSize: 'cover',
            overflow: 'hidden',   }}>
           <a
              href="https://github.com/tygrski/soccer-finder"
              target="_blank"
              alt="image of m pick-a-kick webpage"
            >
              <h2>Pick-A-Kick</h2>
            </a>
          </div>
          <div style={{background: `url(${soccer})`, width:"15%", height:"60%",  backgroundSize: 'cover',
            overflow: 'hidden',   }}>
           <a
              href="https://github.com/tygrski/soccer-finder"
              target="_blank"
              alt="image of m pick-a-kick webpage"
            >
              <h2>Pick-A-Kick</h2>
            </a>
          </div>
          <div style={{background: `url(${soccer})`, width:"15%", height:"60%",  backgroundSize: 'cover',
            overflow: 'hidden',   }}>
           <a
              href="https://github.com/tygrski/soccer-finder"
              target="_blank"
              alt="image of m pick-a-kick webpage"
            >
              <h2>Pick-A-Kick</h2>
            </a>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Projects;
