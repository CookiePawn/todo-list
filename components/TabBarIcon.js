import {Image} from 'react-native'


const TabBarIcon = (focused, name) => {
  let iconImagePath;
  if (name == "Home") {
    iconImagePath = require('../assets/home.png')
  } else if (name == 'User') {
    iconImagePath = require('../assets/user.png')
  } else if (name == 'Calendar') {
    iconImagePath = require('../assets/calendar.png')
  } else if (name == 'Input') {
    iconImagePath = require('../assets/to-do-list.png')
  } else if (name == 'ChatGPT') {
    iconImagePath = require('../assets/chat.png')
  }


  return (
    <Image style = {{
        width: focused ? 24 : 20,
        height: focused ? 24 : 20
      }}
      source = {iconImagePath}
    />
  )
}


export default TabBarIcon