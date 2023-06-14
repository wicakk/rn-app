import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native';
import { colors } from '../../../utils';

const Input=({placeholder, title, ...rest})=> {
  return (
    <>
        <Text style={styles.title}>{title}</Text>
        <TextInput style={styles.input} placeholder={placeholder} {...rest}/>
    </>
  )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:colors.default,
        // marginTop: 15,
        paddingLeft:15,
        borderRadius:20
    },
    title:{
        color:colors.dark,
        fontSize:14,
        // 
        paddingLeft:5
    }
})

export default Input;