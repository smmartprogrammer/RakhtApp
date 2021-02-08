import React, {useContext} from 'react';
import {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  // Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {color} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from './AuthProvider';
import {connect} from 'react-redux';
import {set_data, changeStack} from '../src/store/action/index';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

const SignInScreen = (props) => {
  // console.log(props.user);

  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const emailHandler = (val) => {
    // console.log(val);
    setData({
      ...data,
      email: val,
    });
  };

  // password handling functions

  const handlePasswordChange = (val) => {
    // console.log(val);
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleConfirmPass = (val) => {
    setData({
      ...data,
      confirmPassword: val,
    });
  };
  // signup functions

  const signUpUser = () => {
    let arr = [data.email, data.password, data.confirmPassword];
    if (data.password === data.confirmPassword) {
      console.log('password same');
      // navigation.navigate('Home');
    } else {
      console.log('not same');
    }

    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((auth) => {
        if (auth) {
          // history.push('/');
          console.log('successfully create user');
          props.navigation.navigate('SignInScreen');
          autheValue: 'usercreated';
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#D32F2F" barStyle="ligh-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now...!! </Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />

          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            autoCompleteType="email"
            onChangeText={(val) => emailHandler(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, {marginTop: 15}]}>Password</Text>
        <View style={styles.passwordStyling}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, {marginTop: 15}]}>
          Confirm Password
        </Text>
        <View style={styles.passwordStyling}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder=" Confirm Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPass(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text>
          By Signing up you agree to our Terms of services and privacy policy
        </Text>

        <TouchableOpacity onPress={() => signUpUser()} style={styles.button}>
          <LinearGradient colors={['#D32F2F', '#D32F2F']} style={styles.signIn}>
            <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectedComponent(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D32F2F',
  },
  header: {
    backgroundColor: '#D32F2F',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 7,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  passwordStyling: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },

  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.android === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: '#D32F2F',
  },
});
