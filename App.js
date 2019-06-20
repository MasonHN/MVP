/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import ActivitiesScreen from './components/ActivitiesScreen';
import ProfileScreen from './components/ProfileScreen';
import MoodsScreen from './components/MoodsScreen';
import ComparisonsScreen from './components/ComparisonsScreen';

const MainNavigator = createStackNavigator({
  Profile: {screen: ProfileScreen},
  Activities: {screen: ActivitiesScreen},
  Moods : {screen: MoodsScreen},
  Comparisons : {screen: ComparisonsScreen}
});

const App = createAppContainer(MainNavigator);
export default App;


