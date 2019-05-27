import React, { Component } from 'react';
import './About.scss';
import Sparkle from './components/Sparkle';

class About extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <div className="col-7">
            <div className="header-image about">
              <Sparkle />
            </div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="about-modules col-8 offset-2 nested">
            <div className="about-group col-8 nested">
              <li className="bio-text col-6 offset-1">
                <h1><span role="img" aria-label="wave">👋🏼</span> I'm currently a product designer at <a href="https://www.khanacademy.org"><strong>Khan Academy</strong></a>.</h1>
                <h1>Chat with me about:</h1>
              </li>

              <ul className="social-media col-1">
                <li><a href="ElizabethLinResume-2019.pdf" className="social-media-link">Resume</a></li>
                <li><a href="mailto:elizabethylin@gmail.com" className="social-media-link">Email</a></li>
                <li><a href="https://www.linkedin.com/in/elizabethylin/" className="social-media-link">LinkedIn</a></li>
                <li><a href="https://twitter.com/lalizlabeth" className="social-media-link">Twitter</a></li>
                <li><a href="https://dribbble.com/lalizlabeth" className="social-media-link">Dribbble</a></li>
              </ul>
            </div>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="high heel">👠</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Anything fashion-related</span></h2>
                <p className="about-description">I love everything fashion from history to styling, and especially Alexander McQueen. You can find some of my musings <a href="https://medium.com/52-weeks-of-fashion">on Medium</a>.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="school">🏫</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Teaching design</span></h2>
                <p className="about-description">I'm passionate about design education and mentorship. Reach out to me if you're looking for someone to teach a workshop or give a talk!</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="music note">🎵</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Classifying music</span></h2>
                <p className="about-description">I've been obsessed with categorizing my music into <a href="https://open.spotify.com/user/lalizlabeth/playlist/6PoziqidZhUKeaz1dCC8Ep?si=BVbZjevaQfSmt6kNr2O3yA">bops</a>, <a href="https://open.spotify.com/user/lalizlabeth/playlist/76PE9EsOxWFeSmhnx8YKI9?si=InwbWM8wTY6xqHIErwd36Q">bangers</a>, &amp; <a href="https://open.spotify.com/user/lalizlabeth/playlist/0FL6oYFk7kbsA6TzZnm6l4?si=Ux1OSX5iTrayKbUvGKDUQQ">jams</a>. Lately, I've been jamming to Solange &amp; bopping to Ari.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="stack of books">📚</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Reading books</span></h2>
                <p className="about-description">I'm usually allergic to spreadsheets, but I obsessively track my book reading in <a href="https://airtable.com/shrQXfTwETdlkJbJ0">this Airtable</a>. I started a few years ago because I realized most of my books were written by white men. Most recently, my favorite read was <a href="http://nkjemisin.com/books/the-fifth-season/">The Fifth Season</a> by N.K. Jemisin.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="bird">🐦</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Folding paper</span></h2>
                <p className="about-description">Ok, so it's AMAZING what paper can do. Thanks to my time at SFPC, I was inspired to start learning origami. I've been <a href="https://www.instagram.com/p/BvvaovGhHwx/">making my way</a> through a bunch of books with the goal of eventually combining origami with fashion (like Issey Miyake!)</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="saxophone">🎷</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Playing classical saxophone</span></h2>
                <p className="about-description">Whaaaat?! Classical saxophone is a thing? YES, and it's amazing. If you're new to it, you should listen to <a href="https://open.spotify.com/track/46CH0WzkWOuuFLMxjq0Ur9?si=kwmcGXzBT9uajUo_0gXZ1g">Prelude, Cadence, &amp; Finale</a> by Desenclos.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="taiwan flag">🇹🇼</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Eating Taiwanese food</span></h2>
                <p className="about-description">Some people have an extra stomach for dessert, but I definitely have one for minced pork over rice and popcorn chicken.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="balloon">🎈</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Planning events</span></h2>
                <p className="about-description">I loveeeee events because they are the perfect combo of both planning and last minute problem solving. In the past, I've run two education and design events for SF Design Week.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="laptop">💻</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Making things at SFPC</span></h2>
                <p className="about-description">In Fall 2018, I started to feel constrained by the design industry and I wanted to explore the line between design and art. You can find my journal at the School for Poetic Computation <a href="https://instagram.com/lalizlapoet">on Instagram</a>.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2><span role="img" aria-label="artwork">🖼</span></h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Giving unofficial art tours</span></h2>
                <p className="about-description">One of my fav pastimes is giving friends unofficial tours of art museums by making them more relatable. I used to run a yearly Snapchat Scavenger Hunt at the SFMOMA.</p>
              </div>
            </li>
        </ul>

        </section>

      </div>
    );
  }
}

export default About;
