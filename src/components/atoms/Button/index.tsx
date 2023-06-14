import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils';
import ButtonIcon from './ButtonIcon';
const Buttons = ({title, onPress,type,name}) => {
    if(type === 'icon') {
        return <ButtonIcon name={name} onPress={onPress}/>
    }
  return (
    <TouchableOpacity style={styles.wrepper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrepper: {
    component: {
      backgroundColor: colors.default,
      paddingVertical: 10,
      borderRadius: 50,
      paddingHorizontal: 100,
      marginTop: 30,
    },
  },
  text: {
    title: {
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  },
};

export default Buttons;
