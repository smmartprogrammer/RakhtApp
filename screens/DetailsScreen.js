import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton, Button} from 'react-native-paper';
import {Form, Item, Input, Label, Textarea, Icon} from 'native-base';
import {Picker} from '@react-native-picker/picker';

const DetailsScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  // console.log(gender);
  // console.log(userName);

  const createAccount = () => {
    console.log('working');
    const data = {
      userName,
      contactNumber,
      city,
      gender,
      selectedValue,
    };
    console.log(data);
  };

  return (
    <View style={{flex: 1}}>
      <Form style={{flex: 1}}>
        <Item stackedLabel>
          <Label>Name</Label>
          <Input
            onChangeText={(userName) => setUserName(userName)}
            value={userName}
          />
        </Item>
        <Item stackedLabel>
          <Label>Cell Number</Label>
          <Input
            onChangeText={(contactNumber) => setContactNumber(contactNumber)}
            value={contactNumber}
            keyboardType="numeric"
          />
        </Item>
        <Item stackedLabel>
          <Label>City Name</Label>
          <Input onChangeText={(city) => setCity(city)} value={city} />
        </Item>

        <View style={{padding: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'red',
            }}>
            Gender
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Label style={{color: '#000'}}>Male</Label>
              <RadioButton
                value="Male"
                status={gender === 'Male' ? 'checked' : 'unchecked'}
                color={'red'}
                onPress={() => setGender('Male')}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Label style={{color: '#000'}}>Female</Label>
              <RadioButton
                value="Female"
                status={gender === 'Female' ? 'checked' : 'unchecked'}
                color={'red'}
                onPress={() => setGender('Female')}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Label style={{color: '#000'}}>Other</Label>
              <RadioButton
                value="Other"
                status={gender === 'Other' ? 'checked' : 'unchecked'}
                color={'red'}
                onPress={() => setGender('Other')}
              />
            </View>
          </View>
        </View>
        <View style={styles.form__bloodGroupPicker}>
          <Label
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              // paddingBottom: 25,
              color: 'red',
            }}>
            Select Blood Group *
          </Label>

          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Group: A" value="A" />
            <Picker.Item label="Group: A+" value="A+" />
            <Picker.Item label="Group: A-" value="A-" />
            <Picker.Item label="Group: B" value="B" />
            <Picker.Item label="Group: B+" value="B+" />
            <Picker.Item label="Group: B-" value="B-" />
            <Picker.Item label="Group: AB" value="AB" />
            <Picker.Item label="Group: AB+" value="AB+" />
            <Picker.Item label="Group: AB-" value="AB-" />
            <Picker.Item label="Group: O" value="O" />
            <Picker.Item label="Group: O+" value="O+" />
            <Picker.Item label="Group: O-" value="O-" />
          </Picker>
        </View>
        <Button
          contentStyle={{height: 50, backgroundColor: '#D32F2F'}}
          mode="contained"
          onPress={() => createAccount()}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Create Account</Text>
        </Button>
      </Form>
      {/* <Text style={{fontSize: 35}}>Details Screen</Text>
      <Button
        title="Go to Details Screen..again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  gender: {
    color: 'red',
  },
});
