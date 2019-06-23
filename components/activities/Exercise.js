import React from "react";
import { View, Text, Picker, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const Exercise = props => {
  return (
    <>
      <Text>Exercise?</Text>
      <Text>{props.current} Minutes</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={120}
        step={15}
        value={0}
        onValueChange={props.exercise}
      />
    </>
  );
};

export default Exercise;
