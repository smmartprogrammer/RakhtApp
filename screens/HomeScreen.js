import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Details')}
      />
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
});

// import React from 'react';
// import {
//   View,
//   Text,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// // import Donor from './Donor';

// const HomeScreen = ({navigation}) => {
//   // const donorHandler = () => {
//   //   // navigation.navigate('Donor');
//   // };
//   // return (
//   // <View style={styles.mainbox}>
//   //   {/* <View style={styles.donor}>
//   //     <Image
//   //       source={require('../assets/blooddonation.jpg')}
//   //       style={styles.blooddonation}
//   //       // resizeMode="stretch"
//   //       // resizeMode="contain"
//   //     />
//   //     <TouchableOpacity>
//   //       <Text style={styles.donor__text}>Donate Blood</Text>
//   //     </TouchableOpacity>
//   //   </View>
//   //   <View style={styles.received}>
//   //     <TouchableOpacity>
//   //       <Text style={styles.donor__text}>Received Blood</Text>
//   //     </TouchableOpacity>
//   //   </View> */}
//   // </View>
//   // );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   mainbox: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: '#D32F2F',
//   },

//   donor: {
//     width: '80%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '40%',
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 12,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,

//     elevation: 10,
//   },

//   donorHover: {
//     shadowColor: 'red',
//   },

//   received: {
//     marginTop: 30,
//     width: '80%',
//     height: '40%',
//     justifyContent: 'center',
//     alignItems: 'center',

//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,

//     elevation: 10,
//   },
//   donor__text: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#D32F2F',
//   },
//   blooddonation: {
//     width: '50%',
//     height: '50%',
//     cont,
//   },
// });
