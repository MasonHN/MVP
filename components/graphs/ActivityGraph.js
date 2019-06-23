import React from "react";
import { View } from "react-native";
import { BarChart, XAxis } from "react-native-svg-charts";
import { Text } from "react-native-svg";
import * as scale from "d3-scale";

class ActivityGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activities = ["Exercise", "Work", "Sleep", "Relaxation"];
    const CUT_OFF = 20;
    const Labels = ({ x, y, bandwidth }) =>
      this.props.data.map((value, index) => (
        <Text
          key={index}
          x={x(index) + bandwidth / 2}
          y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
          fontSize={14}
          fill={value >= CUT_OFF ? "white" : "black"}
          alignmentBaseline={"middle"}
          textAnchor={"middle"}
        >
          {value}
        </Text>
      ));

    return (
      <View style={{ height: 200 }}>
        <BarChart
          style={{ flex: 1 }}
          data={this.props.data}
          svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          gridMin={0}
        >
          <Labels />
        </BarChart>
        <XAxis
          style={{ marginTop: 10 }}
          data={[0, 1, 2, 3]}
          scale={scale.scaleBand}
          formatLabel={(value, index) => activities[index]}
          labelStyle={{ color: "black" }}
        />
      </View>
    );
  }
}

export default ActivityGraph;
