import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const MentalTracker = (props) => {
    return (
      <>
      <View style={styles.container}>
        <ModalSelector
            style = {{ marginTop: 10}}
            initValue='What Makes Me Feel....?'
            data={[
              {key: 0, label : 'Scattered'},
              {key: 1, label : 'Unproductive'},
              {key: 2, label : 'Marginally Focused'},
              {key: 3, label : 'Completely Focused'},
              {key: 4, label : 'Zen God'}
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

export default MentalTracker;