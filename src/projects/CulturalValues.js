import React, { Component } from 'react';

class CulturalValues extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">I was a part of the team that redefined Khan Academy's set of cultural values. With a growing company, we wanted to craft new values that better reflected our team today and where we want to be. In this case study, I'll be focusing on the graphics we developed for each value. These are the set of values we settled on:</p>
          <p className="reflections col-2">This timeline was pretty tight because we only had 1 week to design before production <span role="img" aria-label="scream">😱</span></p>
        </div>

        <div className="text-group">
          <ul className="text-list medium-spacer-bottom col-5">
            <li>Live &amp; breathe learners</li>
            <li>Take a stand</li>
            <li>Embrace diverse perpsectives</li>
            <li>Work responsibly &amp; sustainably</li>
            <li>Bring out the joy</li>
            <li>Cultivate learning mindsets</li>
            <li>Deliver wow</li>
          </ul>
          <p className="reflections col-2">Originally, some of these phrases were a mouthful. For example, "Deliver wow" was "Deliver world-class; effective results." Through showing some early poster designs, I convinced the team to make the phrases pithier!</p>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">For the rollout, we wanted to create illustrations and visuals that would help people remember and embody the new values. To start, we did a word association exercise to brainstorm what visuals might match the set of values:</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Word association" src={require("../assets/images/cultural-values/word-association.png")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Following the brainstorm, we all sketched ideas based upon the word associations.</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Old teacher dashboard" src={require("../assets/images/cultural-values/sketches.png")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">After sketching, I took our ideas and translated them in Illustrator:</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Old teacher dashboard" src={require("../assets/images/cultural-values/together-v1.png")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">I received some feedback that certain graphics were too busy and cluttered making them difficult to comprehend, so I simplified the illustrations for the next version:</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Old teacher dashboard" src={require("../assets/images/cultural-values/together-v2.png")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">With the graphics, I designed posters for office decorations.</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" style={{ background: "white" }} alt="Old teacher dashboard" src={require("../assets/images/cultural-values/value-poster-1.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" style={{ background: "white" }} alt="Old teacher dashboard" src={require("../assets/images/cultural-values/value-poster-2.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" style={{ background: "white" }} alt="Old teacher dashboard" src={require("../assets/images/cultural-values/value-poster-3.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" style={{ background: "white" }} alt="Old teacher dashboard" src={require("../assets/images/cultural-values/value-poster-4.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" style={{ background: "white" }} alt="Old teacher dashboard" src={require("../assets/images/cultural-values/value-poster-5.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" style={{ background: "white" }} alt="Old teacher dashboard" src={require("../assets/images/cultural-values/value-poster-6.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" style={{ background: "white" }} alt="Old teacher dashboard" src={require("../assets/images/cultural-values/value-poster-7.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" style={{ background: "white" }} alt="Old teacher dashboard" src={require("../assets/images/cultural-values/values-posters-photo-1.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" style={{ background: "white" }} alt="Old teacher dashboard" src={require("../assets/images/cultural-values/values-posters-photo-2.png")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">We also designed sticker sheets as gifts for the team!</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" style={{ background: "white" }} alt="Old teacher dashboard" src={require("../assets/images/cultural-values/stickers.png")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">As part of the rollout, these icons also became slack emojis, so that people can react to posts that exemplify the values!</p>
        </div>

    </section>
    );
  }
}

export default CulturalValues;
