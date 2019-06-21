import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const EmotionalTracker = (props) => {
    return (
      <>
      <View style={styles.container}>
        <ModalSelector
            style = {{ marginLeft: 50, marginRight: 50, backgroundColor: 'white' }}
            initValue='What Makes Me Feel....?'
            data={[
              {key : 0, label : 'Depressed'},
              {key: 1, label : 'Sad'},
              {key: 2, label : 'Average'},
              {key: 3, label : 'Happy'},
              {key: 4, label : 'Complete Bliss'}
            ]}
            onChange={props.setFeeling}
        />
        </View>
      </>  
    )
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

export default EmotionalTracker;