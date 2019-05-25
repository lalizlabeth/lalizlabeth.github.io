import React, { Component } from 'react';
import './Project.scss';
import { Link } from "react-router-dom";

import beautyHeader from '../assets/images/beauty/cover.jpg';
import culturalValuesHeader from '../assets/images/cultural-values/cover.png';
import designSystemsHeader from '../assets/images/design-systems/cover.png';
import dottieHeader from '../assets/images/dottie/cover.png';
import exercisesHeader from '../assets/images/exercises/cover.png';
import fashionAveragesHeader from '../assets/images/fashion-avgs/cover.jpg';
import hogwartsHeader from '../assets/images/hogwarts/cover.gif';
import reviewGameHeader from '../assets/images/thumbs/thumb-review-game.png';
import sephoraHeader from '../assets/images/sephora/cover.jpg';
import studentProgressHeader from '../assets/images/thumbs/thumb-student-progress.png';

import Beauty from '../projects/Beauty';
import CulturalValues from '../projects/CulturalValues';
import DesignSystems from '../projects/DesignSystems';
import Dottie from '../projects/Dottie';
import Exercises from '../projects/Exercises';
import FashionAverages from '../projects/FashionAverages';
import Hogwarts from '../projects/Hogwarts';
import ReviewGame from '../projects/ReviewGame';
import SephoraSorting from '../projects/SephoraSorting';
import StudentProgress from '../projects/StudentProgress';


class ProjectContainer extends Component {

  _getProjectName = (project) => {
    const path = this.props.match.params.id;
    return (path);
  };

  render() {
    const projectPath = this._getProjectName(this.path);
    var project

    switch (projectPath) {
      case "beauty":
        project =
        (<Project
          title="What do we perceive as beautiful?"
          header={beautyHeader}
          description="An interactive installation questioning our assumptions about beauty standards."
          body=<Beauty/>/>)
        break;
      case "cultural-values":
        project =
        (<Project
          title="Cultural values"
          header={culturalValuesHeader}
          description="Designing Khan Academy's new cultural values."
          body=<CulturalValues/>/>)
        break;
      case "design-systems":
        project =
        (<Project
          title="Design systems"
          header={designSystemsHeader}
          description="This case study is an overview of the different components I worked on at Khan Academy."
          body=<DesignSystems/>/>)
        break;
      case "dottie":
        project =
        (<Project
          title="Have you seen my glasses?"
          header={dottieHeader}
          description="Children's Book thing"
          body=<Dottie/>/>)
        break;
      case "exercises":
        project =
        (<Project
          title="Exercise mechanics"
          header={exercisesHeader}
          description="Motivating students to learn by creating "
          body=<Exercises/>/>)
        break;
      case "fashion-avgs":
        project =
        (<Project
          title="Fashion averages"
          header={fashionAveragesHeader}
          description="Who is the average of fashion week?"
          body=<FashionAverages/>/>)
        break;
      case "hogwarts":
        project =
        (<Project
          title="Harry Potter Hackaweek"
          header={hogwartsHeader}
          description="Branding for Khan Academy's yearly Harry Potter hackathon."
          body=<Hogwarts/>/>)
        break;
      case "review-game":
        project =
        (<Project
          title="In-class review game"
          header={reviewGameHeader}
          description="How can we help teachers identify and fill student gaps in learning?"
          body=<ReviewGame/>/>)
        break;
      case "sephora":
        project =
        (<Project
          title="The undiversity of makeup"
          header={sephoraHeader}
          description="Surfacing the lack of diversity in Sephora's make up aisle."
          body=<SephoraSorting/>/>)
        break;
      case "student-progress":
        project =
        (<Project
          title="Defining student progress"
          header={studentProgressHeader}
          description="How might we enable teachers to identify &amp; fill student gaps in learning?"
          body=<StudentProgress/>/>)
        break;
      default:
    }

    return (
      <div className="col-7 offset-3 nested" style={{padding: "2vw 0"}}>
        {project}
      </div>
    )
  }

}

class Project extends Component {
  render() {
    return (
      <div>
        <header className="col-7 nested">
          <div className="col-7">
            <img className="image project-header" alt={this.props.title} src={this.props.header}></img>
          </div>
          <h1 className="col-7 project-title"><strong>{this.props.title}</strong></h1>
          <h2 className="col-7 project-description">{this.props.description}</h2>
        </header>
        {this.props.body}
        <section className="col-8 nested offset-neg-1 next-shelf">
          <li className="project col-4 nested" to="/design/project/review-game/">
            <Link className="project-link" to="/design/project/review-game/">
              <div className="right-text col-1">
                <h6 className="active">Previous</h6>
              </div>
              <div className="col-3">
                <h2>Math review game</h2>
              </div>
            </Link>
          </li>
          <li className="project col-4 nested" to="/design/project/review-game/">
            <Link className="project-link" to="/design/project/review-game/">
              <div className="right-text col-3">
                <h2>Another project title</h2>
              </div>
              <div className="next-shelf-label col-1">
                <h6 className="active">Next</h6>
              </div>
            </Link>
          </li>
        </section>
      </div>
    );
  }
}

export default ProjectContainer;
