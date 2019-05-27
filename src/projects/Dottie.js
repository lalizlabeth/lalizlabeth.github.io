import React, { Component } from 'react';

class Dottie extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <p className="large-paragraph medium-spacer-bottom col-5"><strong><span role="img" aria-label="construction sign">🚧</span> This project is a work in progress! <span role="img" aria-label="construction sign">🚧</span></strong></p>
        <p className="large-paragraph medium-spacer-bottom col-5">
          <a href="http://www.twitter.com/varunrau">@varunrau</a> and I wanted to make our own children’s book! We both wanted to create a story that teaches the reader about art history. To start, we researched various children’s books and really loved the simplicity of Jon Klassen’s "This is Not My Hat" and "I Want My Hat Back".
        </p>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Klassen book cover" src={require("../assets/images/dottie/klassen.jpg")}/>
        </div>
        <h2 className="large-spacer-top col-5">Designing Dottie</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">
          Here are some iterations of our main character, Dottie. (We named her Dottie as a reference to Lichtenstein’s Benday Dot painting style!) We designed her to have huge eyes because we wanted her glasses to be comically large.
        </p>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Dottie iterations" src={require("../assets/images/dottie/dottie-iterations.png")}/>
        </div>
        <p className="large-paragraph medium-spacer-bottom col-5">
          For the final version, I increased the brightness of the colors and increased the contrast in scale of her eyes and hair to make her appear even cuter.
        </p>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Dottie final iteration" src={require("../assets/images/dottie/dottie-final.png")}/>
        </div>

        <h2 className="large-spacer-top col-5">The story</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">
          We wanted to start with a few pages introducing Dottie’s family and interests.
        </p>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Dottie story page 1" src={require("../assets/images/dottie/page-1@2x.png")}/>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Dottie story page 2" src={require("../assets/images/dottie/page-2@2x.png")}/>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Dottie story page 3" src={require("../assets/images/dottie/page-3@2x.png")}/>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Dottie story page 4" src={require("../assets/images/dottie/page-4@2x.png")}/>
        </div>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Dottie story page 5" src={require("../assets/images/dottie/page-5@2x.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">
          After the intro, we started brainstorming which paintings Dottie should talk to. We picked artists with distinct styles that were easy to describe. Before we started drawing, we wrote out a basic script! Here are a couple snippets:
        </p>

        <p className="large-paragraph quote medium-spacer-bottom col-5">D: Hi! I’m Dottie. Have you seen my glasses?</p>
        <p className="large-paragraph quote medium-spacer-bottom col-5">M: I am Piet Mondrian’s Broadway Boogie Woogie. I have not seen your glasses, but you can search through my brilliant blues, yellows, and reds.</p>

        <p className="large-paragraph quote medium-spacer-bottom col-5" style={{border: "none"}}>
          Dottie looked left and she looked right, but she could not find her glasses.
        </p>

        <p className="large-paragraph quote medium-spacer-bottom col-5" style={{border: "none"}}>
          ...and so she continued.
        </p>

        <p className="large-paragraph quote medium-spacer-bottom col-5">D: Hi! I’m Dottie. Have you seen my glasses?</p>
        <p className="large-paragraph quote medium-spacer-bottom col-5">L: I am Roy Lichtenstein’s Modern Room. I have not seen your glasses, but you can search my living room. Sometimes I lose things in my couch.</p>

        <p className="large-paragraph quote medium-spacer-bottom col-5" style={{border: "none"}}>
          Dottie looked in the couch, but all she could find were 25 cents, a rubber band, and a paintbrush.
        </p>

        <p className="large-paragraph quote medium-spacer-bottom col-5" style={{border: "none"}}>
          ...and so she continued.
        </p>

        <p className="large-paragraph medium-spacer-bottom col-5">
          Then, we started to explore what the illustrations would actually look like! The following images are all a work in progress.
        </p>

        <div className="text-group">
          <div className="col-3 medium-spacer-bottom">
            <img className="project-image" alt="Dottie story page 6" src={require("../assets/images/dottie/page-6.png")}/>
          </div>
          <div className="col-3 medium-spacer-bottom">
            <img className="project-image" alt="Dottie story page 7" src={require("../assets/images/dottie/page-7.png")}/>
          </div>
        </div>
        <div className="text-group">
          <div className="col-3 medium-spacer-bottom">
            <img className="project-image" alt="Dottie story page 8" src={require("../assets/images/dottie/page-8.png")}/>
          </div>
          <div className="col-3 medium-spacer-bottom">
            <img className="project-image" alt="Dottie story page 9" src={require("../assets/images/dottie/page-9.png")}/>
          </div>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">
          We're still working on this, but keep an eye out for <strong>Have you seen my glasses?</strong>
        </p>

    </section>
    );
  }
}

export default Dottie;
