import {Row} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import SearchInput, {createFilter} from 'react-native-search-filter';

const ExploreScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  // const filteredEmails = emails.filter(
  //   createFilter(this.state.searchTerm, KEYS_TO_FILTERS),
  // );
  const searchUpdated = (term) => {
    this.setState({searchTerm: term});
  };
  const bloodGroupName = ['A+', 'A', 'o', 'B', 'A+', 'A', 'o', 'B'];
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#D32F2F" barStyle="ligh-content" />
      <View style={styles.donorList__header}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 5,
          }}>
          Donor List
        </Text>
        <TextInput
          style={styles.donorList__search}
          placeholder="Enter Blood Group"
        />
      </View>

      <View style={{flex: 0.8, backgroundColor: '#fff'}}>
        <View style={styles.donorList__outerLayer}>
          <View style={styles.donorList}>
            <View style={styles.donorList__text}>
              <Text style={styles.donor__text}>Donate Blood</Text>
              <Text style={styles.donor__text}>O+</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  donorList: {
    borderRadius: 10,
    width: '90%',
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
  donor__text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  donorList__header: {
    flex: 0.2,
    backgroundColor: '#D32F2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  donorList__search: {
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    padding: 10,
  },
  donorList__outerLayer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  donorList__text: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
});
