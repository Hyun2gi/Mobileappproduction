import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput, TouchableOpacity } from 'react-native';
import { add } from 'react-native-reanimated';

function Circle() {
  return <View style={styles.circle} />
}

function Blank() {
  return <View style={[styles.circle, {backgroundColor: undefined, borderWidth:0}]} />;
}

function Dice(props) {
  if(props.num == 1){
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      </View>
    );
  }
  else if(props.num == 2){
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
      </View>
    );
  }
  else if(props.num == 3){
    return(
      <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
      </View>
    );
  }
  else if(props.num == 4){
    return(
      <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      </View>
    );
  }
  else if(props.num == 5){
    return(
      <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      </View>
    );
  }
  else{
    return(
      <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      </View>
    );
  }
  
}

function Dice1() {
  return(
    <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
    </View>
  );
}

function Dice2() {
  return(
    <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
    </View>
  );
}

function Dice3() {
  return(
    <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
    </View>
  );
}

function Dice4() {
  return(
    <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
    </View>
  );
}

function Dice5() {
  return(
    <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
    </View>
  );
}

function Dice6() {
  return(
    <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width:40,
    height: 40,
    borderRadius: 20,
    backgroundColor:'rgb(0, 200, 255)',
    borderWidth:1,
    margin:2,
  },
  dice: {
    backgroundColor:'rgb(255, 240, 200)',
    padding:10,
  },
  text: {
    textAlign:'center',
    fontSize: 20,
    margin:5,
  }
});


export default function App() {
  const [N1,setN1] = useState(1);

  return(
    <View style={{flex:1, marginTop:40, alignItems:'center'}}>
      <Text>Dice {N1}</Text>

      <TouchableOpacity onPress={function(){setN1(Math.floor(Math.random()*6+1));}}>
        <Dice num={N1}/>
      </TouchableOpacity>
     </View>
  );
}