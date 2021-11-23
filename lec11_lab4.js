import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,ImageBackground, TouchableHighlight} from 'react-native';
import { Audio } from 'expo-av';

var text_st = {fontSize:30, padding:10, margin:10};
var button_st = {color:'dodgerblue'};

export default function App() {
  const [N,setN] = useState(0);

  return(
    <View style={{flex:1, marginTop:40, alignItems:'center'}}>
      <Text style={text_st}>Touched {N} times</Text>

      <TouchableHighlight underlayColor='orange' onPress={function(){setN(N+1)}}>
          <Text style={[text_st, button_st]}>High, Touch Me</Text>
      </TouchableHighlight>
    </View>
  );
}


