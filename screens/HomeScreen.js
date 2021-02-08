import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={{color: colors.text}}>Home Screen</Text> */}
      {/* <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Details')}
      /> */}

      <View style={styles.donor}>
        <Image
          source={require('../assets/blooddonation.jpg')}
          style={styles.blooddonation}
          resizeMode="stretch"
          // resizeMode="contain"
        />
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Notifications')}
            style={styles.donor__text}>
            Donate Blood
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.received}>
        <Image
          source={require('../assets/bloodreceived.jpg')}
          style={styles.blooddonation}
          resizeMode="stretch"
          // resizeMode="contain"
        />

        <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
          <Text style={styles.donor__text}>Received Blood</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  donor: {
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  donorHover: {
    shadowColor: 'red',
  },

  received: {
    marginTop: 30,
    borderRadius: 10,
    width: '80%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  donor__text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  blooddonation: {
    width: '50%',
    height: '35%',
    resizeMode: 'cover',
  },
});
