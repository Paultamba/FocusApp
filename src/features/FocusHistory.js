import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import {spacing} from '../utils/sizes';
import { colors} from '../utils/colors';


export const FocusHistory = ({history}) => {

if(!history || !history.length ) return <Text style={styles.title}>You havent focused on anything</Text>;

const renderItem=({item})=> <Text style={styles.flatItem}>- {item}</Text>

  return(
    <View style={styles.container}>
       <Text style={styles.title}>Things you have focused on:</Text>
       <FlatList 
        data={history}
        renderItem={renderItem}
       />
    </View> 
  )
 
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    fontWeight: 'bold',
    flex: 1,
},
title: {
  padding: spacing.sm,
  color: colors.white,
},
flatItem: {
  color: colors.white
}
});