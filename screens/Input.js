import {
  View, 
  Text,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {useState, useEffect} from 'react'
import {db} from '../DB/FireBase'
import { useIsFocused } from '@react-navigation/native';


const Input = (props) => {
  const {params} = props.route;
  const id = params? params.id:null;
  const pw = params? params.pw:null;
  const name = params? params.name:null;
  const nickname = params? params.nickname:null;
  const phone = params? params.phone:null; 
  const [myTextInput, setMyTextInput] = useState("");
  const [myTextList, setMyTextList] = useState([])
  const [isFocused, setIsFocused] = useState(false);
  const onFocused = useIsFocused();
  const [todo, setTodo] = useState([]);


  useEffect(() => {
    readfromDB()
  }, [onFocused]);

  const readfromDB = async () => {
    try {
      const data = await db.collection("todos")
      let tempArray = []
      data.get().then(snap => {
        snap.forEach((doc) => {
          tempArray.push({ ...doc.data(), id: doc.id})
        })
        setTodo(tempArray)
      })
    } catch(error) {
      console.log(error.message)
    }
  }

  const addTodo = async (day) => {
    const currentDate = new Date();
    try {
      await db.collection("todos").doc().set({ 
        ID : id,
        DATE: currentDate.toISOString().split('T')[0],  
        TODO: myTextInput,
      })
      readfromDB()
    } catch (error) {
      console.log(error)
    }
  }



  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onChangeInput = (e) => {
    setMyTextInput(e)
  }
  const onAddTextInput = () => {
    if (myTextInput != "") {
      addTodo()
    }
    setMyTextInput('')
  }

  
  const onTextDelete = async (position) => {
    let tmp = todo[position]

    const newArray = todo.filter((num, index) => {
      return position != index
    })

    try {
      await db.collection("todos").doc(tmp.id).delete().than(
        ()=> {
          alert('삭제되었습니다!')
          readfromDB()
        }   
      )  
    } catch (error) {   
      console.log(error)
    }


    setTodo(newArray)
  }

  return (
    <View style={{
      flex : 1,
      backgroundColor: 'white'}}>
      <View style = {{
        width: '100%',  
        marginTop: 20,
        flexDirection : 'row'
      }}> 
        <Text
          style={{
            position: 'absolute',
            top: -7,
            left: 10,
            zIndex: 100,
            backgroundColor: 'white',
            paddingLeft: 7,
            paddingRight: 7
          }}>
          일정 추가
        </Text>
        <TextInput
          value = {myTextInput}
          style = {[styles.textInput,
                    isFocused ? styles.inputFocused : null,]}
          placeholder = {'입력해주세요'}
          placeholderTextColor='#C5C8CE'
          onChangeText = {onChangeInput}
          multiline = {true}
          maxLength = {100}
          editable = {true}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <TouchableOpacity
          style = {styles.touchable}
          title = 'Add Text Input'
          onPress = {onAddTextInput}>
          <Text style = {{color: 'white', fontWeight: 'bold'}}>추가</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {
          todo.map((item, idx) => {
            if (item.ID == id) {
              return (
                <TouchableOpacity
                  key = {idx}
                >
                  <Text
                    style={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      zIndex: 100,
                      backgroundColor: 'white',
                      paddingLeft: 7,
                      paddingRight: 7
                    }}>
                    {item.DATE}  
                  </Text>
                  <Text
                    style={{
                      position: 'absolute',
                      top: '50%',  
                      left: '85%',
                      color: 'red',
                      zIndex: 100,
                      backgroundColor: 'white',
                      paddingLeft: 7,
                      paddingRight: 7
                    }}
                    onPress = {() => onTextDelete(idx)}>  
                    삭제 
                  </Text>
                  <Text
                    style = {styles.mainText}
                  >
                    {item.TODO}  
                  </Text>
                </TouchableOpacity>
              )
            }
          })
        }
      </ScrollView>
    </View>
  )
}











const styles = StyleSheet.create({
  textInput : {
    width: '80%',   
    height: 50,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'lightskyblue',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,   
    backgroundColor: 'white',
    textAlign: 'center',
    lineHeight: 48,
    outline: 'none'
  },
  touchable: {
    width: '20%',
    backgroundColor: 'lightskyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderLeftWidth: 0,  
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,  
    borderColor: 'lightskyblue' 
  },
  mainText : {
    fontSize : 20,
    color : 'black',
    padding : 10,
    marginTop: 20,
    backgroundColor : 'white',
    borderWidth : 2,
    borderColor: 'gray',
    borderRadius : 10,
    textAlign: 'center'
  },
  inputFocused: {
    borderColor: 'gray',
  },
})




export default Input