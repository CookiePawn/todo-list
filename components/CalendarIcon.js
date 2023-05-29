import {
  Image
} from 'react-native'


const CalendarIcon = () => {
  return (
    <Image
      style = {{width: 40, height: 40}}
      source = {require('../assets/calendar.png')}
    />
  )
}


export default CalendarIcon