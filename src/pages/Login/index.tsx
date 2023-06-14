import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonIcon, Input } from '../../components/atoms';
import { setForm } from '../../redux';
import { colors } from '../../utils';

const Login = ({navigation}) => {
  const {form} = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();

  const sendData = () => {
    console.log('data berhasil di kirim', form);
  };

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  return (
    <View style={styles.wrepper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ButtonIcon
          type="icon"
          name="back"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Login</Text>
        <View style={styles.space(22)} />
        <Input
          title="email"
          placeholder="Masukan email"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(22)} />
        <Input
          title="Password"
          placeholder="Masukan Password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(33)} />
        <Button title="Login" onPress={sendData} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrepper: {
    padding: 12,
  },
  icon: {
    marginTop: 15,
  },
  text: {
    color: colors.default,
    marginTop: 80,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomColor: 'yellow',
    borderBottomWidth: 4,
    maxWidth: 150,
  },
  space: value => {
    return {
      height: value,
    };
  },
});

export default Login;
