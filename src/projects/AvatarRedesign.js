import React, { Component } from 'react';

class AvatarRedesign extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">For the 2019 hackathon at Khan Academy, I took a pass at redesigning our avatar system to better fit our current brand guidelines. "More avatars" is also the most requested feature from students! This is what some of our current avatars look like on Khan Academy.</p>
          <p className="reflections col-2">I spent ~1hr iterating on these avatars and would love to take them further in the future.</p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" style={{background: "white"}} alt="old avatar style" src={require("../assets/images/avatar-redesign/before.png")}/>
          </div>
          <p className="reflections col-2">
            I'm pretty sure these were all made before 2012! Students love these avatars, so we wanted to consider making them vintage.
          </p>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">This style felt out of place with our new brand elements. This is a screenshot of our new brand showcased on the home page:</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="homepage" src={require("../assets/images/avatar-redesign/homepage.png")}/>
          </div>
          <p className="reflections col-2">
            This illustration was created by another designer on the brand team.
          </p>
        </div>

        <h2 className="large-spacer-top col-5">Inspiration</h2>

        <p className="large-paragraph medium-spacer-bottom col-5">First, we found different characters and avatars that embodied different age groups in education. One of Khan Academy's biggest challenges is creating an illustration language that works across age groups.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Inspiration board sorted from kindergarten to high school" src={require("../assets/images/avatar-redesign/inspo.png")}/>
        </div>

        <ul className="text-list medium-spacer-bottom col-5">
          <li><strong>K-5:</strong> Characters tend to be more simplified causing them to be less expressive. Hello Kitty and Pikachu are a great example of this! Because they are so simple, they look cuter. The color palettes tend to be brighter as well.</li>
          <li><strong>Middle school:</strong> We had a tough time finding good inspiration here! Our thinking was that middle school students tended to look up to heros and heroines like Wonder Woman and Carmen San Diego.</li>
          <li><strong>High school:</strong> High school students are over it. We look to characters like Gudetama who have "cooler" personalities for inspiration.</li>
        </ul>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">We also posted a call for sketches on Khan Academy's Instagram story and we received quite a few ideas! Lots of students drew avatars that had different evolutions similar to Pokemon:</p>
          <p className="reflections col-2">
            My favorite eevee evolution is definitely Flareon <span role="img" aria-label="fire">🔥</span>... might be my inner Aries speaking.
          </p>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Eevee evolutions" src={require("../assets/images/avatar-redesign/eevees.png")}/>
        </div>

        <h2 className="large-spacer-top col-5">Ideation</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Inspired by the eevee evolutions, I took a pass at creating our own avatar types. In the future, it would be fun if students could pick their own textures, eyes, and accessories to build them from scratch!</p>
          <p className="reflections col-2">
            Guess which one I would pick <span role="img" aria-label="crown">👑</span>.
          </p>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Avatar types" src={require("../assets/images/avatar-redesign/types.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">I wanted each of the avatars to have a series of evolutions, so that they woudl grow alongside the learner. I didn't have time to draw out more evolutions, but here's the general idea:</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Orange type evolution" src={require("../assets/images/avatar-redesign/orange.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">I also drew some explorations where the avatars originate as an egg / pebble.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Yellow type evolution" src={require("../assets/images/avatar-redesign/yellow.png")}/>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Many small eggs running toward the larger egg" src={require("../assets/images/avatar-redesign/family.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">In this example, I was thinking through how we could depict a mentor or teacher relationship with a student using our cutout shapes.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Teacher student relationship" src={require("../assets/images/avatar-redesign/teacher-student.png")}/>
        </div>

        <h2 className="large-spacer-top col-5">What's next?</h2>

        <p className="large-paragraph medium-spacer-bottom col-5">We're low on resources, so didn't get the chance to make this project a reality after the hackathon, but we're hoping to get a chance to do it in the future!</p>

      </section>
    );
  }
}

export default AvatarRedesign;
