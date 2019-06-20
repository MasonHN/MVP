import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Switch, Picker, FlatList} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import axios from 'axios';



class MoodsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emotional : '',
      mental : '',
      physical : '',
      medical : ''
    }
    this.submitMoods = this.submitMoods.bind(this);
  }

  submitMoods() {
      axios.post('http://localhost:3000/api/entry', {
        moods : true,
        emotional : this.state.emotional,
        mental : this.state.mental,
        physical : this.state.physical,
        medical : this.state.medical
      })
      .then((response) => {console.log(response)})
      .catch((response) => {console.log(response)})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>How Have You Felt Today?</Text>
        <Text style={styles.welcome}>Emotional</Text>
          <ModalSelector
            initValue='Select'
            data={[{key : 0, label : 'Depressed'}, {key: 1, label : 'Sad'}, {key: 2, label : 'Average'}, {key: 3, label : 'Happy'}, {key: 4, label : 'Complete Bliss'}]}
            onChange={(option)=>{this.setState({emotional : option.label})}} 
          />
          <Text style={styles.welcome}>Mental</Text>
          <ModalSelector
            initValue='Select'
            data={[{key : 0, label : 'Scattered'}, {key: 1, label : 'Unproductive'}, {key: 2, label : 'Marginally Focused'}, {key: 3, label : 'Completely Focused'}, {key: 4, label : 'Zen God'}]}
            onChange={(option)=>{this.setState({mental : option.label})}} 
          />
          <Text style={styles.welcome}>Physical</Text>
          <ModalSelector
            initValue='Select'
            data={[{key : 0, label : 'Awful'}, {key: 1, label : 'Tired'}, {key: 2, label : 'Average'}, {key: 3, label : 'Energetic'}, {key: 4, label : 'God-Like'}]}
            onChange={(option)=>{this.setState({physical : option.label})}} 
          />
          <Text style={styles.welcome}>Medical</Text>
          <ModalSelector
            initValue='Select'
            data={[{key : 0, label : 'Sick - In lots of Pain'}, {key: 1, label : 'Sick - Common Illness'}, {key: 2, label : 'Somewhat Normal'}, {key: 3, label : 'Mostly Normal'}, {key: 4, label : 'Completely Normal'}]}
            onChange={(option)=>{this.setState({medical : option.label})}} 
          />
          <Button
            title="Submit Moods"
            onPress={this.submitMoods}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
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

export default MoodsScreen;