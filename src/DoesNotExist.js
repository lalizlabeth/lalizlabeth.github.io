import React, { Component } from 'react';
import './DoesNotExist.scss';
import './About.scss';
// import Sparkle from './components/Sparkle';

class DoesNotExist extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <div className="col-7">
            <div className="header-image does-not-exist">
            </div>
          </div>
        </header>
        <section className="projects-wrapper does-not-exist">
          <ul className="projects col-10 offset-2 nested">
            <li className="bio-text col-10 offset-1">
              <h1 className="does-not-exist-header"><strong>Uh oh!</strong> This page does not exist.</h1>
              <p className="large-paragraph">While you're here, these are my top 3 favorite ice cream shops in San Francisco:</p>
            </li>
            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="tulip">🌷</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Garden Creamery</span></h2>
                <p className="about-description">This is BY FAR my favorite ice cream shop ever. They have so many asian flavors and the texture is the perfect amount of creaminess. Try the Mango Sticky Rice &amp; Ube during your first visit. <a href="https://www.yelp.com/biz/garden-creamery-san-francisco-3">Mission &amp; 20th</a>.</p>
              </div>
            </li>
            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="ice cream cone">☀️</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Bi-Rite Creamery</span></h2>
                <p className="about-description">This is right next to Dolores park, so grab a pint on a sunny day and share a pint with your friends. If you get a pint, you can skip the line!. <a href="https://www.yelp.com/biz/bi-rite-creamery-san-francisco">Mission Dolores</a>.</p>
              </div>
            </li>
            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="salt shaker">🧂</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Salt &amp; Straw</span></h2>
                <p className="about-description">Technically, this chain originated in Portland, but they source local Bay Area ingredients to create their flavors. I would say that Salt &amp; Straw is your place to go if you want to try bizarre flavors like Olive Oil Acme Bread. <a href="https://www.yelp.com/biz/salt-and-straw-san-francisco-5">Hayes Valley</a>.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default DoesNotExist;
