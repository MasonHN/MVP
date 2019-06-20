import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Switch, Picker, FlatList} from 'react-native';
import Slider from '@react-native-community/slider';

const Sleep = (props) => {
  return (
    <>
    <Text>Sleep</Text>
    <Text>{props.current} Hours</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={16}
        step={1}
        value={0}
        onValueChange={props.sleep}
        // minimumTrackTintColor="#FFFFFF"
        // maximumTrackTintColor="#000000"
      />
    </>
  )
}

export default Sleep;