import React, { Component } from 'react';
import './Subpage.scss';
import './Illustration.scss';
import Sparkle from './components/Sparkle';
import { Link } from "react-router-dom";

class Illustration extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <div className="col-7">
            <div className="header-image illustration">
              <Sparkle />
            </div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">
            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/illustrations/project/cultural-values/">
                <div className="project-number col-1">
                  <h3>01</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Cultural values thumbnail" src="images/thumbs/thumb-cultural-values.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Illustrations</h6>
                  <h2>Cultural values</h2>
                  <p>In 2019, I was a part of the team at Khan Academy that redefined our company values. To celebrate the new values, I created a series of illustrations to represent each value.</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/illustrations/project/hogwarts/">
                <div className="project-number col-1">
                  <h3>02</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Hogwarts houses" src="images/thumbs/thumb-hogwarts.gif" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Illustrations</h6>
                  <h2>Harry Potter Hackweek</h2>
                  <p>Illustrations for our yearly Harry Potter hackathon.</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/illustrations/project/dottie/">
                <div className="project-number col-1">
                  <h3>03</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Dottie illustration" src="images/thumbs/thumb-dottie.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Illustrations</h6>
                  <h2>Have you seen my glasses?</h2>
                  <p>Children's book</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/illustrations/project/avatars/">
                <div className="project-number col-1">
                  <h3>04</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Avatars" src="images/thumbs/thumb-avatar.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Illustrations</h6>
                  <h2>Avatar redesign</h2>
                  <p>Explorations for revamping Khan Academy's avatar system.</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/illustrations/project/avatars/">
                <div className="project-number col-1">
                  <h3>05</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Doodles" src="images/thumbs/thumb-doodles.png" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Illustrations</h6>
                  <h2>Doodles</h2>
                  <p>Some doodles that don't fit into any category</p>
                </div>
              </Link>
            </li>

          </ul>
        </section>

      </div>
    );
  }
}

export default Illustration;
