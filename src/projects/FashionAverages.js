import React, { Component } from 'react';

class FashionAverages extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">This is an experimental project I did during my time at the <a href="http://sfpc.io">School for Poetic Computation</a> in 2018.</p>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">In one of our classes, we learned about Jason Salavon's <a href="http://www.salavon.com/work/Portrait/">image averages</a>. I wanted to apply this methodology to fashion runway images I had scraped from Vogue's database. This is the average of every runway model from the Spring 2019 runway generated with Open Frameworks:</p>
          <p className="reflections col-2">All 8,000 images had been sitting on my desktop for ~3 weeks because I didn't know what to do with them!</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Average model of fashion week" src={require("../assets/images/fashion-avgs/spring-2019-all.jpg")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Over the last couple years, the fashion industry has treated diversity and inclusion as a trend. Based on this image alone, it looks like the average of fashion hasn't actually changed. I applied the same approach to individual designers. Designers of color like Luar, Pyer Moss, and Telfar tended to have a darker-skinned average. Note that these brands also have unisex shows:</p>
          <p className="reflections col-2">Although the skintone averages are darker, the body type is still fairly tall and slim.</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Pyer Moss" src={require("../assets/images/fashion-avgs/pyer-moss.jpg")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Telfar" src={require("../assets/images/fashion-avgs/telfar.jpg")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Chromat, a swimwear brand, known for creating garments for all body types also breaks apart from the generic body shape in their averages:</p>
          <p className="reflections col-2">What would the ideal average of the runway even look like?</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Telfar" src={require("../assets/images/fashion-avgs/chromat.jpg")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Comme des Garçons by Rei Kawakubo averages light skinned, but her averages create an interesting effect because they're all so different and avant garde.</p>
          <p className="reflections col-2">These ones definitely feel more like "art" which mirrors her work as a designer!</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Comme des Garcons" src={require("../assets/images/fashion-avgs/cdg.jpg")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Most European brands perpetuate the idealized model body and also tend to be less innovative from season to season.</p>
          <p className="reflections col-2">The following houses are all designed by white men: Dries van Noten, Marc Jacobs, and Louis Vuitton.</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Dries van Noten" src={require("../assets/images/fashion-avgs/dries.jpg")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Dries van Noten" src={require("../assets/images/fashion-avgs/mj.jpg")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Dries van Noten" src={require("../assets/images/fashion-avgs/louis.jpg")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">In the future, I would like to do a larger analysis of how the average of fashion varies across designers of different ethnicities. How do different demographics affect notions of beauty?</p>
        </div>

    </section>
    );
  }
}

export default FashionAverages;
