import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">
            <strong>Ogunyale Richard Kehinde</strong>
        </Link>} scroll>
            <Navigation>
                <Link  style={{textDecoration: 'none', color: 'white'}} to="/aboutme">
                    <strong>About Me</strong>
                    </Link>
                <Link  style={{textDecoration: 'none', color: 'white'}} to="/projects">
                    <strong>Projects</strong>
                </Link>
                <Link  style={{textDecoration: 'none', color: 'white'}} to="/contact">
                    <strong>Contact</strong>
                </Link>
                <Link  style={{textDecoration: 'none', color: 'white'}} to="/resume">
                    <strong>Resume</strong>
                </Link>
            </Navigation>
        </Header>
        <Drawer  title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Portfolio</Link>}>
            <Navigation>
              <Link  style={{textDecoration: 'none', color: 'black'}} to="/aboutme">About Me</Link>
              <Link  style={{textDecoration: 'none', color: 'black'}} to="/projects">Projects</Link>
              <Link  style={{textDecoration: 'none', color: 'black'}} to="/contact">Contact</Link>
              <Link  style={{textDecoration: 'none', color: 'black'}} to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;