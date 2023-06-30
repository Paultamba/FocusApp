
import React, {useState} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import { useKeepAwake} from 'expo-keep-awake';
import {colors} from '../utils/colors';
import { Countdown } from '../Components/Countdown';
import { RoundedButton } from '../Components/RoundedButton';
import {Timing} from './Timing'
import { spacing } from '../utils/sizes';

 const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  

export const Timer = ({ focusSubject, clearSubject, reset, onTimerEnd }) => {
  useKeepAwake();
  const[isStarted, setIsStarted] = useState(false);
  const[progress, setProgress] = useState(1);
  const[minutes, setMinutes] = useState(0.1);

  const onEnd =(reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  }
  
  return (
  <View style={styles.container}>
    <View style={styles.countdown}>
      <Countdown 
      minutes={minutes}
      isPaused={!isStarted} 
      onProgress = {setProgress} 
      onEnd={onEnd}/>
      
      <View style= {{marginTop: spacing.md}}>      
      <Text style={styles.title}>Focusing on:</Text>
      <Text style={styles.focus}>{focusSubject}</Text>
      </View>
      </View>

      <View >
        <ProgressBar 
        color = {colors.white}
        progress={progress}/>
      </View>

       <View style={styles.buttonWrapper}>
        <Timing onChangeTime={setMinutes} />
       </View>
    
    <View style={styles.buttonWrapper}>
      {!isStarted && (<RoundedButton title = 'start' onPress={()=>setIsStarted(true)}/>)}
      {isStarted && (<RoundedButton  title = 'stop' onPress={()=>setIsStarted(false)}/>)}
    </View>

    <View style={styles.clearSubject}>
      <RoundedButton size={50} title = "-" onPress={clearSubject}/>
    </View>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  buttonWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxxl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  countdown: {
    flex: 0.5,
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    paddingTop: spacing.md,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  clearSubject: {
    paddingTop: spacing.xxxl,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  focus: {
    color: colors.white,
    textAlign: 'center',
  }
});