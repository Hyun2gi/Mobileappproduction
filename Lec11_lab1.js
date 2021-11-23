import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,ScrollView,TextInput } from 'react-native';

var text_st = {fontSize:30, padding:10, margin:10};
var input_st = {fontSize:30, borderWidth:1, padding:10, margin:10};

function Multi() {
  const [A,setA] = useState(0);
  const [B,setB] = useState(0);

  return(
    <View style={{marginTop:20, flexDirection:"row"}}>
      <TextInput style={input_st} onChangeText={setA}/>
      <Text style={text_st}> X </Text>
      <TextInput style={input_st} onChangeText={setB}/>
      <Text style={text_st}> = {A * B}</Text>
    </View>
  );
}

export default function App() {
  return(
    <View>
    <Multi/>
    <Multi/>
    <Multi/>
    </View>
  ); 
}