import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,ScrollView,TextInput } from 'react-native';

var text_st = {fontSize:30, backgroundColor:'lightgray', padding:10, margin:10};
var input_st = {fonSize:30, borderWidth:1, padding:10, margin:10};


export default function App() {
  const [name, setName] = useState('');

  return(
    <View style= {{paddingTop:30}}>
      <Text style={text_st}>Hello,{name}</Text>
      <View style={{height:10}}></View>
      <TextInput style={input_st} onChangeText={function(t){setName(t)}}></TextInput>
    </View>
  );
}