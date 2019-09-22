import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuD3wfqjTueUGgmVEou1ddYcgF019KJ36cSQPRHzpo1LlSnFdi7g) center / cover'}} >Malaria Cell Classification using Keras</CardTitle>
            <CardText>
              Malaria is a life-threatening disease caused by parasites that are transmitted to people through the bites of infected female Anopheles mosquitoes. It is preventable...
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KennyRich/Malaria-Cell-Classification-Using-CNN"  target= "_blank" colored>GitHub</Button>
              <Button href="https://medium.com/analytics-vidhya/malaria-cell-image-classification-using-keras-89a324f52131" target="_blank" colored>Medium</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" style={{color:'grey'}}/>
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuD3wfqjTueUGgmVEou1ddYcgF019KJ36cSQPRHzpo1LlSnFdi7g) center / cover'}} >Convolutional Neural Network on Nigeria Foods</CardTitle>
            <CardText>
              Most data set used in machine learning and deep learning are datasets that are foreign with the Nigerian System. Hence, it delights me to get a data set familiar...
            </CardText>
            <CardActions border>
              <Button href="https://github.com/KennyRich/CNN-model-on-Nigerian-Food" target="_blank" colored>GitHub</Button>
              <Button href="blog.usejournal.com/convolutional-neural-network-on-nigerian-foods-565493fcdd0e" target="_blank" colored>Medium</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" style={{color:'grey'}}/>
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuD3wfqjTueUGgmVEou1ddYcgF019KJ36cSQPRHzpo1LlSnFdi7g) center / cover'}} >Convolutional Neural Network on Oil Spills in Niger Delta</CardTitle>
            <CardText>
              This post is a sequel to all my previous posts on Convolutional Neural Networks and this is based on classifying if there is an oil spill in a region or if there...
            </CardText>
            <CardActions border>
              <Button href = "https://github.com/KennyRich/Convolutional-Neural-Network-for-Classifying-oil-spills-in-Niger-Delta" target = "_blank" colored>GitHub</Button>
              <Button href = "https://blog.usejournal.com/convolutional-neural-network-on-oil-spills-in-niger-delta-71e6e6ecb674" target = "_blank" colored>Medium</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" style={{color:'grey'}} />
            </CardMenu>
          </Card>
        </div>
      )
    } if(this.state.activeTab === 1) {
      return (
        <div><h1>Deep Learning</h1></div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Deep Learning</Tab>
          <Tab>Machine Learning</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;