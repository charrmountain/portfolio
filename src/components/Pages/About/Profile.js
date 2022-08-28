import React, { Component } from "react";
import { Grid, Image, Icon, Button, Divider } from "semantic-ui-react";
import AOS from "aos";
import charlotte from "./images/charlotte.jpg";
import "aos/dist/aos.css";

export default class Profile extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div id="profile" data-aos="fade">
        <Grid columns="two" divided>
          <Grid.Row>
            <Grid.Column
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              relaxed="very"
              className="left"
            >
              <div className="imageWrapper">
                <div className="inner-content">
                  <div className="name">
                    <p className="small color-white">Charlotte Mountain</p>
                    <div className="seperator-line"></div>
                  </div>
                  <div className="picture-box">
                    <div className="picture"></div>
                    <Image className="image" src={charlotte} />
                  </div>
                  <div className="frame-1 frame"></div>
                  <div className="frame-2 frame"></div>
                  <div className="frame-3 frame"></div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="right"
            >
              <div className="contentWrapper">
                <Divider inverted />
                <p>
                  I am a southern california native, currently residing with my
                  fiancé and our cats in Nashville. I enjoy problem-solving and
                  learning, whether it relates to programming or human behavior.
                  I'm a naturally curious, adaptable person who is eager to
                  tackle any challenge that comes my way.
                </p>
                <p>
                  After working in the customer service industry for almost a
                  decade. I decided to branch out my skills. Leading me to earn
                  a Certificate in Full Stack Development from the University of
                  California San Diego Extension, with developed skills in
                  JavaScript, CSS, Node.js, JQuery, MySQL and responsive web
                  design.
                </p>
                <p>
                  Since then I have further advanced my skills at Agent Elite,
                  Inc. by becoming dominate in PHP and WordPress. Pairing my
                  developing skills with my background in customer service has
                  become a match made in user experience heaven.
                </p>
                <p>
                  With each project, my aim is to best engage my audience for an
                  impactful user experience. Excited to leverage my skills in
                  the future as part of a fast-paced, quality-driven team!
                </p>
                <p>Just trying to be the best cat mom I can be.</p>
                <Button size="tiny" className="resume" inverted basic>
                  Resume
                  <Icon name="download" size="small" />
                </Button>
                <Divider inverted />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
