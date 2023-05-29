import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from './navigators/DrawerNavigator'
import TabNavigator from './navigators/TabNavigator'
import StackNavigator from './navigators/StackNavigator'




export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}