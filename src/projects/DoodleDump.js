import React, { Component } from 'react';

class DoodleDump extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">These are some doodles I've made in the last few years that don't have a home anywhere else in this portfolio. This first one was my first logo I designed in ~3rd grade with MS Paint.</p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Aliens" src={require("../assets/images/doodle-dump/lalizlabeth.jpg")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">This is a geometric plant world we explored at Khan Academy:</p>

        <div className="text-group">
          <div className="col-7 medium-spacer-bottom">
            <img className="project-image" alt="World" src={require("../assets/images/doodle-dump/world.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Here are some aliens having a party.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Aliens" src={require("../assets/images/doodle-dump/aliens.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">We held an internal art show in 2018 and I created the certificates and a poster to advertise the event. We made the art show remote friendly by posting photos to <a href="http://instagram.com/khanacademyartshow">this Instagram</a>.</p>

        <div className="text-group">
          <div className="col-3 medium-spacer-bottom">
            <img className="project-image" alt="Art show award for most likely to belong in a home." src={require("../assets/images/doodle-dump/art-show-award-1.png")}/>
          </div>

          <div className="col-3 medium-spacer-bottom">
            <img className="project-image" alt="Art show award for most instagrammable" src={require("../assets/images/doodle-dump/art-show-award-2.png")}/>
          </div>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="And here is the art show poster" src={require("../assets/images/doodle-dump/art-show.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">On the classroom team, I created an illustration for every milestone we achieved! To name each milestone, we used a magic capsule to determine the project name.</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Crab" src={require("../assets/images/doodle-dump/crab.jpg")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">To close off the quarter, I illustrated this school bus submarine for the team with our favorite animals inside.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="School bus submarine" src={require("../assets/images/doodle-dump/schoolbusmarine.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">If magic existed...</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Wizard" src={require("../assets/images/doodle-dump/wizard.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Some emo vampires who are just very over it...</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Vampires who are emo" src={require("../assets/images/doodle-dump/vampires.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Some lil mice racing in carrot jets!</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Mice riding carrots" src={require("../assets/images/doodle-dump/mice.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">And a lil triangle riding a rocket...</p>

        <div className="text-group">
          <div className="col-7 medium-spacer-bottom">
            <img className="project-image" alt="Running" src={require("../assets/images/doodle-dump/car.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">A color exploration I did to see if these 4 colors could work togetha.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Color study" src={require("../assets/images/doodle-dump/color-study.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">A circuit diagram I drew because the regular schematics were too sad to look at...</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="A circuit diagram" src={require("../assets/images/doodle-dump/blinky.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">A sticker sheet of all of Khan Academy's doggos, cus why not?</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="A circuit diagram" src={require("../assets/images/doodle-dump/doggos.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">I want to illustrate more, so let me know if you want to collab on something <span role="img" aria-label="blush">😊</span></p>

    </section>
    );
  }
}

export default DoodleDump;
