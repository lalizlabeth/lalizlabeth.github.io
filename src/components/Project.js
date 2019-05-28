import React, { Component } from 'react';
import './Project.scss';
import { Link } from "react-router-dom";

import avatarRedesignHeader from '../assets/images/avatar-redesign/cover.png';
import beautyHeader from '../assets/images/beauty/cover.jpg';
import culturalValuesHeader from '../assets/images/cultural-values/cover.png';
import designSystemsHeader from '../assets/images/design-systems/cover-2.png';
import designToLearnHeader from '../assets/images/design-to-learn/cover.png';
import doodleDumpHeader from '../assets/images/doodle-dump/cover.gif';
import dottieHeader from '../assets/images/dottie/cover.png';
import exercisesHeader from '../assets/images/exercises/cover.png';
import fashionAveragesHeader from '../assets/images/fashion-avgs/cover.jpg';
import graphicDesignHeader from '../assets/images/graphic-design/cover.gif';
import hogwartsHeader from '../assets/images/hogwarts/cover.gif';
import illustratorHeader from '../assets/images/illustrator/cover.png';
import monsterzHeader from '../assets/images/monsterz/cover.jpg';
import reviewGameHeader from '../assets/images/thumbs/thumb-review-game.png';
import sephoraHeader from '../assets/images/sephora/cover.jpg';
import studentProgressHeader from '../assets/images/thumbs/thumb-student-progress.png';

