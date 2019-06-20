import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios';
import EmotionalTracker from './moods/EmotionalTracker';
import PhysicalTracker from './moods/PhysicalTracker';
import MentalTracker from './moods/MentalTracker';
import MedicalTracker from './moods/MedicalTracker';
import ActivitesGraph from './graphs/ActivityGraph';
import FoodGraph from './graphs/FoodGraph';


class ComparisonsScreen extends Component{
  constructor(props) {
    super(props)
    this.state = {
      activities : [],
      meals : [],
      colors : ['tomato', 'turquoise', 'teal', 'violet'],
      mood: '',
      feeling: 0
    }
    this.grabInfo = this.grabInfo.bind(this);
    this.setMood = this.setMood.bind(this);
    this.setFeeling = this.setFeeling.bind(this);
  }
  grabInfo() {
    axios.get(`http://localhost:3000/api/entry?${this.state.mood}=${this.state.feeling}`)
    .then((response)=> {
      let exercise = 0;
      let work = 0;
      let sleep = 0;
      let relaxation = 0;
      const food = [];
      for (let i = 0; i < response.data.length; i++) {
        exercise += response.data[i].Exercise / 60 ;
        work += response.data[i].Work;
        sleep += response.data[i].Sleep;
        relaxation += response.data[i].Relaxation;
        food.push(response.data[i].Breakfast, response.data[i].Lunch, response.data[i].Dinner, response.data[i].Snacks);
      }
      this.setState({
        activities : [exercise, work, sleep, relaxation],
        meals : [ 
          food.filter(element => element === 'None').length,
          food.filter(element => element === 'Unhealthy').length,
          food.filter(element => element === 'Somewhat Unhealthy').length,
          food.filter(element=> element === 'Somewhat Healthy').length,
          food.filter(element => element === 'Healthy').length
        ]
      }, () => {console.log(this.state)})
    })
    .catch((err) => {
      console.log(err)
    })
  }
  setMood(option) {
    console.log(option.label)
    let label = option.label
    this.setState({
      mood : label
    })
  }
  setFeeling(option) {
    console.log(option)
    this.setState({
      feeling : option.key
    }, this.grabInfo())
  }
  render() {
    return (
      <>
      <View style={styles.container}>
        <ModalSelector
            style = {{ marginTop: 10}}
            initValue='What Do You Want To Track?'
            data={[
              {key: 0, label: 'Medical'},
              {key: 1, label: 'Physical'},
              {key: 2, label: 'Mental'},
              {key: 3, label: 'Emotional'}
            ]}
            onChange={this.setMood}
        />
        {this.state.mood === '' ? 
        null : this.state.mood === 'Physical' ? 
        <PhysicalTracker setFeeling = {this.setFeeling}/> : this.state.mood === 'Medical' ?
        <MedicalTracker setFeeling = {this.setFeeling}/> : this.state.mood === 'Emotional' ?
        <EmotionalTracker setFeeling = {this.setFeeling}/> : <MentalTracker setFeeling = {this.setFeeling}/>
        }
        {!this.state.activities.length > 0 ?
          null :
          (
          <>
          <Text style={styles.welcome}>What You Did</Text>
          <ActivitesGraph data = {this.state.activities}/>
          <Text style={styles.welcome}>How You Ate</Text>
          <FoodGraph data = {this.state.meals}/>
          </>
          )
        }
        </View>
      </>  
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'whitesmoke'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default ComparisonsScreen;