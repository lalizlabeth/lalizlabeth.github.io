import React, { Component } from 'react';
import './Home.scss';
import Sparkle from './components/Sparkle';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <header className="header" style={{ padding: "48px 0" }}>
          <div className="header-text-wrapper nested">
            <h1 className="header-text col-4"><strong>Elizabeth Lin</strong> is a product designer &amp; aspiring princess.</h1>
            <p className="title-caption col-3">This site is still under construction, so pls send bugs my way <span role="img" aria-label="kissy emoji">😘!</span></p>
          </div>
          <div className="header-image-wrapper">
            <div className="header-image">
              <Sparkle />
            </div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">

            <li className="project col-4 nested" id="project-1">
              <Link className="project-link" to="/design/project/student-progress/">
                <div className="project-number col-1">
                  <h3>01</h3>
                </div>
                <div className="col-3">
                  <img className="project-thumb" alt="Student progress thumbnail" src="./images/thumbs/thumb-student-progress.png" />
                  <h6 className="active">Design</h6>
                  <h2>Defining student progress</h2>
                  <p>How can we help teachers to identify and fill student gaps in learning?</p>
                </div>
              </Link>
            </li>

            <li className="project col-4 nested" id="project-2" to="/design/project/review-game/">
              <Link className="project-link" to="/design/project/review-game/" style={{display:"block"}}>
                <div className="project-number col-4">
                  <h3>02</h3>
                </div>
                <div className="col-4">
                  <img className="project-thumb" alt="Review game thumbnail" src="images/thumbs/thumb-review-game.png" />
                  <h6 className="active">Design</h6>
                  <h2>Math review game</h2>
                  <p>How can we help teachers to identify and fill student gaps in learning?</p>
                </div>
              </Link>
            </li>

            <li className="project col-3 offset-2 nested" id="project-3">
              <Link className="project-link" to="/experiments/project/beauty/">
                <div className="project-number col-4">
                  <h3>03</h3>
                </div>
                <div className="col-3">
                  <img className="project-thumb" alt="What is beauty thumbnail" src="images/thumbs/thumb-beautiful.jpg" />
                  <h6 className="active">Experiments</h6>
                  <h2>What do we perceive as beautiful?</h2>
                  <p>My final showcase project at the School for Poetic Computation</p>
                </div>
              </Link>
            </li>

           <li className="project col-4 nested" id="project-4">
            <Link className="project-link" to="/experiments/project/fashion-avgs/">
              <div className="project-number col-2">
                <h3>04</h3>
                <h6 className="active">Experiments</h6>
                <h2>Fashion averages</h2>
                <p>What's the average of fashion week?</p>
              </div>
              <div className="col-2">
                  <img className="project-thumb" alt="fashion experiments thumbnail" src="images/thumbs/thumb-fashion-avgs.jpg" />
              </div>
            </Link>
          </li>

          <li className="project col-5 nested" id="project-5">
            <Link className="project-link" to="/illustrations/project/cultural-values/">
              <div className="project-number col-1">
                <h3>05</h3>
              </div>
              <div className="col-4">
                <img className="project-thumb" alt="Cultural values thumbnail" src="images/thumbs/thumb-cultural-values.png" />
                <h6 className="active">Illustrations</h6>
                <h2>Cultural values</h2>
                <p>Illustrations for our new values!</p>
              </div>
            </Link>
          </li>

          <li className="project col-3 nested" id="project-6">
            <Link className="project-link" to="/design/project/design-systems/">
              <div className="project-number col-4">
                <h3>06</h3>
              </div>
              <div className="col-3">
                <img className="project-thumb" alt="Design systems thumbnail" src="images/thumbs/thumb-design-systems.png" />
                <h6 className="active">Design</h6>
                <h2>Design systems</h2>
                <p>Hi</p>
              </div>
            </Link>
          </li>

        </ul>
      </section>
    </div>
    );
  }
}

export default Home;