import AvatarRedesign from '../projects/AvatarRedesign';
import Beauty from '../projects/Beauty';
import CulturalValues from '../projects/CulturalValues';
import DesignSystems from '../projects/DesignSystems';
import DesignToLearn from '../projects/DesignToLearn';
import DoodleDump from '../projects/DoodleDump';
import Dottie from '../projects/Dottie';
import Exercises from '../projects/Exercises';
import FashionAverages from '../projects/FashionAverages';
import GraphicDesign from '../projects/GraphicDesign';
import Hogwarts from '../projects/Hogwarts';
import Illustrator from '../projects/Illustrator';
import Monsterz from '../projects/Monsterz';
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
      case "avatar-redesign":
        project =
        (<Project
          title="Avatar redesign"
          header={avatarRedesignHeader}
          description="Explorations for revamping Khan Academy's avatar system."
          body=<AvatarRedesign/>
          prev_title="Have you seen my glasses?"
          prev_link="/illustration/project/dottie/"
          next_title="Doodles"
          next_link="/illustration/project/doodles/"/>)
        break;
      case "beauty":
        project =
        (<Project
          title="What do we perceive as beautiful?"
          header={beautyHeader}
          description="An interactive installation questioning our assumptions about beauty standards."
          body=<Beauty/>
          prev_title="Math review game"
          prev_link="/design/project/review-game/"
          next_title="Fashion averages"
          next_link="/experiments/project/fashion-avgs/"/>)
        break;
      case "cultural-values":
        project =
        (<Project
          title="Cultural values"
          header={culturalValuesHeader}
          description="Designing Khan Academy's new cultural values."
          body=<CulturalValues/>
          prev_title="Design systems"
          prev_link="/design/project/design-systems/"
          next_title="Defining student progress"
          next_link="/design/project/student-progress/"/>)
        break;
      case "design-systems":
        project =
        (<Project
          title="Design systems"
          header={designSystemsHeader}
          description="This case study is an overview of the different components I worked on at Khan Academy."
          body=<DesignSystems/>
          prev_title="Fashion averages"
          prev_link="/experiments/project/fashion-avgs/"
          next_title="Cultural values"
          next_link="/illustration/project/cultural-values"/>)
        break;
      case "design-to-learn":
        project =
        (<Project
          title="Design to learn, learn to design"
          header={designToLearnHeader}
          description="A talk I gave in 2019 about my journey from learning to unlearning design."
          body=<DesignToLearn/>
          prev_title="The undiversity of makeup"
          prev_link="/experiments/project/sephora/"
          next_title="Intro to graphic design"
          next_link="/teaching/project/graphic-design/"/>)
        break;
      case "doodle-dump":
        project =
        (<Project
          title="Doodle dump"
          header={doodleDumpHeader}
          description="Some random doodles that don't fit into any category!"
          body=<DoodleDump/>
          prev_title="Avatar redesign"
          prev_link="/illustration/project/avatar-redesign/"
          next_title="What do we perceive as beautiful?"
          next_link="/experiments/project/beauty/"/>)
        break;
      case "dottie":
        project =
        (<Project
          title="Have you seen my glasses?"
          header={dottieHeader}
          description="A children's book that teaches kids a bout art history."
          body=<Dottie/>
          prev_title="Harry Potter hackweek"
          prev_link="/illustration/project/hogwarts"
          next_title="Avatar redesign"
          next_link="/illustration/project/avatar-redesign/"/>)
        break;
      case "exercises":
        project =
        (<Project
          title="Exercise redesign"
          header={exercisesHeader}
          description="Rethinking Khan Academy's exercise mechanics to be more motivating and rewarding for students."
          body=<Exercises/>
          prev_title="Design systems"
          prev_link="/design/project/design-systems/"
          next_title="Monsterz"
          next_link="/design/project/monsterz/"/>)
        break;
      case "fashion-avgs":
        project =
        (<Project
          title="Fashion averages"
          header={fashionAveragesHeader}
          description="Who is the average of fashion week?"
          body=<FashionAverages/>
          prev_title="What do we perceive as beautiful?"
          prev_link="/experiments/project/beauty/"
          next_title="Design systems"
          next_link="/design/project/design-systems/"/>)
        break;
      case "graphic-design":
        project =
        (<Project
          title="Intro to graphic design"
          header={graphicDesignHeader}
          description="An introductory class to graphic design principles"
          body=<GraphicDesign/>
          prev_title="Design to learn, learn to design"
          prev_link="/teaching/project/design-to-learn/"
          next_title="Intro to Illustrator &amp; Photoshop"
          next_link="/teaching/project/illustrator/"/>)
        break;
      case "hogwarts":
        project =
        (<Project
          title="Harry Potter hackweek"
          header={hogwartsHeader}
          description="Branding for Khan Academy's yearly Harry Potter hackathon."
          body=<Hogwarts/>
          prev_title="Cultural values"
          prev_link="/illustration/project/cultural-values/"
          next_title="Have you seen my glasses?"
          next_link="/illustration/dottie/"/>)
        break;
      case "illustrator":
        project =
        (<Project
          title="Intro to Illustrator &amp; Photoshop"
          header={illustratorHeader}
          description="An introductory class to Adobe Illustrator and Photoshop."
          body=<Illustrator/>
          prev_title="Intro to graphic design"
          prev_link="/teaching/project/graphic-design/"
          next_title="Defining student progress"
          next_link="/design/student-progress/"/>)
        break;
      case "monsterz":
        project =
        (<Project
          title="Monsterz"
          header={monsterzHeader}
          description="A puzzle game for iOS inspired by Set featuring some cute monsters."
          body=<Monsterz/>
          prev_title="Exercise redesign"
          prev_link="/design/project/exercises/"
          next_title="Cultural values"
          next_link="/illustration/project/cultural-values/"/>)
        break;
      case "review-game":
        project =
        (<Project
          title="In-class review game"
          header={reviewGameHeader}
          description="How can we help teachers identify and fill student gaps in learning?"
          body=<ReviewGame/>
          prev_title="Defining student progress"
          prev_link="/design/project/student-progress/"
          next_title="What do we perceive as beautiful?"
          next_link="/experiments/project/beauty/"/>)
        break;
      case "sephora":
        project =
        (<Project
          title="The undiversity of makeup"
          header={sephoraHeader}
          description="Surfacing the lack of diversity in Sephora's make up aisle."
          body=<SephoraSorting/>
          prev_title="Fashion averages"
          prev_link="/experiments/project/fashion-avgs"
          next_title="Design to learn, learn to design"
          next_link="/teaching/project/design-to-learn/"/>)
        break;
      case "student-progress":
        project =
        (<Project
          title="Defining student progress"
          header={studentProgressHeader}
          description="How might we enable teachers to identify &amp; fill student gaps in learning?"
          body=<StudentProgress/>
          prev_title="Cultural values"
          prev_link="/illustration/project/cultural-values/"
          next_title="Math review game"
          next_link="/design/project/review-game/"/>)
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
      <div id="project-area">
        <header className="col-7 nested">
          <div className="col-7">
            <img className="image project-header" alt={this.props.title} src={this.props.header}></img>
          </div>
          <h1 className="col-7 project-title"><strong>{this.props.title}</strong></h1>
          <h2 className="col-7 project-description">{this.props.description}</h2>
        </header>
        {this.props.body}
        <section className="col-8 nested offset-neg-1 next-shelf">
          <li className="project col-4 nested prev-project">
            <Link className="shelf-project-link" to={this.props.prev_link}>
              <div className="col-1">
                <h6 className="active">Previous</h6>
              </div>
              <div className="col-3">
                <h2>{this.props.prev_title}</h2>
              </div>
            </Link>
          </li>
          <li className="project col-4 nested next-project"s>
            <Link className="shelf-project-link" to={this.props.next_link}>
              <div className="right-text col-3">
                <h2>{this.props.next_title}</h2>
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
