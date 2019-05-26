import React, { Component } from 'react';
import './Teaching.scss';
import Sparkle from './components/Sparkle';
import { Link } from "react-router-dom";

class Teaching extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <div className="col-7">
            <div className="header-image teaching">
              <Sparkle />
            </div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">
            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/teaching/project/design-to-learn/">
                <div className="project-number col-1">
                  <h3>01</h3>
                </div>
                <div className="col-3">
                  <img className="project-thumb" alt="Teaching design, design to learn talk" src="images/thumbs/thumb-design-talk.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Teaching</h6>
                  <h2>Design to learn, learn to design</h2>
                  <p>A talk I gave in 2019 about my journey from learning to unlearning design.</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/teaching/project/graphic-design/">
                <div className="project-number col-1">
                  <h3>02</h3>
                </div>
                <div className="col-3">
                  <img className="project-thumb" alt="Graphic design thumbnail" src="images/thumbs/thumb-graphic-design.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Teaching</h6>
                  <h2>Intro to graphic design</h2>
                  <p>My favorite classes to teach are intro to visual design classes because they're a great way for people to get interested in design!</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/teaching/project/illustrator/">
                <div className="project-number col-1">
                  <h3>03</h3>
                </div>
                <div className="col-3">
                  <img className="project-thumb" alt="Illustrator thumbnail" src="images/thumbs/thumb-illustrator.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Teaching</h6>
                  <h2>Illustrator &amp; Photoshop</h2>
                  <p>In college, I developed an introduction to illustrator &amp; photoshop DeCal, courses that students can take for 1-2 units.</p>
                </div>
              </Link>
            </li>
          </ul>
        </section>

      </div>
    );
  }
}

export default Teaching;
