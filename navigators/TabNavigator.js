import {
  Button
} from 'react-native'
import Home from '../screens/Home';
import User from '../screens/User';
import Calendar from '../screens/Calendar'
import Input from '../screens/Input'
import ChatGPT from '../screens/ChatGPT'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TabBarIcon from '../components/TabBarIcon'
import HomeIcon from '../components/HomeIcon'
import CalendarIcon from '../components/CalendarIcon'
import InputIcon from '../components/InputIcon'
import UserIcon from '../components/UserIcon'
import ChatGPTIcon from '../components/ChatGPTIcon'




const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator initialRouteName = "Home"
        tabBarOptions = {{
          activeBackgroundColor : "skyblue",
          activeTintColor : "blue",
          //inactiveBackgroundColor : 'yellow',
          style:{
            backgroundColor : "#c6cbef"
          },
        }}
        screenOptions={({route})=>({
          tabBarLabel:route.name,
          tabBarIcon:({focused})=>(
            TabBarIcon(focused,route.name)
          )
        })}>
        <Tab.Screen name = "Home" component = {Home}
          options = {{
            tabBarLabel: '홈',
            title: '홈',
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerTintColor: 'white',
            headerLeft: HomeIcon,
            headerRight: () => (
              <Button
                title = 'INFO'
                onPress = {() => {
                  alert('이름 : 안준철\n학번 : 2019243016\n개발내용 : Todo-List\n개발목적 : 개인프로젝트')
                }}
              />
            )
          }}
        />
        <Tab.Screen name = "Input" component = {Input}
          options = {{
            tabBarLabel: '일정추가',
            title: '일정추가',
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerTintColor: 'white',
            headerLeft: InputIcon
          }}
        />
        <Tab.Screen name = "Calendar" component = {Calendar}
          options = {{
            tabBarLabel: '달력',
            title: '달력',
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerTintColor: 'white',
            headerLeft: CalendarIcon
          }}
        />
        <Tab.Screen name = "User" component = {User}
          initialParams={{
            userIdx: 50,
            userName:'JunChul',
            userNickname: 'CookiePawn'
          }}
          options = {{
            tabBarLabel: '사용자',
            title: '사용자',
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerTintColor: 'white',
            headerLeft: UserIcon
          }}
        />
        <Tab.Screen name = "ChatGPT" component = {ChatGPT}
          options = {{
            title: 'ChatGPT',
            headerShown: true,
            headerLeft: ChatGPTIcon,
            headerStyle: {backgroundColor: 'lightskyblue'},
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white'
            }
          }}
        />
      </Tab.Navigator>
  );
}

export default TabNavigator