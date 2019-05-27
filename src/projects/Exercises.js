import React, { Component } from 'react';

class Exercises extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Khan Academy exercises used to be demotivating for students because they had to get N-in-a-row correct in order to move on. N-in-a-row was a good way to test for student mastery, but not a great mechanic for practice. Below are a couple screenshots of the old exercise UI.</p>
          <p className="reflections col-2">For most exercises, students had to get 5 in a row correctly to move on. If they got the 5th question incorrect, students have to start over <span role="img" aria-label="sob">😭</span></p>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Old exercise UI" src={require("../assets/images/exercises/old-1.jpeg")}/>
        </div>
        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Old exercise UI" src={require("../assets/images/exercises/old-2.jpeg")}/>
          </div>
          <p className="reflections col-2">This was the end state of an exercise, a set of ~7 questions. Students didn't feel very satisfied when they reached the end of task card because it wasn't fun or celebratory.</p>
        </div>

        <h2 className="large-spacer-top col-5">The proposal</h2>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">The leadership team gave us the following proposal to work with because they wanted to solve this problem within the span of two months! If given more time, our team would have wanted to conduct additional research about the pedagogy behind good practice mechanics.</p>
          <p className="reflections col-2">This project was a last minute request from the leadership team, so we didn't much time to push back before starting.</p>
        </div>
        <ol className="text-list medium-spacer-bottom col-5">
          <li>Change the exercise mechanics to Do-N</li>
          <li>Allow students to move on if they're stuck</li>
          <li>To complete an exercise, a student must receive 70%</li>
        </ol>

        <h2 className="large-spacer-top col-5">The question indicator</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">To start, I decided to tackle (#1) change the exercise mechanics to Do-N. In order to change the exercise mechanics, I had to rethink the question indicator, a persistent bar that shows the history of correctness and incorrectness. The old question indicator was designed for a non discrete number of problems. Below are various explorations:</p>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Exercise indicator" src={require("../assets/images/exercises/indicator-a.jpeg")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Exercise indicator" src={require("../assets/images/exercises/indicator-b.jpeg")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">We went with column C because it flexes for mobile and also shows a discrete number questions. We wanted students to be able to easily count how many more questions they had to complete!</p>

        <h2 className="large-spacer-top col-5">Skipping questions</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">Next, we needed to allow students to move on if they're stuck (#2). In the old experience, students had to keep trying a question until they got it correct.</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Skipping questions" src={require("../assets/images/exercises/skip-1.jpeg")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">In the new experience, we wanted to encourage students to Try Again, but we also didn't want to force them to. Below, you'll notice that "Or move on to the next question" is less loud than "Try again"!</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Skipping questions" src={require("../assets/images/exercises/skip-2.jpeg")}/>
        </div>

        <h2 className="large-spacer-top col-5">The celebration!</h2>

        <p className="large-paragraph medium-spacer-bottom col-5">Finally, we needed to communicate that receiving 70% means you completed the exercise (#3)! In addition, we wanted to make the entire experience feel rewarding. Here are some initial celebratory iterations:</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="End card explorations" src={require("../assets/images/exercises/end-card-explorations.gif")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Below is an iteration for showcasing growth. We wanted students to reach at least 70% and strive for 100%.</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="End card explorations" src={require("../assets/images/exercises/growth.gif")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Although this exploration showcased growth, students found it difficult to understand <strong>how</strong> to get completion. Students really wanted to know how many more questions they needed to get right.</p>

        <p className="large-paragraph medium-spacer-bottom col-5">We went back to the drawing board and looked at the entire flow. In the content library, all exercises are denoted with a star icon. When the exercise is completed, the icon turns blue!</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Unit page" src={require("../assets/images/exercises/unit-page.jpeg")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">We brainstormed ways we could tie the star, a display of completion, with the question indicator, a display of correctness!</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Unit page" src={require("../assets/images/exercises/dots.gif")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">The explorations above didn't test well with students because we reorder of the question dots. We also tried to use motion, but students were still confused by the dot becoming a star.</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Unit page" src={require("../assets/images/exercises/exercise.gif")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">At the same time, we explored less feasible options just for fun to see what we could do in the future!</p>

        <div className="col-5 medium-spacer-bottom">
          <video className="project-image" alt="cracker exploration" src={require("../assets/images/exercises/cracker.mov")} muted autoPlay loop/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <video className="project-image" alt="car exploration" src={require("../assets/images/exercises/vroom-vroom.mov")} muted autoPlay loop/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <video className="project-image" alt="sparkle with avatar" src={require("../assets/images/exercises/sparkles.mov")} muted autoPlay loop/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Here's the final end card. We decided not to reorder the dots from correct to incorrect, so that it more clearly mapped back to the question indicator. The dark blue background made the green seem more fun and rewarding! Furthermore, only the star fills in when a student reaches 70%. In order to fill the ring and get confetti, a student has to get 100%!</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Unit page" src={require("../assets/images/exercises/final.gif")}/>
        </div>

        <h2 className="large-spacer-top col-5">Next steps</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">This project was successful in optimizing for practice in the library, but now we want to create a system that allows students to demonstrate mastery.</p>

    </section>
    );
  }
}

export default Exercises;
