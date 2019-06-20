import React from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider'

const Work = (props) => {
  return (
    <>
    <Text>Work</Text>
    <Text>{props.current} Hours</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={16}
        step={1}
        value={0}
        onValueChange={props.work}
      />
    </>
  )
}

export default Work;