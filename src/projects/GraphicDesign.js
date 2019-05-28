import React, { Component } from 'react';

class GraphicDesign extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">I've taught a number of visual design workshops in the past. Each time, I try to iterate on a previous class. Most recently, I taught an Intro to Graphic Design Workshop at Khan Academy as a part of Tuesday Teaching Time (TTT)! The purpose of this workshop was to show non-designers that graphic design is based upon simple rules.</p>
          <p className="reflections col-2"></p>
        </div>
        <h2 className="large-spacer-top col-5">Shape, color, &amp; layout</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">I used shapes and Pixar characters to explain basic graphic design principles.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Shapes" src={require("../assets/images/graphic-design/shapes.jpeg")}/>
          </div>
          <p className="reflections col-2">Circles are friendly whereas squares are rigid and "angrier"</p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Showing the power of scale" src={require("../assets/images/graphic-design/monsters.gif")}/>
          </div>
          <p className="reflections col-2">This example shows the power of scale</p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Showing the power of scale" src={require("../assets/images/graphic-design/example.gif")}/>
          </div>
          <p className="reflections col-2">I usually have students create a basic illustration with shapes, color, and scale.</p>
        </div>

        <h2 className="large-spacer-top col-5">Emotions activity</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">To practice new graphic design principles, groups of students selected a random emotion to convey using simply shape, color, &amp;, layout! Here are some examples I made for the class. Try to guess what emotion they represent <span role="img" aria-label="scream">😱</span></p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Anger" src={require("../assets/images/graphic-design/anger.gif")}/>
          </div>
          <p className="reflections col-2">This example depicts anger.</p>
        </div>
        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Joy" src={require("../assets/images/graphic-design/joy.jpeg")}/>
          </div>
          <p className="reflections col-2">This example depicts joy.</p>
        </div>
        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Fear" src={require("../assets/images/graphic-design/fear.gif")}/>
          </div>
          <p className="reflections col-2">This example depicts fear.</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Students used sticky notes, scissors, and glue to craft their emotion. As a class, we tried to guess each emotion.</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Emotions" src={require("../assets/images/graphic-design/emotions.png")}/>
        </div>

        <h2 className="large-spacer-top col-5">Movie posters</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">For the remainder of the workshop, we created movie posters for Disney movies using the same principles. Students used Keynote to design their posters! Here's an example I provided for Ratatouille.</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Ratatuoille poster" src={require("../assets/images/graphic-design/ratatouille.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Here are some of the student made posters:</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Wall-E poster" src={require("../assets/images/graphic-design/walle.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Tangled poster" src={require("../assets/images/graphic-design/tangled.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Inside Out poster" src={require("../assets/images/graphic-design/inside-out.png")}/>
        </div>

      </section>
    );
  }
}

export default GraphicDesign;
