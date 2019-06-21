import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Exercise from './activities/Exercise';
import Sleep from './activities/Sleep';
import Work from './activities/Work';
import Relaxation from './activities/Relaxation';
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios';

const formatDate = () => {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

class ActivitiesScreen extends Component{
  constructor(props) {
    super(props)
    this.state = {
      exercise : 0,
      sleep: 0,
      date: formatDate(),
      work : 0,
      relaxation : 0,
      breakfast : '',
      lunch : '',
      dinner : '',
      snacks : '',
      meals : false
    }
    this.exercise = this.exercise.bind(this);
    this.sleep = this.sleep.bind(this);
    this.work = this.work.bind(this);
    this.relaxation = this.relaxation.bind(this);
    this.meals = this.meals.bind(this);
    this.submitActions = this.submitActions.bind(this);
  }
  

  exercise(e) {
    this.setState({
      exercise : e
    })
  }
  sleep(e) {
    this.setState({
      sleep : e
    })
  }
  work(e) {
    this.setState({
      work : e
    })
  }
  relaxation(e) {
    this.setState({
      relaxation : e
    })
  }
  meals() {
    this.setState({
      meals : !this.state.meals
    })
  }
  
  submitActions() {
    axios.post('http://localhost:3000/api/entry', {
      activites : true,
      date : this.state.date,
      exercise : this.state.exercise,
      sleep : this.state.sleep,
      work : this.state.work,
      relaxation : this.state.relaxation,
      breakfast : this.state.breakfast,
      lunch : this.state.lunch,
      dinner : this.state.dinner,
      snacks : this.state.snacks,
    })
    .then((response) => {console.log(response)})
    .catch((response) => {console.log(response)})
  }
  
  render() {
    let index = 0;
    const data = [
        { key: index++, label: 'None' },
        { key: index++, label: 'Unhealthy' },
        { key: index++, label: 'Somewhat Unhealthy' },
        { key: index++, label: 'Average' },
        { key: index++, label: 'Somewhat Healthy'},
        { key: index++, label: 'Healthy'}
    ];
    if (!this.state.meals) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}> How Much Time Have You Spent On</Text>
          <Exercise current = {this.state.exercise} exercise = {this.exercise}/>
          <Sleep current = {this.state.sleep} sleep = {this.sleep}/>
          <Work current = {this.state.work} work = {this.work}/>
          <Relaxation current = {this.state.relaxation} relaxation = {this.relaxation}/>
          <Button
            title="On To Meals"
            onPress={this.meals}
            />
        </View>
      )
    } else {
      return (
        <View style={styles.meals}>
          <Text style={styles.welcome}>How Have You Eaten Today?</Text>
          <Text style={styles.welcome}>Breakfast</Text>
          <ModalSelector
            style={{backgroundColor: 'white'}}
            initValue='Select'
            data={data}
            onChange={(option)=>{this.setState({breakfast : option.label})}} 
          />
          <Text style={styles.welcome}>Lunch</Text>
          <ModalSelector
            style={{backgroundColor: 'white'}}
            initValue='Select'
            data={data}
            onChange={(option)=>{this.setState({lunch : option.label})}} 
          />
          <Text style={styles.welcome}>Dinner</Text>
          <ModalSelector
            style={{backgroundColor: 'white'}}
            initValue='Select'
            data={data}
            onChange={(option)=>{this.setState({dinner : option.label})}} 
          />
          <Text style={styles.welcome}>Snacks</Text>
          <ModalSelector
            style={{backgroundColor: 'white'}}
            initValue='Select'
            data={data}
            onChange={(option)=>{this.setState({snacks : option.label})}} 
          />
          <Button
            title="Back To Activities"
            onPress={this.meals}
            />
          <Button
            title="Submit Todays Routine"
            onPress={this.submitActions}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  meals: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default ActivitiesScreen;