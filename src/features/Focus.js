
import React, { useState } from 'react';
import {View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../Components/RoundedButton';
import {spacing, fontSizes} from '../utils/sizes.js';

export const  Focus = ({addSubject}) => {
  const[subject, setSubject] = useState(null);
  console.log(subject)
  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}>
      <TextInput
      style = {styles.textInput}
      onChangeText={setSubject}
      label = 'What would you like to Focus on' /> 
       <View style = {styles.button}>
        <RoundedButton title = "+" size={50} onPress={()=>{addSubject(subject)}}/>
       </View>         
     </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
    // padding: 8,
  },
  button: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    margin: spacing.lg,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textAlign: 'center',
    flexDirection: 'row'
  },
});






  