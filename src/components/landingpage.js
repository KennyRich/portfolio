import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto',}}>
        <Grid className="landing-grid">
          <Cell col={12} style={{display:'inline-block'}}>
            <img
              src="https://avatars3.githubusercontent.com/u/42958866?s=460&v=4"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Machine Learning and Deep Learning Engineer</h1>

            <hr/>

          <p>| Python | HTML/CSS | JavaScript | PyTorch | Keras | TensorFlow</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kehinde-ogunyale-b435b0a2/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/KennyRich" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/_Kennyrich?s=09" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true"/>
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;