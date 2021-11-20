import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

var text_st = {fontSize:20, margin:10};
var text_st1 = {fontSize:30, backgroundColor:'lightgray', padding:10, margin:10, flexDirection:"row"};
var text_st2 = {fontSize:30, padding:10, margin:10};
var input_st = {fontSize : 30, borderWidth:1, padding:10, margin:10};

function HelloScreen(){
  const [greet, setGreet] = useState('Hi');
  const[name, setName] = useState('Name');

  return (
    <View style={{paddingTop:30}}>
      <Text style={text_st}>{greet}, {name}</Text>
      <TextInput style={input_st} onChangeText={setName}/>

      <View style={{margin:10, flexDirection:"row-reverse"}}>
        <Button title="Nice"
                onPress={function() {setGreet('Nice to meet you')}} />
                <View style={{width:10}}></View>
        <Button title="Hello"
                onPress={function() {setGreet('Hello')}}/>
      </View>
    </View>  
  );
}

function AboutScreen() {
  return(
    <View>
    <Text>This is about the app</Text>
    <Image style={{width:200, height:200}} source = {require('./cat-icon.png')}/>
    </View>
  );
}

function multiScreen() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <View style={{paddingTop:30}}>
      <View style={{flexDirection:"row"}}>
        <Text style={text_st1}>{A}</Text>
        <Text style={text_st2}> x </Text>
        <Text style={text_st1} >{B}</Text>
        <Text style={text_st2} > = </Text>
        <Text style={text_st1} >{Number(A)*Number(B)}</Text>
      </View>

      <View style={{flexDirection:"row"}}>
        <View style={{width:10}} />
        <Button title=" + " onPress={function(){setA(Number(A)+1)}}/>
        <View style={{width:40}} />
        <Button title=" + " onPress={function(){setB(Number(B)+1)}}/>
      </View>

      <View style={{height:10}}/>
      <View style={{flexDirection:"row"}}>
         <View style={{width:10}} />
        <Button title=" - " onPress={function(){setA(Number(A)-1)}}/>
        <View style={{width:40}} />
        <Button title=" - " onPress={function(){setB(Number(B)-1)}}/>
      </View>

    </View>
  );
}

function HomeScreen({navigation}) {
  return(
    <View>
      <Text style={text_st}>Home Screen</Text>
      <Button title="ABOUT" onPress={ function(){navigation.navigate('About') } } />
      <View style={{height:10}} />
      <Button title="HELLO" onPress={ function(){navigation.navigate('Hello')}}/>
      <View style={{height:10}} />
      <Button title="구구단" onPress={ function(){navigation.navigate('multi')}}/>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>    
        <Stack.Screen name="About" component={AboutScreen}/> 
        <Stack.Screen name="Hello" component={HelloScreen}/> 
        <Stack.Screen name="multi" component={multiScreen}/> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}

