import {
  Image
} from 'react-native'


const UserIcon = () => {
  return (
    <Image
      style = {{width: 40, height: 40}}
      source = {require('../assets/user.png')}
    />
  )
}


export default UserIcon