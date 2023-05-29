import { View, Text, Button, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const OpenAI = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const scrollViewRef = useRef();


  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true }); 
  };
  
  useEffect(() => {
    scrollToBottom(); // <-- Add this line
  }, [messages]);


  const generateText = async () => {
    const prompt = text;
    const apiKey = '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';
    const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };

    const data = {
      prompt: `${prompt}`,
      max_tokens: 1024,
      temperature: 0.7,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    const result = await response.json();
    const userMessage = {
      text,
      type: 'user',
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setText('');
    setTimeout(() => {
      const AIResponse = {
        text: result.choices[0].text.trim(),
        type: 'AI',
      };
      setMessages(prevMessages => [...prevMessages, AIResponse]);
    }, 500);
};



  const renderMessage = (message) => {
    const backgroundColor = message.type === 'AI' ? '#B3E5FC' : '#BDBDBD';
    const alignSelf = message.type === 'AI' ? 'flex-start' : 'flex-end';
    return (
      <View
        style={[
          styles.message,
          {
            alignSelf,
            backgroundColor,
          },
        ]}>
        <Text
          style={[
            styles.messageText,
            {
              color: message.type === 'AI' ? 'black' : 'white',
            },
          ]}>
          {message.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        style={{ backgroundColor: '#F0F0F0', padding: 5 }}
         contentContainerStyle={styles.scrollViewContent}>
        {messages.map((message, index) => (
          <View key={index}>{renderMessage(message)}</View>
        ))}
      </ScrollView>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="메시지를 입력하세요."
          onChangeText={(value) => setText(value)}
          value={text}
        />
        <TouchableOpacity style={styles.sendButton} onPress={generateText}>
          <FontAwesomeIcon size={20} icon={faPaperPlane} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    maxWidth: '70%',
    padding: 5,
    borderRadius: 10,
    marginVertical: 3,
  },
  messageText: {
    fontSize: 16,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: 'dodgerblue',
  },
  sendIcon: {
    color: 'white',
  },
  scrollViewContent: {
    justifyContent: 'flex-end', // <-- Add this line
  },
});

export default OpenAI;
