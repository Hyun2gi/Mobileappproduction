import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,ScrollView,TextInput } from 'react-native';

var text_st = {fontSize:30, padding:10, margin:10};
var input_st = {fontSize:30, borderWidth:1, padding:10, margin:10};

const styles= StyleSheet.create({
  box: {
    borderColor:'blue',
    borderWidth:2,
    margin:5,
    padding:5,
  },
  text : {
    backgroundColor:'wheat',
    fontSize: 30,
    margin:2,
    padding:2,
  },
});

function BoxGroup(props) {
  return(
    <View style={styles.box}>
      {props.children}
    </View>
  );
}

function Mult() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return(
    <View style={{flexDirection:"row"}}>
    <TextInput style={input_st} onChangeText={setA}/>
    <Text style={text_st}>x</Text>
    <TextInput style={input_st} onChangeText={setB}/>
    <Text style={text_st}>=</Text>
    <Text style={text_st}>{A*B}</Text>
    </View>
  );
}

export default function App() {
  const [ val , setVal ] = useState(0);

  return(
    <View style={{paddingTop:30}}>
      <BoxGroup><Mult/></BoxGroup>
      <BoxGroup>
      <Mult/>
      <Mult/>
      </BoxGroup>
    </View>
  );
}