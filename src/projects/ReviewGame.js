import React, { Component } from 'react';

class ReviewGame extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph col-5">An engineer, user researcher, product manager, and I had the opportunity to research the classroom space and prototype how Khan Academy might fit into a teacher's workflow! This project spanned around 4 months from user research to concept testing.</p>
          <p className="reflections col-2">This is my favorite project from my time at KA! Sadly, it never got realized because of shifted company priorities.</p>
        </div>

        <h2 className="large-spacer-top col-5">Research</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">Going into the user research study, our hypothesis was that teachers want a homework replacement. We spoke to 13 mainstream math teachers in the US about their day-to-day challenges. We sought out teachers who didn't routinely use technology in their classrooms.</p>

        <p className="large-paragraph medium-spacer-bottom col-5">We learned a lot! These are some illustrations our user research lead created to capture our learnings.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="User research illustration" src={require("../assets/images/review-game/user-research-1.png")}/>
          </div>
          <p className="reflections col-2">Teachers have to juggle so many things at the same time. It's definitely one of the most underappreciated professions out there <span role="img" aria-label="sob">😭</span></p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="User research illustration" src={require("../assets/images/review-game/user-research-2.png")}/>
          </div>
          <p className="reflections col-2">Teachers usually teach at grade level, but there are students all over the spectrum in their classes.</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">At a high level, we discovered that teachers didn't find assigning homework challenging, but that <strong>keeping student engaged and knowing where they are is tough.</strong></p>

        <p className="large-paragraph medium-spacer-bottom col-5">We also created some design principles to guide our thinking for the rest of the project:</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Teacher design principles" src={require("../assets/images/review-game/teachers-rule-together.png")}/>
        </div>

        <h2 className="large-spacer-top col-5">Brainstorming</h2>
        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Foam board fort" src={require("../assets/images/review-game/brainstorming.jpg")}/>
          </div>
          <p className="reflections col-2">We took over a corner of the office and called it the foam board fort.</p>
        </div>
        <p className="large-paragraph medium-spacer-bottom col-5">We created How Might We (HMW) questions and invited the rest of the company to generate ideas with us! Some of these questions included:</p>

        <ul className="text-list medium-spacer-bottom col-5">
          <li>HMW make students feel joyful filling their own gaps for classrooms with no access to tech?</li>
          <li>HMW make a fun diagnostic for teachers who know tech is a classroom management issues?</li>
          <li>HMW make diagnostics feel useful on a routine basis for teachers on autopilot?</li>
        </ul>

        <p className="large-paragraph medium-spacer-bottom col-5">At the same time, we looked at existing classroom products that teachers loved! We realized that in-class review games like Kahoot!, QuizletLive, and Socrative had high rates of growth.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Review game competitors" src={require("../assets/images/review-game/competitors.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Through ideation & competitive analysis, we narrowed our question to: <strong>How might we create an engaging in-class math review game?</strong> For the following couple months, we used this question to guide our prototoype.</p>

        <h2 className="large-spacer-top col-5">Game loop</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">First, we sketched out the core game loop.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Storyboard" src={require("../assets/images/review-game/coreloop.png")}/>
        </div>

        <h2 className="large-spacer-top col-5">Storyboarding</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">Then, we drew out the general flow of the game and how it would fit into the classroom.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Storyboard" src={require("../assets/images/review-game/flow-01.png")}/>
          </div>
          <p className="reflections col-2">A. Ms. Frizzle is planning the lesson for tomorrow and sees that it's almost time for the Unit 2 test. She decides to use Khan Academy for the review session.</p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Storyboard" src={require("../assets/images/review-game/flow-02.png")}/>
          </div>
          <p className="reflections col-2">B. Ms. Frizzle pulls up up a question on the screen using Khan Academy. Each student tries to solve the problem on their own device or in groups.</p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Storyboard" src={require("../assets/images/review-game/flow-03.png")}/>
          </div>
          <p className="reflections col-2">C. Ms. Frizzle sees that almost half the class answered incorrectly and decides to explain the question at the board.</p>
        </div>

        <h2 className="large-spacer-top col-5">Game jam: prototyping</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">I can't show the footage of students in my public portfolio, so these are all low-fi gifs! If you want to see the final prototype live in action, please visit <a href="http://khanacademy.org/r/classroom-teacher">khanacademy.org/r/classroom-teacher</a> and select the "Demo" game.</p>

        <p className="large-paragraph medium-spacer-bottom col-5">Once we had the basic game mechanics outlined, we started to prototoype the game. Each week, we did the following:</p>

        <ul className="text-list medium-spacer-bottom col-5">
          <li><span role="img" aria-label="thinking">🤔</span> Hypothesis</li>
          <li><span role="img" aria-label="laptop">💻</span> Prototype</li>
          <li><span role="img" aria-label="teacher">👩🏽‍🏫</span> Playtest in a classroom</li>
          <li><span role="img" aria-label="teacher">👨🏻‍🏫</span> Debrief with the teacher</li>
          <li><span role="img" aria-label="refresh">🔁</span> Iterate</li>
        </ul>

        <h3 className="project-subheading large-spacer-top col-5"><strong><span role="img" aria-label="sparkle">✨</span> Round 1.</strong> The suspense of waiting for the right answer will be engaging for students.</h3>
        <p className="large-paragraph small-spacer-bottom col-5"></p>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">We created the prototype in Framer. The Desktop view on the left is what the teacher projects on the screen and the Mobile view is the student screen.</p>
          <p className="reflections col-2">In these stills we used a mobile screen for students to differentiate from the teacher view. In most classrooms, students use Chromebooks.</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">We wanted the sign in to be as easy as possible, so instead of having teachers roster their students, we wanted students to join the game through a simple class code.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 1" src={require("../assets/images/review-game/week-1a.gif")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">In our original game loop, we assumed that teachers would dramatically "reveal" the answer to the class. During the first week, we learned that this hypothesis was incorrect. The suspense caused students to be distracted because they didn't know what to do after they answered a question.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 1" src={require("../assets/images/review-game/week-1b.gif")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">After playtesting, we also realized that this design was hard for teachers to interact with during class. It was hard to tell which students had answered the question right or wrong.</p>

        <h3 className="project-subheading large-spacer-top small-spacer-bottom col-5"><strong><span role="img" aria-label="sparkle">✨</span>Round 2.</strong> Teachers want to engage with the data live during class.</h3>

        <p className="large-paragraph medium-spacer-bottom col-5">In the 2nd iteration, we pivoted the design to have a large sidebar with the students. When a student got a question correct, a large green check appeared next to their name. We drew the focus away from the avatars because those were the least important part and mostly a fun addition for the students.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 2" src={require("../assets/images/review-game/week-2a.gif")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">We realized it was too hard for teachers to engage with all the information immediately, so for the following iteration we wanted to explore what an after-class teacher report might look like.</p>

        <h3 className="project-subheading large-spacer-top small-spacer-bottom col-5"><strong><span role="img" aria-label="sparkle">✨</span>Round 3.</strong> Teachers want to diagnose patterns in student learning after class.</h3>

        <p className="large-paragraph medium-spacer-bottom col-5">The results below are from an internal testing session, so the data isn't very accurate. We wanted to be transparent with teachers and show them all the raw data, so that they could make their own assumptions. Yellow in correctness means that a student got the question correct eventually.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/week-3a.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Teachers loved being able to diagnose patterns in student performance, so we decided to follow up the next week with a student-facing post game experience.</p>

        <h3 className="project-subheading large-spacer-top small-spacer-bottom col-5"><strong><span role="img" aria-label="sparkle">✨</span>Round 4.</strong> Students want to study using their results from in-class practice.</h3>

        <p className="large-paragraph medium-spacer-bottom col-5">We wanted students to keep engaging with Khan Academy content after the game by watching videos or reading articles to fill their gaps in learning.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/week-3b.jpeg")}/>
        </div>

        <h3 className="project-subheading large-spacer-top small-spacer-bottom col-5"><strong><span role="img" aria-label="sparkle">✨</span>Round 5.</strong> Students will be more motivated to do well with higher stakes.</h3>

        <p className="large-paragraph medium-spacer-bottom col-5">We collaborated with a game designer this week to discuss how we could engage students further. Previously, the game was just a series of exercises. There was no motivation for students to do well other than the fact that their teacher would see their answers!</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/week-4a.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">When a student joined the game, they would get placed on either team Green or team Blue. Each student would get 10 points for getting a question correct and 1 point for trying. All students would max out at 10 points per question.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/week-4b.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">When we tested this in the classroom, students would cheer for their teams and try to help each other get the right answer!</p>

        <div className="col-7 medium-spacer-bottom">
          <img style={{backgroundColor: "white"}} className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/week-4c.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">If you want to see the final prototype live in action, please visit <a href="http://khanacademy.org/r/classroom-teacher">khanacademy.org/r/classroom-teacher</a> and select the "Demo" game. This is a super low quality gif of what it looked like in the classroom:</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Final prototype" src={require("../assets/images/review-game/classroom-final.gif")}/>
        </div>

        <h2 className="large-spacer-top col-5">Future Explorations</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">While we were prototyping ideas in the classroom, I also drew more "far out" explorations to show how the product could look if we expanded upon the idea even further. All these explorations focus on how the class or team will collectively reach a goal. We didn't want the focus to be on an individual student.</p>

        <p className="large-paragraph medium-spacer-bottom col-5">In this iteration, each team is a represented by a plant. Every time a student answers a question, they get to contribute to the plant's growth! I replaced the emojis with a sun and cloud because both sunshine and rain are needed to grow a plant.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/explore-1a.jpeg")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/explore-1b.jpeg")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/explore-1c.jpeg")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/explore-1d.jpeg")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Khan Academy has a partnership with Pixar, so I wanted to explore how we might be able to bring that world into the product. In this example, every  time a student gets a question right, they get the opportunity to throw a balloon onto the UP house. The goal for the class could be to get enough balloons to make the UP house fly away.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/explore-2.jpeg")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">In this exploration, students would be fighting a Monster of the Day. Every day, the monster would start out with X amount of HP and the class would have to defeat the monster by answering questions.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/explore-3.jpeg")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Teachers love to have students reason through their answers! In the following exploration, we would surface two popular answers and select two students to "debate" the solution. Other students can send hearts to the two debaters based upon who they think is correct!</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/explore-4a.jpeg")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Prototype week 3" src={require("../assets/images/review-game/explore-4b.jpeg")}/>
        </div>

        <h2 className="large-spacer-top col-5">What Happened?</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">Although we received lots of teacher validation during the project, the leadership team decided to hold off on pursuing this idea until we had a more solid foundation for the teacher product!</p>


      </section>
    );
  }
}

export default ReviewGame;
