import React, { Component } from 'react';

class Exercises extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Khan Academy exercises used to be demotivating for students because they had to get N-in-a-row correct in order to move on. N-in-a-row was a good way to test for student mastery, but not a great mechanic for practice.</p>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Old exercise UI" src={require("../assets/images/exercises/old-1.jpeg")}/>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Old exercise UI" src={require("../assets/images/exercises/old-2.jpeg")}/>
        </div>
    </section>
    );
  }
}

export default Exercises;
