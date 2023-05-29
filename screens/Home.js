import {
  View, 
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'

const Home = (props) => {
  const {params} = props.route;
  const id = params? params.id:null;
  const pw = params? params.pw:null;
  const name = params? params.name:null;
  const nickname = params? params.nickname:null;
  const phone = params? params.phone:null; 

  return (
    <View style={{
      flex : 1,
      justifyContent : 'center',
      alignItems: 'center'}}>
      <Text style = {styles.nickname}>사용자 : {nickname}</Text>  
      <TouchableOpacity
        style = {styles.touchable}
        onPress = {()=> {
          props.navigation.navigate("Input", {
            id: id,
            pw: pw,
            nickname: nickname,
            name: name,
            phone: phone
          })
        }}
      >
        <Image
          style = {styles.icon}
          source = {require('../assets/to-do-list.png')}
        />
        <Text>일정 추가하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.touchable}
        onPress = {()=> {
          props.navigation.navigate("Calendar", {
            id: id,
            pw: pw,
            nickname: nickname,
            name: name,
            phone: phone
          })
        }}
      >
        <Image
          style = {styles.icon}
          source = {require('../assets/calendar.png')}
        />
        <Text>달력 보기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.touchable}
        onPress = {()=> {
          props.navigation.navigate("User", {
            id: id,
            pw: pw,
            nickname: nickname,
            name: name,
            phone: phone
          })
        }}
      >
        <Image
          style = {styles.icon}
          source = {require('../assets/user.png')}
        />
        <Text>{nickname}님 정보</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.touchable}
        onPress = {()=> {
          props.navigation.navigate("Login")
        }}
      >
        <Image
          style = {styles.icon}
          source = {require('../assets/logout.png')}
        />
        <Text>로그아웃</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  nickname: {
    width: '95%',    
    fontWeight: 'bold', 
    fontSize: 15,
    backgroundColor: 'white',  
    borderColor: 'lightskyblue',
    borderWidth: 2,
    borderRadius: 5,  
    margin: 5,
    padding: 5  
  },
  touchable: {
    width: '95%',
    height: '22%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'lightskyblue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10
  }
})


export default Home