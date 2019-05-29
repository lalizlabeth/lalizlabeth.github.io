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
            <li className="project col-8 nested">
              <Link className="project-link fixed" to="/design/project/student-progress/">
                <div className="project-number col-1">
                  <h3>01</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Khan Academy's teacher progress page with a grid of scores" src="images/thumbs/thumb-student-progress.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Defining student progress</h2>
                  <p>How can we help teachers identify and fill student gaps in learning?</p>
                </div>
              </Link>
            </li>
            <li className="project col-8 nested">
              <Link className="project-link fixed" to="/design/project/review-game/">
                <div className="project-number col-1">
                  <h3>02</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="A review game prototype with a math problem in the center and flowers on both sides symbolizing the different teams" src="images/thumbs/thumb-review-game.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Math review game</h2>
                  <p>How can we make an engaging in-class review game for classrooms?</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested">
              <Link className="project-link fixed" to="/design/project/design-systems/">
                <div className="project-number col-1">
                  <h3>03</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="A collage with a dog, cloud, and two party hats on a bright yellow background" src="images/thumbs/thumb-design-systems.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Design systems</h2>
                  <p>A overview of the different components I worked on at Khan Academy.</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested">
              <Link className="project-link fixed" to="/design/project/exercises/">
                <div className="project-number col-1">
                  <h3>04</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="A screenshot of Khan Academy's exercise interface with a large star and 7 dots underneath" src="images/thumbs/thumb-exercises.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Exercise redesign</h2>
                  <p>How can we make learning more fun and motivational for students?</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested">
              <Link className="project-link fixed" to="/design/project/monsterz/">
                <div className="project-number col-1">
                  <h3>05</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="A blue monster wearing sunglasses and headphones listening to tunes" src="images/thumbs/thumb-monsterz.jpg" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Design</h6>
                  <h2>Monsterz game</h2>
                  <p>A puzzle game for iOS inspired by Set featuring some cute monsters.</p>
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
