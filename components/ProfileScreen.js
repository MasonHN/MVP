import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios';
import { ProgressCircle } from 'react-native-svg-charts'
import SplashScreen from 'react-native-splash-screen'


class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      overallMood : 0
    }
    
  }
  // static navigationOptions = {
  //   title: 'Home',
  // };
  
  componentDidMount() {
    axios.get('http://ec2-3-14-132-111.us-east-2.compute.amazonaws.com/api/entry')
    .then((response)=> {
      let mood = 0;
      for (let i = 0; i < response.data.length; i++) {
        mood += ((response.data[i].Mental + response.data[i].Emotional + response.data[i].Physical + response.data[i].Medical) / 4)
      }
      this.setState({
        overallMood : mood / response.data.length 
      }, () => {console.log(this.state.overallMood)})
    })
    .catch(err => console.log(err))
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <View style={{flex : 1, backgroundColor : 'whitesmoke'}}>
        {/* <Button title='Your Routine' onPress={() => navigate('Activities')}/>
        <Button title='Your Moods' onPress={() => navigate('Moods')}/>
        <Button title="Analyze" onPress={() => navigate('Comparisons')}/> */}
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 200}}>Your Status</Text>
        <ProgressCircle
                style={ { height: 200, marginTop: 50 } }
                progress={ 0.2 * (this.state.overallMood + 1) }
                progressColor={'blue'}
                startAngle={ -Math.PI * 0.75 }
                endAngle={ Math.PI * 0.75 }
                strokeWidth={12}
            />
      </View>
    )
  }
}

export default ProfileScreen;