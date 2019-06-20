import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import * as scale from 'd3-scale'

class FoodGraph extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const health = ['None', 'Unhealthy', 'Somewhat Unhealthy', 'Somewhat Healthy', 'Healthy']
        const CUT_OFF = 20
        const Labels = ({ x, y, bandwidth, data }) => (
            this.props.data.map((value, index) => (
                <Text
                    key={ index }
                    x={ x(index) + (bandwidth / 2) }
                    y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                    fontSize={ 14 }
                    fill={ value >= CUT_OFF ? 'white' : 'black' }
                    alignmentBaseline={ 'middle' }
                    textAnchor={ 'middle' }
                >
                    {value}
                </Text>
            ))
        )

        return (
            <View style={{ height: 200}}>
                <BarChart
                    style={{ flex: 1 }}
                    data={this.props.data}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.HORIZONTAL}/>
                    <Labels/>
                </BarChart>
                <XAxis
                    style={{ marginTop: 10 }}
                    data={ [0, 1, 2, 3, 4] }
                    scale={scale.scaleBand}
                    formatLabel={ (value, index) => health[index] }
                    labelStyle={ { color: 'black' } }
                    svg={{ fontSize: 7, fill: 'black' }}
                />
            </View>
        )
    }

}

export default FoodGraph;