import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {useState} from 'react'


const OpenAI = () => {
  const [text, setText] = useState('')
  const [response, setResponse] = useState('') 
  const generateText = async () => {
    const prompt = text;
    const apiKey = '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'
    const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions'

    const headers = {
      'Content-Type' : 'application/json',
      Authorization: `Bearer ${apiKey}`
    }

    const data = {
      prompt : prompt,
      max_tokens: 1024,
      temperature: 0.7,
    }

    const response = await fetch(url, {
      method:'POST',
      headers:headers,
      body:JSON.stringify(data)
    })
    const result = await response.json()
    setResponse(result.choices[0].text)
    //setResponse(JSON.stringify(result))
  }


  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  

  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center' 
    }}>
      <View style = {styles.inputBox}>
        <TextInput
          style = {[styles.textInput, isFocused ? styles.inputFocused : null,]}
          placeholder = '질문을 해주세요!'
          placeholderTextColor = 'white'
          value = {text}
          onChangeText = {(value) => setText(value)} 
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <TouchableOpacity
          style = {styles.backBtn}
          title = "Send to OpenAI"
          onPress = {generateText}
        >
          <Text style = {{color: 'white', fontWeight: 'bold'}}>Send to OpenAI</Text>
        </TouchableOpacity> 
      </View>
      <ScrollView style = {styles.responseBox}>
        <Text>{response}</Text>
      </ScrollView>
    </View> 
  )
}



const styles = StyleSheet.create({
  inputBox: {
    width: '98%',
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  responseBox: {
    width: '98%',
    height: '50%', 
    borderRadius: 10,
    backgroundColor: 'white'
  },
  textInput: {
    width: '95%',
    height: 40,   
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray', 
    backgroundColor: '#c9c9c9', 
    outline: 'none' 
  },
  backBtn: {
    width: '95%',
    height: 40,
    marginTop: 5,
    backgroundColor: 'lightskyblue',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputFocused: {
    borderColor: 'lightskyblue',
  },
})



export default OpenAI