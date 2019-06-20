import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Switch, Picker, FlatList} from 'react-native';
import axios from 'axios';
import { ProgressCircle } from 'react-native-svg-charts'


class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
    this.getIt = this.getIt.bind(this);
  }
  getIt() {
    axios.get('http://localhost:3000/')
    .then((response)=> {
      console.log(response)
    })
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex : 1, backgroundColor : 'whitesmoke'}}>
        <Button title='Your Routine' onPress={() => navigate('Activities')}/>
        <Button title='Your Moods' onPress={() => navigate('Moods')}/>
        <Button title="Analyze" onPress={() => navigate('Comparisons')}/>
        <ProgressCircle
                style={ { height: 200, marginTop: 200 } }
                progress={ 0.7 }
                progressColor={'green'}
                startAngle={ -Math.PI * 0.8 }
                endAngle={ Math.PI * 0.8 }
            />
      </View>
    )
  }
}

export default ProfileScreen;