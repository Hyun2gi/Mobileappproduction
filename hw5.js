import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,ScrollView,TextInput } from 'react-native';

var text_st = {fontSize:60, padding:10,backgroundColor:"#FAD9B8"};
var bold_st = {fontWeight:"bold"};

export default function App() {
  const [hh, sethh] = useState("");
  const [mm, setmm] = useState("");
  const [ss, setss] = useState("");
  const[ap, setap] = useState("");

  useEffect(function() {
    setInterval(run_everysec,1000);
  },[]);

  function run_everysec() {
    var d = new Date();
    sethh(d.getHours());
    setmm(d.getMinutes());
    setss(d.getSeconds());

    if(d.getHours() < 12) {
      setap("am");
    }else{
      setap("pm");
    }
  }

  return (
    <View style={{paddingTop:30}}>
      <Text style={text_st}><Text style={bold_st}>{hh}:{mm}</Text>:{ss} {ap}</Text>
    </View>
  );
}