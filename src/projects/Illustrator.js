import React, { Component } from 'react';

class Illustrator extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">At Cal, we offer student-led courses called <a href="http://decal.org">DeCals</a>. Students usually take these classes to add 1-2 units to their courseload. I designed the Introduction to Photoshop and Illustrator course material by reading books and using online resources. Students with little to no experience are taught basic design principles through the use of Photoshop and Illustrator. I designed the course material from beginning to end. Each week consists of a 45 minute lecture about a tool or design principle followed by an hour long tutorial for students to practice their new knowledge.</p>
          <p className="reflections col-2">This class is how I initially got interested in the education space!</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">This is an example of 2nd class on the pen tool: the first hour was a lecture on the mechanics of the pen tool and the second hour was a Lichtenstein Pop Art tutorial.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="illustrator decal" src={require("../assets/images/illustrator/3.png")}/>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="illustrator decal" src={require("../assets/images/illustrator/4.png")}/>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="illustrator decal" src={require("../assets/images/illustrator/5.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">This next lesson is on the basics of using color and gradient in Illustrator.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="illustrator decal" src={require("../assets/images/illustrator/1.png")}/>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="illustrator decal" src={require("../assets/images/illustrator/2.png")}/>
        </div>


      </section>
    );
  }
}

export default Illustrator;
