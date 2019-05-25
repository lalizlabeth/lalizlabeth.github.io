import React, { Component } from 'react';

class Beauty extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">This was my final showcase project for the School for Poetic Computation. We only had ~1-week to do it, but my entire time at SFPC informed my project. I wanted to address the following questions with my installation:</p>
          <p className="reflections col-2">My notes and reflections will go here.</p>
        </div>
        <ul className="text-list medium-spacer-bottom col-5">
          <li>Why do beauty standards exist?</li>
          <li>How do we change beauty standards?</li>
          <li>How are we influenced by beauty standards?</li>
          <li>How do beauty standards affect our relationships?</li>
          <li>What beauty standards do we hold ourselves to?</li>
          <li>What role do beauty standards play in public places?</li>
        </ul>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Originally, I wanted to do a critique about physical beauty standards, but because of our time constraints, I decided to move toward a more generalized approach. I was inspired by Stefan Sagmeister's Beauty project:</p>
          <p className="reflections col-2">Some of my original ideas were too focused on actual body image and I couldn't figure out a way to do it lightly without being offensive.</p>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Sagmeister" src={require("../assets/images/beauty/stef.png")}/>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            I created a web-based game using Matter.js called What do we perceive as beautiful? with a goal to create the most beautiful thing from the set of objects. Everyone was constrained to the same set of geometries. After a person is done drawing, they see everyone else's creation. Here is a demo of the entire experience:</p>
          <p className="reflections col-2">I was originally set on the idea of a joystick, but it just wasn't the right interaction <span role="img" aria-label="sob">😭</span></p>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            During the showcase, I observed people interacting with the display and found that people tended to fall into two camps of beauty: disorder and order. Some participants wanted to create guidelines for the set of shapes and were really bothered by the irregular blob. Other participants tried to create the most unique beautiful thing through breaking the system. Here is a compilation of some of their interactions:</p>
          <p className="reflections col-2">There was also a fun glitch where if you used enough force, you could fling the objects off the page.</p>
        </div>
        <div className="col-5 medium-spacer-bottom video-wrapper">
          <iframe title="beauty-demo-video" className="project-image" src="https://www.youtube.com/embed/N0sn4nsE12k" autoplay="" muted="" loop=""></iframe>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            During the showcase, I observed people interacting with the display and found that people tended to fall into two camps of beauty: disorder and order. Some participants wanted to create guidelines for the set of shapes and were really bothered by the irregular blob. Other participants tried to create the most unique beautiful thing through breaking the system. Here is a compilation of some of their interactions:</p>
        </div>
        <div className="col-5 medium-spacer-bottom video-wrapper">
          <iframe title="beauty-compilation-video" className="project-image" src="https://www.youtube.com/embed/HIeOBNN2Kww" autoplay="" muted="" loop=""></iframe>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">At the end of day 2, there were over 100 different beautiful things in the gallery:</p>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="All beautiful things" src={require("../assets/images/beauty/gallery.jpg")}/>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
          I still need to analyze all the creations, but in general, people tended to want to get rid of the shapes that felt constraining: the large rectangle and the lopsided blob. I also created a process zine to showcase how my time at SFPC led me to create this project:</p>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <video className="project-image" alt="Process book" src={require("../assets/images/beauty/process-book.mov")} autoPlay muted loop/>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">In the future, I hope to expand on this idea more to be about actual faces! I also hope to put the game online, so that people can interact with it outside of the showcase.</p>
        </div>
    </section>
    );
  }
}

export default Beauty;
