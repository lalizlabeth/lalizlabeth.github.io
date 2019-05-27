import React, { Component } from 'react';

class Hogwarts extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Every year, Khan Academy hosts a Harry Potter themed Hackweek. I did the branding in 2018 and 2019. Everyone in the company gets placed in a house and you earn points for your house the entire week. These are the house designs from the latest Hackathon in 2019. I tried to encapsulate each house's personality into each character.</p>
          <p className="reflections col-2">This is by far my favorite week of the year!</p>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Gryffindor" src={require("../assets/images/hogwarts/gryffindor-2019.png")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Hufflepuff" src={require("../assets/images/hogwarts/hufflepuff-2019.png")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Ravenclaw" src={require("../assets/images/hogwarts/ravenclaw-2019.png")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Slytherin" src={require("../assets/images/hogwarts/slytherin-2019.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Each team member got a t-shirt and a sticker for their house. We also made cupcakes with the house badges on them <span role="img" aria-label="cupcake">🧁</span></p>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Cupakes" src={require("../assets/images/hogwarts/shirts.png")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Cupakes" src={require("../assets/images/hogwarts/stickers.png")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Cupakes" src={require("../assets/images/hogwarts/cupcakes.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">&amp; here's everyone in their Hogwarts attire!</p>

        <p className="large-paragraph medium-spacer-bottom col-5">All winning teams got a tote bag with all four houses on it:</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Tote" src={require("../assets/images/hogwarts/tote.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">The planning committee and I were so extra that we even crafted our own whomping willow for the lobby! Next year's theme will be the Prisoner of Azkaban, so we'll be changing our decorations accordingly.</p>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Tote" src={require("../assets/images/hogwarts/whomping-willow.jpg")}/>
        </div>

    </section>
    );
  }
}

export default Hogwarts;
