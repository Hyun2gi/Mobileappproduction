import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

var text_st = {fontSize:50, backgroundColor:'lightgray', padding:10, margin:10, flexDirection:"row"};


export default function App() {

  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <View style={{paddingTop:30}}>
      <View style={text_st}>
        <Text>{A}</Text>
        <Text> x </Text>
        <Text >{B}</Text>
        <Text > = </Text>
        <Text >{Number(A)*Number(B)}</Text>
      </View>

      <View style={{flexDirection:"row"}}>
        <Button title=" + " onPress={function(){setA(Number(A)+1)}}/>
        <Button title=" + " onPress={function(){setB(Number(B)+1)}}/>
      </View>

      <View style={{flexDirection:"row"}}>
        <Button title=" - " onPress={function(){setA(Number(A)-1)}}/>
        <Button title=" - " onPress={function(){setB(Number(B)-1)}}/>
      </View>

    </View>
  );
}

