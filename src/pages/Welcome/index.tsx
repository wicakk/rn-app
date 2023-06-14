import React from 'react';
import {View, Text, Image} from 'react-native';
import { colors } from '../../utils/colors';
import { Button } from '../../components';
import { welcome } from '../../assets';
import { Screen } from 'react-native-screens';




const Welcome = ({navigation}) =>{
    const handleGoTo = (Screen) =>{
        navigation.navigate(Screen)
    }
    return (
        <View style={styles.wrepper.page}>
            <View style={styles.wrepper.backgroundtop} />
            <Image source={welcome} style={styles.wrepper.Image} />
            <Text style={styles.text.welcome}>Selamat Datang di OjolApp</Text>
            <Button title="Masuk" onPress={()=>handleGoTo('Login')}/>
            <Button title="Daftar" onPress={()=>handleGoTo('Register')}/>
            <View style={styles.wrepper.backgroundbuttom} />
        </View>
    );
};

const styles ={
    wrepper:{
        page:{
            alignItems:'center'
        },
        backgroundtop:{
            width: 380, height: 319, backgroundColor: colors.default, borderBottomRightRadius:120
        },
        backgroundbuttom:{
            width: 380, height: 319,marginTop:40, backgroundColor: colors.default, borderTopLeftRadius:120
        },
        Image:{
            width:219,
            height:175,
            marginTop:-130,
        }
    },
    text:{
        welcome:{
            fontSize: 16,marginTop:20, fontWeight: 'bold', color:'black'
        }
    }
}

export default Welcome;