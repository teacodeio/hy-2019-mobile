import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import AgeConfirmationScreen from '../Containers/AgeConfirmationScreen'
import PlaceSelection from '../Containers/PlaceSelection'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  AgeConfirmationScreen: {screen: AgeConfirmationScreen},
  PlaceSelection: { screen: PlaceSelection },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
