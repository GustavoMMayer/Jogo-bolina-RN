
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from './styles';
import { Ball } from './Components/ball';

let timer: number;


const App =() => {

  const [gravity, setGravity] = useState(0.98)
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosy] = useState(0);
  
 useEffect(()=>{
  const applyGravity = ()=>{
    //diminuir a força
    let newUpForce = upForce-gravity;
    newUpForce = newUpForce < 0 ? 0: newUpForce;
    setUpForce(newUpForce)

    //Velocidade
    let newSpeed = speed + (gravity-(newUpForce / 2));
    setSpeed(newSpeed)
  
    //Posição
  let newPosY = posY - newSpeed;

  if(newPosY <= 0){
    newPosY=0;
    setSpeed(0)
  }
  setPosy(newPosY)
  
  }

   clearTimeout(timer);
  timer = setTimeout(applyGravity,30);

},[gravity, upForce, speed,posY])

const handleForceButton =()=>{
  setUpForce(7);
 
 }


  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.area}>
        <Ball posY={posY} bg={posY < 50? '#f00':'#00f'}/>

      </View>

      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.controlButton} onPress={handleForceButton}>
          <Text style ={styles.controlButtonText}>Fazer Força</Text>
        </TouchableOpacity>

      </View>
      
    </SafeAreaView>
  );
};



export default App;
