import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';
import About from './aboutme';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/projects" component={Projects}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/resume" component={Resume}/>
    <Route exact path="/aboutme" component={About}/>


  </Switch>
)

export default Main;