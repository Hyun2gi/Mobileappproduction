import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,ScrollView,TextInput } from 'react-native';

var text_st = {fontSize:30, backgroundColor:'lightgray', padding:10, margin:10};
var input_st = {fonSize:30, borderWidth:1, padding:10, margin:10};


export default function App() {
  const [name, setName] = useState('');
  const [greet,setGreet] = useState('');

  return(
    <View style={{paddingTop:30}}>
      <Text style={text_st}>{greet}, {name}</Text>
      <TextInput style={input_st} onChangeText={setName}></TextInput>
      <View style={{margin:10, flexDirection:"row-reverse"}}>
        <Button title="Nice" onPress={function() {setGreet('Nice to meet you')}}/>
        <View style={{width:10}}></View>
        <Button title="Hello" onPress={function() {setGreet('Hello')}}/>
      </View>
    </View>
  );
}