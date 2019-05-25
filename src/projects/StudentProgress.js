import React, { Component } from 'react';

class StudentProgress extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">This was a 6 month-long project where we rearchitected the Khan Academy teacher dashboard. The team consisted of myself, a product manager, and 3 engineers. We shipped the feature set in Fall 2018 for Back-to-School. <strong>This case study focuses on the assignment reporting portion of the project.</strong></p>
          <p className="reflections col-2">My notes and reflections will go here.</p>
        </div>

        <h2 className="col-5">The problem</h2>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">In 2017, we introduced an assignments feature to help teachers target individualized content at their students. Teachers could assign any item of content (exercises, videos, articles, quizzes) with a due date to any group of students. There was no easy way for teachers to view individual student progress over time or find trends in their learning. Student progress also only existed for math and computer science classrooms.</p>
          <p className="reflections col-2">The classroom team was only in its 2nd year!</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Previously, the assignments feature looked like this. In order for teachers to see student scores, teachers had to click on X / Y.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Old teacher dashboard" src={require("../assets/images/student-progress/old-1.png")}/>
          </div>
          <p className="reflections col-2">This page was scary because there was so much blue! The CTA's didn't stand out at all and teachers didn't really understand what to do here. They could also only edit 1 assignment at once.</p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Old teacher dashboard" src={require("../assets/images/student-progress/old-2.png")}/>
          </div>
          <p className="reflections col-2">This was difficult to scan because we only use one color. Teachers were also frustrated that they could only see one assignment at once.</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">We hoped to address this question: How might we make it easier for teachers to diagnose patterns and fill student gaps in knowledge?</p>

        <h2 className="large-spacer-top col-5">Initial explorations & research</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">We had a month to explore and research different directions to display student progress. We started by interviewing 10 non-math teachers to understand how they track student progress and growth. We asked questions like: What do you look for in order to know if students understand the material? How do you assess for student mastery? These are some of our high level findings:</p>

        <ul className="text-list medium-spacer-bottom col-5">
          <li><strong>Teachers want to see individual student effort.</strong> If they did poorly on an exercise, did they watch a related video or read a related article? Did they use any hints? Have they improved since last week?</li>
          <li><strong>Teachers want to identify groups of students.</strong> Which students are ahead? Which students have gaps in learning? Many teachers pull small groups aside to do a mini-lesson during class.</li>
          <li><strong>Humanities teachers use KA as a textbook replacement more than a tool for evaluation.</strong> We have good content, but it’s difficult to evaluate critical thinking skills without support for free response questions.</li>
        </ul>

        <p className="large-paragraph medium-spacer-bottom col-5">Most importantly, we learned that teachers all define proficiency, competency, and mastery differently and want to be able to see student data in a way that matches their own model. They want the flexibility to be able to filter data by student, date range, unit, skill level, standard, and improvement. This is an early prototype I worked on to showcase how all these might work together:</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Progress prototype" src={require("../assets/images/student-progress/progress-prototype.gif")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">At the same time, we explored some conceptual directions. In this one, we thought it would be fun if a classroom’s progress was displayed as a garden where each student’s learning was displayed as a plant! The bottom features a interactive timeline to view change over time.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Plants prototype" src={require("../assets/images/student-progress/plants.gif")}/>
          </div>
          <p className="reflections col-2">We didn't move forward with this exploration because we wanted to validate the base solution first.</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">We also brought together the entire team to brainstorm different visuals and forms of displaying student progress.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Brainstorming" src={require("../assets/images/student-progress/brainstorming.png")}/>
          </div>
          <p className="reflections col-2">We have a remote friendly team, so our brainstorms were all conducted with virtual stickies in Google Slides.</p>
        </div>

        <h2 className="large-spacer-top col-5">Narrowing scope</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">After this first round of exploration and research, we wanted to hone in on a direction to tackle first. Progress is complicated and we had so many features we wanted to implement. To help us decide, we showed a series of wireframes to 5 teachers and had them rank the effectiveness of each one.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Versions" src={require("../assets/images/student-progress/iterations.gif")}/>
          </div>
          <p className="reflections col-2">We had teachers describe how each version would impact their teaching!</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">In each of these examples, we used orange to indicate students with under 70% and green to indicate students with 100%. Based on our conversations, the teachers liked...</p>

        <ul className="text-list medium-spacer-bottom col-5">
          <li>Being able to see individual student performance</li>
          <li>Being able to quickly scan how their entire class is doing</li>
        </ul>

        <p className="large-paragraph medium-spacer-bottom col-5">We decided that "Progress by Student" would be the most beneficial to more teachers because it allowed for both of these things. It also felt most familiar to teachers because it looks like a grade book.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Gradebook view" src={require("../assets/images/student-progress/gradebook.png")}/>
          </div>
          <p className="reflections col-2">Teachers just want to see the raw data! Insights obscure the data and teachers want to make their own connections and assumptions.</p>
        </div>

        <h2 className="large-spacer-top col-5">Feedback</h2>

        <p className="large-paragraph medium-spacer-bottom col-5">At this point, we pulled in the engineers and started building. We recruited an initial pilot group of 30 teachers. Each week, we sent out a survey asking teachers to reflect on the new Progress feature and conducted short interviews with 2-3 teachers to get their reflections. This is where we started:</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="First pass" src={require("../assets/images/student-progress/v1.png")}/>
          </div>
          <p className="reflections col-2">For the first pass, I just converted the wireframe earlier to follow our style guide.</p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Survey week 1" src={require("../assets/images/student-progress/survey-1.png")}/>
          </div>
          <p className="reflections col-2">We sent a Google forms survey on a weekly basis to collect feedback.</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">17 teachers responded out of the 30 pilot teachers. In general, they loved this new feature because they could see all the information at once. One teacher said:</p>

        <div className="text-group">
          <p className="large-paragraph quote medium-spacer-bottom col-5">“I loved that it gave a quick overview of who is doing what work, and the %. This is SO HELPFUL for me as a teacher in many ways. I can see the progress of individual students, determine how to group students/differentiate quickly. This can also make it simpler for me when it comes to putting work in the grade book. It's amazing!”</p>
          <p className="reflections col-2">Notes</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Here's a summary of the rest of their feedback:</p>

        <ul className="text-list medium-spacer-bottom col-5">
          <li>I like that I can see how my class is doing at-a-glance! 7 teachers mentioned their love for the color-coding.</li>
          <li>I like that I can easily find struggling students.</li>
          <li>I like that I can use it for grading.</li>
          <li>I wish I could filter by date.</li>
          <li>I wish I could see a single student’s progress</li>
        </ul>

        <p className="large-paragraph medium-spacer-bottom col-5">Based on the feedback from round 1, we decided to implement a date filter and content type filter to help teachers identify gaps easier. Some teachers assign videos, articles, and exercises, so they want to be able to filter to see only exercises for a week at a time.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Survey week 1" src={require("../assets/images/student-progress/v2.png")}/>
          </div>
          <p className="reflections col-2">Filters</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">These are the options within each filter:</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Survey week 1" src={require("../assets/images/student-progress/filters.png")}/>
          </div>
          <p className="reflections col-2">Filters</p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">In this week's survey, we asked teachers: <strong>"How might you use the Progress page to inform your instruction?"</strong> Here are some of their responses:</p>

        <p className="large-paragraph quote medium-spacer-bottom col-5">“It allows me to notice larger patterns of content that I need to reteach and fill in gaps. I also like that I can track how much of the AP Calculus curriculum that my students have practiced."</p>

        <p className="large-paragraph quote medium-spacer-bottom col-5">“I can use it to quickly check how a student is doing, if they are completing their work or struggling. It is extremely handy, as today I had a parent ask if her son had completed all of his missing work that I haven't graded yet, and I was able to quickly check which had been completed.”</p>

        <p className="large-paragraph quote medium-spacer-bottom col-5">“Next year, I might use the Progress page to guide small groups and reteaching within the class and RtI [Response to Intervention]. I might also use the Progress page to check for Mastery and readiness for tests.”</p>

        <p className="large-paragraph medium-spacer-bottom col-5">We also wanted to drill into when teachers use the progress page. We discovered that their preferences for the date filter were pretty varied validating the need for the Date filter.</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Date filter " src={require("../assets/images/student-progress/date-filter.png")}/>
        </div>

        <p className="large-paragraph quote medium-spacer-bottom col-5">“I give the students one week to complete a set of activities. The <strong>'Last 7 Days'</strong> option allows me to see their progress each day individually.”</p>

        <p className="large-paragraph quote medium-spacer-bottom col-5">“I want to see what my students are <strong>currently</strong> working on and who needs assistance.”</p>

        <p className="large-paragraph medium-spacer-bottom col-5">The most popular request we had was an individual student report. We reprioritized our timeline to accomodate for this feature because we felt it was crucial to a teacher's workflow. Many teachers wanted to discuss scores with individual students or their parents without compromising other students' private information.</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Indiviudal report page" src={require("../assets/images/student-progress/individual.jpeg")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">These are just the first couple iterations of this project. We continued this process until launch! If you're interested, I can walk you through the rest of the project in detail.</p>

        <h2 className="large-spacer-top col-5">What we shipped</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">After conducting many user interviews and surveys, we felt really confident about launching this to 100% of our users across the world for Back To School 2018! This was our final design.</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Gradebook" src={require("../assets/images/student-progress/0.jpeg")}/>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Gradebook" src={require("../assets/images/student-progress/1.jpeg")}/>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Gradebook" src={require("../assets/images/student-progress/2.jpeg")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">We changed a few small things before launching including adding icons for easier readability, pagination for faster loads, and vertical student names.</p>

        <h2 className="large-spacer-top col-5">What's next?</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">This feature was very successful and has an NPS of +51%! The number of monthly very active learners with a teacher increased by 45%. 75-80% of monthly active teachers created an assignment within the last 28 days. Our original goal was 65%.</p>
        <p className="large-paragraph medium-spacer-bottom col-5">We want to continue exploring ways to make progress better for non-math classes, but this would involve a major strategy shift on many teams. In the future, we're going to explore more ways of incorporating classroom activity and trajectory into our progress tracking.</p>

    </section>
    );
  }
}

export default StudentProgress;
