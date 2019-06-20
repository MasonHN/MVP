import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Switch, Picker, FlatList} from 'react-native';
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
      socialInteractions : '',
      meals : false,
      social: false
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
      meals : true
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
      socialInteractions : this.state.socialInteractions,
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
    } else if (!this.state.social) {
      return (
        <View style={styles.container}>
          <Text>Breakfast</Text>
          <ModalSelector
            initValue='Select'
            data={data}
            onChange={(option)=>{this.setState({breakfast : option.label})}} 
          />
          <Text>Lunch</Text>
          <ModalSelector
            initValue='Select'
            data={data}
            onChange={(option)=>{this.setState({lunch : option.label})}} 
          />
          <Text>Dinner</Text>
          <ModalSelector
            initValue='Select'
            data={data}
            onChange={(option)=>{this.setState({dinner : option.label})}} 
          />
          <Text>Snacks</Text>
          <ModalSelector
            initValue='Select'
            data={data}
            onChange={(option)=>{this.setState({snacks : option.label})}} 
          />
          <Button
            title="Submit Todays Routine"
            onPress={this.submitActions}
          />
        </View>
      )
    }
    //  else {
    //   return (

    //   <View>
    //     <Text>Did You have meaningfull social interactions Today?</Text>
    //     <ModalSelector
    //         initValue='Select'
    //         data={[{key : 0, label : 'yes'}, {key: 1, label : 'no'}]}
    //         onChange={(option)=>{this.setState({socialInteractions : option.label})}} 
    //         />
    //     <Button
    //       title="Submit Todays Actions"
    //       onPress={this.submitActions}
    //       />
    //   </View>
    // )
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default ActivitiesScreen;