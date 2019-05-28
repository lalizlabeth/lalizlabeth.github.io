import React, { Component } from 'react';

class Monsterz extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Since <a href="https://itunes.apple.com/us/app/monsterz-game/id1231894793">monsterz</a> was first released on <a href="https://itunes.apple.com/us/app/monsterz-game/id1231894793">the App Store</a>, we’ve been getting questions from friends asking how we made <a href="https://itunes.apple.com/us/app/monsterz-game/id1231894793">the game</a>. We realized that these thoughts <span role="img" aria-label="speech bubble">💬</span> might be fun to read for people who want to create their own games!</p>
        </div>
        <p className="large-paragraph medium-spacer-bottom col-5">This is the story of how dots on index cards became a monsterz-filled puzzle game.</p>

        <h2 className="large-spacer-top col-5"><span role="img" aria-label="storm">🌩</span>️ Where it all began</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">Set is one of our favorite games. It’s a simple game where you find sets of cards based on their patterns. We wanted to create our own game that was inspired by Set with animated illustrations.</p>
        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Set" src={require("../assets/images/monsterz/set.png")}/>
        </div>

        <h2 className="large-spacer-top col-5"><span role="img" aria-label="pencil and paper">📝</span>️ Paper prototyping</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">Before we coded <span role="img" aria-label="laptop">💻</span>, we colored <span role="img" aria-label="crayon">🖍️</span>️ ! To test the concept, we created a simple prototype with paper and colored pencils to make sure the game was fun before we jumped straight into creating it. When it became a game that we wanted to play, we fired <span role="img" aria-label="fire">🔥</span> up our laptops and we were off to the races <span role="img" aria-label="runner">🏃</span>‍!</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Paper prototyping" src={require("../assets/images/monsterz/paper-prototyping.jpeg")}/>
        </div>

        <h2 className="large-spacer-top col-5"><span role="img" aria-label="refresh symbol">♻️</span>️ Iterating</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">This is where we started.</p>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Starting iteration" src={require("../assets/images/monsterz/starting.png")}/>
        </div>
        <p className="large-paragraph medium-spacer-bottom col-5">At this stage, the game lacked character, so we decided to draw some expressions on the dots to add some personality <span role="img" aria-label="dancer">💃</span>.</p>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Early iterations" src={require("../assets/images/monsterz/early.png")}/>
        </div>
        <p className="large-paragraph medium-spacer-bottom col-5">Now we’re talkin’! At this point, the game was lacking pressure. We didn’t want to invest in leaderboards yet, so we decided to make the clock <span role="img" aria-label="timer">⏲️</span> the opponent. That’s when we came up with Arcade mode.</p>
        <p className="large-paragraph medium-spacer-bottom col-5">We were finally ready to start sharing our app with friends &amp; family. We realized that the game was too hard! We had been playing for so long that we had learned the ins and outs, but everyone else was left clueless. To satisfy all skill levels, we added different difficulties and a tutorial to get people going.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="v1" src={require("../assets/images/monsterz/1.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">While testing the game, we would frequently get stuck on just one board. In Set, when this happens, the dealer puts out 3 more cards. We didn’t want to add more cards to the board, so instead we added Hints and a Shuffle feature.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="v2" src={require("../assets/images/monsterz/2.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">After many iterations, here’s where we landed! You’ll notice that we changed the visual language of the game to be more light &amp; friendly with the color palette <span role="img" aria-label="palette">🎨</span>.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="v3" src={require("../assets/images/monsterz/3.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Wahoo! Now, let’s chat about the design of the monsterz.</p>

        <h2 className="large-spacer-top col-5"><span role="img" aria-label="artist">👩‍🎨</span>️ Designing the monsterz</h2>

        <p className="large-paragraph medium-spacer-bottom col-5">Before drawing the monsterz, we drew inspo from some of our famous animated monsters!</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="monsters inc" src={require("../assets/images/monsterz/monsters-inc.jpg")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">We especially loved the art from Monsters, Inc. and Monsters University! Each monster had unique characteristics.We wanted each monster to have a different personality. Because each monster had to be a different color, we designed their personalities based upon their color.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="monsterz" src={require("../assets/images/monsterz/all.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Orange clashed with the other monsterz, so we decided to leave him out for now. Maybe he’ll make an appearance in the future <span role="img" aria-label="wink">😉</span></p>

        <div className="col-3 offset-1 medium-spacer-bottom">
          <img className="project-image" alt="orange monster" src={require("../assets/images/monsterz/orange-monster.png")}/>
        </div>

        <h2 className="large-spacer-top col-5"><span role="img" aria-label="artist">⭐</span>️ What’s coming next?</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">We’re improving the game based upon your feedback! Here are some of the things we’re thinking about:</p>
        <ul className="text-list medium-spacer-bottom col-5">
          <li>Leaderboards</li>
          <li>More monsterz</li>
          <li>Harder levels with surprise twists</li>
        </ul>

        <p className="large-paragraph medium-spacer-bottom col-5">Thanks for reading and please <span role="img" aria-label="stars">⭐⭐⭐⭐⭐</span> in <a href="https://itunes.apple.com/us/app/monsterz-game/id1231894793">the app store!</a></p>

    </section>
    );
  }
}

export default Monsterz;
