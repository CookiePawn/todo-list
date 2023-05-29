import {
  Button
} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import User from '../screens/User'
import Calendar from '../screens/Calendar'
import Input from '../screens/Input'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import ChatGPT from '../screens/ChatGPT'
import TabNavigator from './TabNavigator'
import HomeIcon from '../assets/home.png'
import LoginIcon from '../components/LoginIcon'


const Stack = createStackNavigator()




const StackNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName = 'Login'
      screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name = "Login" component = {Login}
          options = {{
            title: '로그인',
            headerShown: true,
            headerLeft: LoginIcon,
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
            }
          }}
        />
        <Stack.Screen name = "SignUp" component = {SignUp}
          options = {{
            title: '회원가입',
            headerShown: true,
            headerLeft: LoginIcon,
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
            }
          }}
        />
        <Stack.Screen name = "Home" component = {TabNavigator}
          options = {{
            title: '홈',
            headerTitle: HomeIcon,
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerRight: () => (
              <Button
                title = 'INFO'
                onPress = {() => {
                  alert('5월 3일 ~ 5월 8일')
                }}
              />
            )
          }}
        />
        <Stack.Screen name = "User" component = {User}
          initialParams={{
            userIdx: 50,
            userName:'JunChul',
            userNickname: 'CookiePawn'
          }}
          options = {{
            title: '유저',
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
            }
          }}
        />
        <Stack.Screen name = "Calendar" component = {Calendar}
          options = {{
            title: '달력',
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
            }
          }}
        />
        <Stack.Screen name = "Input" component = {Input}
          options = {{
            title: '글 입력',
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
            }
          }}
        />
      </Stack.Navigator>
  )
}


export default StackNavigator