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
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Here are a few other explorations I tried, but we moved away from these because none of them were as information dense as the final solution.</p>
          <p className="reflections col-2">All these prototypes were created in HTML, CSS, &amp; JavaScript.</p>
        </div>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Global nav iterations" src={require("../assets/images/design-systems/global-nav-v1.gif")}/>
        </div>

        <h2 className="large-spacer-top col-5">Brand library</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">This brand style was developed by the brand & comms team and directed by our design manager. I took all our brand assets and developed it into a Figma library, so that it was easy for designers across the organization to have the latest brand resources.</p>
          <p className="reflections col-2">p.s. FIGMA IS AMAZING.</p>
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

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Iconography" src={require("../assets/images/design-systems/iconography.png")}/>
        </div>

        <h2 className="large-spacer-top col-5">Color system</h2>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">I worked on a project alongisde 2 designers to consolidate our color system. Previously, we had over 32 different colors in our product color palette.</p>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Iconography" src={require("../assets/images/design-systems/color-old.jpeg")}/>
        </div>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">For the color refresh, we wanted to consolidate our color palette, so that each color had a desginated meaning. This was the final result:</p>
        </div>
        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Iconography" src={require("../assets/images/design-systems/color-new.png")}/>
        </div>
        <div className="text-group">
          <p className="large-paragraph small-spacer-bottom col-5">Instead of colors having no meaning, we assigned desginated roles for each color. This was also the first items we addressed accessibility across all the colors in our system.</p>
        </div>
        <ul className="text-list medium-spacer-bottom col-5">
          <li><strong>Red</strong> was reserved for error states &amp; destructive actions. Previously, it was used in Arts  &amp; Humanities as an accent color.</li>
          <li><strong>Green</strong> was reserved for correctness in both exercises and UI. We used to have green in our logo, CTA's, and the Computing domain.</li>
          <li><strong>Blue</strong> was reserved for all things actionable: links and buttons. We wanted blue to be used very minimally on each page to draw attention to the most importnat CTA. Previously, blue was the primary  color for the Math domain.</li>
          <li><strong>Purple</strong> was a new color we introduced for the concept of Mastery. Mastery is calculated differently from raw correctness, so we wanted to choose a color that differeniated it from Green. Purple was the only color remaining that reached accessiblity guidelines and wasn't close to the rest of the core colors.</li>
        </ul>
    </section>
    );
  }
}

export default DesignSystems;
