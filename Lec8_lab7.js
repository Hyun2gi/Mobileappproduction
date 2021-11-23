import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,ImageBackground, TouchableHighlight, TextInput} from 'react-native';
import { Audio } from 'expo-av';

var text_st = {fontSize:20, borderWidth:1, borderColor:'gray', flex:1, padding:5, margin:2};
var input_st ={fontSize:20, borderWidth:1, flex:1, padding:5, margin:5};

var N = ['Ewha', 'June', 'Jane', 'Nick'];
var P = [1234, 3347, 1111, 1212];

export default function App() {

  const [name, setName] = useState('');
  const [phone,setPhone] = useState('');
  const[refresh,setRefresh] = useState(0);

  function add_item() {
    N.push(name);
    P.push(phone);
    setRefresh(refresh+1);
  }
  
  var L = [];

  for(var i=0;i < N.length;i++)
  {
    a = <View style={{flexDirection:"row"}}><Text style={text_st}>{N[i]}</Text><Text style={text_st}>{P[i]}</Text></View>;
    L.push(a);
  }

  return(
    <View style={{marginTop:30}}>
      <Text style={{fontSize:40}}>Phone Book</Text>
      <View style={{flexDirection:"row"}}>
        <TextInput style={input_st} onChangeText={setName} />
        <TextInput style={input_st} onChangeText={setPhone} />
        <Button title="ADD" onPress={add_item}/>
      </View>
      {L}
      </View>
  );
}


