import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Switch} from 'react-native';
import { AreaChart, Grid, LineChart, YAxis, PieChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios';


 

class ComparisonsScreen extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data : []
    }
    this.grabInfo = this.grabInfo.bind(this);
  }
  grabInfo(option) {
    axios.get(`http://localhost:3000/api/entry?mood=${option.label}`)
    .then((response)=> {
      console.log(response.data)
      let exercise = 0;
      let work = 0;
      let sleep = 0;
      let relaxation = 0;
      for (let i = 0; i < response.data.length; i++) {
        exercise += response.data[i].Exercise;
        work += response.data[i].Work;
        sleep += response.data[i].Sleep;
        relaxation += response.data[i].Relaxation;
      }
      this.setState({
        data : [exercise, work, sleep, relaxation]
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
  render() {
    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
    return (
      <>
        <ModalSelector
            initValue='What Makes Me Feel....?'
            data={[{key : 0, label : 'Awful'}, {key: 1, label : 'Tired'}, {key: 2, label : 'Average'}, {key: 3, label : 'Energetic'}, {key: 4, label : 'God-Like'}]}
            onChange={this.grabInfo}
        />
        {!this.state.data ?
          null :
          (<PieChart
          style={ { height: 200 } }
          data={ this.state.data.map((value, index) => ({
            value,
            svg: {
              fill: randomColor(),
            },
            key: `pie-${index}`,
          })) }
          >
          </PieChart>)
        }
      </>
    )
}
}

export default ComparisonsScreen;