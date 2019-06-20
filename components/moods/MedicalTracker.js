import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalSelector from 'react-native-modal-selector';


const MedicalTracker = (props) => {
    return (
      <>
      <View style={styles.container}>
        <ModalSelector
            style = {{ marginTop: 10}}
            initValue='What Makes Me Feel....?'
            data={[
              {key : 0, label : 'Sick - In Lots of Pain'},
              {key: 1, label : 'Sick - Common Illness'},
              {key: 2, label : 'Somewhat Normal'},
              {key: 3, label : 'Mostly Normal'},
              {key: 4, label : 'Completely Normal'}
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

export default MedicalTracker;