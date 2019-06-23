import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ModalSelector from "react-native-modal-selector";

const PhysicalTracker = props => {
  return (
    <>
      <View style={styles.container}>
        <ModalSelector
          style={{ marginLeft: 50, marginRight: 50, backgroundColor: "white" }}
          initValue="What Makes Me Feel....?"
          data={[
            { key: 0, label: "Awful" },
            { key: 1, label: "Tired" },
            { key: 2, label: "Average" },
            { key: 3, label: "Energetic" },
            { key: 4, label: "Olympic Athlete" }
          ]}
          onChange={props.setFeeling}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default PhysicalTracker;
