import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Switch, Picker, FlatList} from 'react-native';
import axios from 'axios';



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
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile
        </Text>
        <Button
          title="Add Daily Activities"
          onPress={() => navigate('Activities')}
        />
        <Button
          title="Add Daily Moods"
          onPress={() => navigate('Moods')}
        />
        <Button
          title="Analyze"
          onPress={() => navigate('Comparisons')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

export default ProfileScreen;