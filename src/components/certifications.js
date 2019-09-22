import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Certifications extends Component {
  render() {
    return(
      <Grid>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.certificationName}</h4>
          <p>{this.props.certificationDetails}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Certifications;