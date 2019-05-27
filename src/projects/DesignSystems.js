import React, { Component } from 'react';

class DesignSystems extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <h2 className="large-spacer-top col-5">Navigation</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">In 2014, a couple designers and I restructed the Khan Academy content library from the ground up. As part of the project, I designed a new global navigation. This navigation is used across all of Khan Academy and still mostly the same today!</p>
          <p className="reflections col-2">Around the same time, I had just attended an Edward Tufte class, so this solution was inspired by his philosophy to show  density.</p>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Global nav latest" src={require("../assets/images/design-systems/global-nav-final.gif")}/>
        </div>
        <p className="large-paragraph medium-spacer-bottom col-5">Before, our navigation system was separated by domain, so it was difficult to see all our subject offerings. One of our goals was to surface all our subjects to flip the misconception that Khan Academy is only math.</p>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Global nav old" src={require("../assets/images/design-systems/global-nav-old.gif")}/>
        </div>
        <p className="large-paragraph medium-spacer-bottom col-5">Here are a few other explorations I tried, but we moved away from these because none of them were as information dense as the final solution.</p>

        <h2 className="large-spacer-top col-5">Brand library</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">This brand style was developed by the brand & comms team and directed by our design manager. I took all our brand assets and developed it into a Figma library, so that it was easy for designers across the organization to have the latest brand resources.</p>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Brand library cutouts" src={require("../assets/images/design-systems/brand-1.png")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Brand library doodles" src={require("../assets/images/design-systems/brand-2.png")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Brand library patterns" src={require("../assets/images/design-systems/brand-3.png")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Brand library textures" src={require("../assets/images/design-systems/brand-4.png")}/>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Brand library textures" src={require("../assets/images/design-systems/brand-5.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">I developed a system to name each asset to make it easy for people to search through. I also added a section for easter eggs <span role="img" aria-label="egg">🥚</span>. See it in action below:</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Brand library textures" src={require("../assets/images/design-systems/brand-library-demo.gif")}/>
        </div>

        <h2 className="large-spacer-top col-5">Iconography</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Previously, we had icons all over the place in inconsistent styles. In this project, I created a set of pixel-aligned icons that would work for most use cases across Khan Academy. Every icon is set at a 2px stroke at either 16x16 or 24x24 pixels.</p>
        </div>

        <h2 className="large-spacer-top col-5">Color system</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">I worked on a project alongisde 2 designers to consolidate our color system. Previously, we had over 32 different colors in our product color palette.</p>
        </div>
    </section>
    );
  }
}

export default DesignSystems;
