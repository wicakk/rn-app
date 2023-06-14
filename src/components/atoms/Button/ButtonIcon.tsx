import React from 'react';
import { IconBack } from '../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonIcon =({...rest})=> {
  return (
    <TouchableOpacity {...rest}>
      {rest.name === 'back' && <IconBack width={30} height={30}/>}
    </TouchableOpacity>
  );
}

export default ButtonIcon;