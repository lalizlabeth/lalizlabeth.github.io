import React, { Component } from 'react';

class SephoraSorting extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">This is an experimental project I did during my time at the <a href="http://sfpc.io">School for Poetic Computation</a> in 2018.</p>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">For this project, we were tasked with scraping a really large list of things. I decided to scrape Sephora's foundation section and sort them in different ways. I used Python for both the scraping and image creation.</p>
          <p className="reflections col-2">I knew I wanted to do something visual and I happened to be browsing Sephora's website!</p>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">I started with foundations. It was difficult to perfectly sort by value, so I tried two versions of sorting: one by the value property and the other by grayscale.</p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Sephora sorting" src={require("../assets/images/sephora/1-foundations-value-grayscale.jpg")}/>
          </div>
          <p className="reflections col-2">This is the grayscale sorting! I think it worked slightly better.</p>
        </div>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Sephora sorting" src={require("../assets/images/sephora/4-foundations-value.jpg")}/>
          </div>
          <p className="reflections col-2">This was sorted with just the value property.</p>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">As you can see, there aren't very many selections for dark skintones. At the time, the only brand that carried a wide range of skintones was Riri's Fenty line. I continued to experiment with different sorts. The following are by Hue and Saturation.</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Sephora sorting" src={require("../assets/images/sephora/2-foundations-hue.jpg")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Sephora sorting" src={require("../assets/images/sephora/3-foundations-saturation.jpg")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">I repeated the same exercise with the Concealers on Sephora's site.</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Sephora sorting" src={require("../assets/images/sephora/5-concealers-value-grayscale.jpg")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Sephora sorting" src={require("../assets/images/sephora/6-concealers-saturation.jpg")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Sephora sorting" src={require("../assets/images/sephora/7-concealers-hue.jpg")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">... and tried it with Blush as well just for fun. The Blush shades aren't very critical, but look really pretty:</p>
        </div>

        <div className="text-group">
          <div className="col-2">
            <img className="project-image" alt="Sephora sorting" src={require("../assets/images/sephora/8-blushes-value-grayscale.jpg")}/>
          </div>

          <div className="col-2">
            <img className="project-image" alt="Sephora sorting" src={require("../assets/images/sephora/9-blushes-saturation.jpg")}/>
          </div>

          <div className="col-2 medium-spacer-bottom">
            <img className="project-image" alt="Sephora sorting" src={require("../assets/images/sephora/10-blushes-hue.jpg")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">I would love to do this series over a period of time to see if the industry is really getting "better" or if diversity if just a trend.</p>

    </section>
    );
  }
}

export default SephoraSorting;
