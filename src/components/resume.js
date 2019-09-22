import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Certifications from './certifications'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img className="img-circular"
                src="https://media.licdn.com/dms/image/C5603AQGJa7XqXVLDGw/profile-displayphoto-shrink_200_200/0?e=1574899200&v=beta&t=5OVcWQrVTal8viUeT1Qujz_IqFMOqUb6njHs4-SfpI4"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ogunyale Richard Kehinde</h2>
            <h4 style={{color: 'grey'}}>Machine Learning & Deep Learning Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>A young and enthusiastic engineer who has a great passion to learn and carry out duties efficiently, determined to excel and adaptable to working environments and conditions. I have a burning desire towards achieving excellent results and prove my capabilities as a Petroleum Engineer and Data Scientist by overcoming challenges, to contribute effectively and efficiently to the company’s productivity and growth.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>Address</h5>
            <p>2 Achi Street, Independence layout, Enugu, Nigeria</p>
            <h5>Phone</h5>
            <p>+234 802-825-9007</p>
            <h5>Email</h5>
            <p>kogunyale01@gmail.com</p>
            <h5>Web</h5>
            <p>kennyrich.githubio.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2019}
              schoolName="University of Ibadan"
              schoolDescription="Petroleum Engineering - Second Class Upper"/>
               {/*<Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />*/}
                 <hr style={{borderTop: '3px solid #833fb2'}}/>
              <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={"Till Date"}
              jobName="Software Engineer at ChatDesk, inc"
              jobDescription="I work with a team of intelligent developers to build softwares that help companies deliver customer services"/>
              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Data Science Intern at Paylater"
                jobDescription="Performed Exploratory Data Analysis on Dataset and I built predictive Model using Machine learning and Deep Learning Technique"/>
                <Experience
                startYear={2017}
                endYear={2018}
                jobName="Reservoir Engineer at Nigeria Development Petroleum Company"
                jobDescription="I performed analysis of PVT data from various oil wells. I used Prosper software for Production Simulation and Sensitivity Analysis. I also performed well testing analysis on various oil wells"/>
              <hr style={{borderTop: '3px solid #833fb2'}} />
            <h2>Certifications</h2>
            <Certifications
            certificationName="Microsoft Professional Program in Data Science"
            certificationDetails="The program takes the student through Ten(10) courses to becoming a certified as a Data Scientist by Microsoft"
            />
            <Certifications
            certificationName="Health, Safety and Environment Certificate"
            certificationDetails={"Level One and Two. HSE management involves managing, controlling and handling all aspects of health, safety and the environment in the petroleum industry – with the focus on major accident risk."}
            />
            <hr style={{borderTop: '3px solid #833fb2'}}/>
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="Python"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={65}
                      />
                      <Skills
                      skill="PyTorch"
                      progress={80}
                      />
                      <Skills
                      skill="Keras"
                      progress={80}
                      />
                      <Skills
                      skill="TensorFlow"
                      progress={80}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;