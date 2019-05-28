import React, { Component } from 'react';

class DesignToLearn extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">I gave this talk a couple times in 2019: once at the SF Content Creators meetup and another at the Berkeley HCI Conference. This write up is just an overview! I separated the talk into 3 sections:</p>
        </div>

        <ul class="text-list medium-spacer-bottom col-5">
          <li>Learning design</li>
          <li>Designing learning</li>
          <li>Unlearning learning</li>
        </ul>

        <p className="large-paragraph medium-spacer-bottom col-5">When I first started "designing", I didn't know what design was. I was just having fun making ridiculous things on Neopets.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="slide 1" src={require("../assets/images/design-to-learn/1.png")}/>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Neopets" src={require("../assets/images/design-to-learn/2.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Here are some things I made during my "just having fun" era:</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="learning" src={require("../assets/images/design-to-learn/3.png")}/>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="learning" src={require("../assets/images/design-to-learn/4.png")}/>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="learning" src={require("../assets/images/design-to-learn/5.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">I'll finish this outline at some point, but in the rest of the talk, I go through how I learned the "rules" of design through teaching design! Now, I'm trying to unlearn design and SFPC really helped me discover how to break the rules again!</p>

    </section>
    );
  }
}

export default DesignToLearn;
