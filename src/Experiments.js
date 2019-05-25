import React, { Component } from 'react';
import './Experiments.scss';
import { Link } from "react-router-dom";

class Experiments extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <div className="col-7">
            <div className="header-image experiments">
            </div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">
            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/experiments/project/beauty/">
                <div className="project-number col-1">
                  <h3>01</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="What is beautiful thumbnail" src="images/thumbs/thumb-beautiful.jpg" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Experiments</h6>
                  <h2>What do we perceive as beautiful?</h2>
                  <p>My final showcase project at the School for Poetic Computation</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/experiments/project/fashion-avgs/">
                <div className="project-number col-1">
                  <h3>02</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Fashion averages thumbnail" src="images/thumbs/thumb-fashion.jpg" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Experiments</h6>
                  <h2>Fashion averages</h2>
                  <p>What is the average  model of fashion week?</p>
                </div>
              </Link>
            </li>

            <li className="project col-8 nested" id="project-1">
              <Link className="project-link" to="/experiments/project/sephora/">
                <div className="project-number col-1">
                  <h3>03</h3>
                </div>
                <div className="col-3 project-thumb-fixed">
                  <img className="project-thumb" alt="Sephora thumbnail" src="images/thumbs/thumb-sephora.jpg" />
                </div>
                <div className="col-3 project-title">
                  <h6 className="active">Experiments</h6>
                  <h2>Undiversity of makeup</h2>
                  <p>Surfacing the lack of diversity in Sephora's make up aisle</p>
                </div>
              </Link>
            </li>

          </ul>
        </section>

      </div>
    );
  }
}

export default Experiments;
