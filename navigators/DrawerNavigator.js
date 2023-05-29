import {
  Button,
  Image
} from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer'
import Home from '../screens/Home'
import User from '../screens/User'
import Calendar from '../screens/Calendar'
import Input from '../screens/Input'
import StackNavigator from './StackNavigator'


const Drawer = createDrawerNavigator()



const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName = 'Home'
      drawerPosition = 'right'
      drawerStyle = {{
        backgroundColor : 'lightskyblue',
        width: 200
      }}
      drawerContentOptions = {{
        activeTintColor: 'black',
        activeBackgroundColor: 'white'
      }}
    >
      <Drawer.Screen name = "Home" component = {StackNavigator}
        options = {{
          title : 'Home',
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              title="Draw"
              color='red'
            />
          )
        }}
      />
      <Drawer.Screen name = "User" component = {User}
        options = {{
          title : 'User',
          drawerLabel : '유저'
        }}
      />
      <Drawer.Screen name = "Calendar" component = {Calendar}
        options = {{
          title : 'Calendar',
          drawerLabel : '달력'
        }}
      />
      <Drawer.Screen name = "Input" component = {Input}
        options = {{
          title : 'Input',
          drawerLabel : '글 입력'
        }}
      />
    </Drawer.Navigator>
  )
}


export default DrawerNavigator