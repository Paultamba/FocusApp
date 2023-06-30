import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../Components/RoundedButton';
import {spacing} from '../utils/sizes.js'

export const Timing = ({onChangeTime}) => {
  return(
    
    <View style={styles.timingWrapper}>
    <View style={{padding: spacing.lg}}>
    <RoundedButton  size= {75} title = "10" onPress={()=>onChangeTime(10)}/>
    </View>
    <View style={{padding: spacing.lg}}>
    <RoundedButton  size= {75} title = "15" onPress={()=>onChangeTime(15)}/>
    </View>
    <View style={{padding: spacing.lg}}>
    <RoundedButton  size= {75} title = "20" onPress={()=>onChangeTime(20)}/>
    </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
 
}
)