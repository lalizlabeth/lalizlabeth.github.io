import React, { Component } from 'react';
import './Design.scss';
import Sparkle from './components/Sparkle';
import { Link } from "react-router-dom";

class Design extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0", marginBottom: "48px"}}>
          <div className="col-7">
            <div className="header-image design">
              <Sparkle />
            </div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">
            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/design/project/student-progress/">
                <div className="project-number col-1">
                  <h3>01</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Student progress thumbnail" src="images/thumbs/thumb-student-progress.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Defining student progress</h2>
                  <p>How can we help teachers to identify and fill student gaps in learning?</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/design/project/review-game/">
                <div className="project-number col-1">
                  <h3>02</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Review game thumbnail" src="images/thumbs/thumb-review-game.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Math review game</h2>
                  <p>How can we help teachers to identify and fill student gaps in learning?</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/design/project/design-systems/">
                <div className="project-number col-1">
                  <h3>03</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Design systems thumbnail with icons inside" src="images/thumbs/thumb-design-systems.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Design systems</h2>
                  <p>This case study is an overview of the different components I worked on at Khan Academy.</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested">
              <Link className="project-link" to="/design/project/exercises/">
                <div className="project-number col-1">
                  <h3>04</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Review game thumbnail" src="images/thumbs/thumb-exercises.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Exercise redesign</h2>
                  <p>How can we make learning more fun and motivational for students?</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested">
              <Link className="project-link" to="/design/project/monsterz/">
                <div className="project-number col-1">
                  <h3>05</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Monsterz game thumbnail" src="images/thumbs/thumb-monsterz.jpg" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Monsterz game</h2>
                  <p>A puzzle game inspired by Set.</p>
                </div>
              </Link>
            </li>
          </ul>
        </section>

      </div>
    );
  }
}

export default Design;
