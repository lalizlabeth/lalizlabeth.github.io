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
                  <img className="project-thumb" alt="Teaching design" src="" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Teaching</h6>
                  <h2>Design to Learn; Learn to Design</h2>
                  <p>Description here</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/teaching/project/graphic-design/">
                <div className="project-number col-1">
                  <h3>01</h3>
                </div>
                <div className="col-3">
                  <img className="project-thumb" alt="Teaching design" src="" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Teaching</h6>
                  <h2>Intro to graphic design</h2>
                  <p>Description here</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/teaching/project/illustrator/">
                <div className="project-number col-1">
                  <h3>01</h3>
                </div>
                <div className="col-3">
                  <img className="project-thumb" alt="Teaching design" src="" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Teaching</h6>
                  <h2>Illustrator &amp; Photoshop</h2>
                  <p>Description here</p>
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
