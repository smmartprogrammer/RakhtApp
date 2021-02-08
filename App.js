/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import RootStackScreen from './screens/RootStackScreen';
import {DrawerContent} from './screens/DrawerContent';

import {Provider, connect} from 'react-redux';
import store from './src/store/index';
import DrawerNavigationConfig from './screens/DrawerNavigationConfig';

const Drawer = createDrawerNavigator();

const App = (props) => {
  // console.log(props.user);
  const [stack, setStack] = useState({user: false});

  // const [user, setUser] = useContext(AuthContext);
  // const [initializing, setInitializing] = useState(true);

  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* {user ? ( */}
        {/* <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator> */}

        {/* // ) : ( */}
        <RootStackScreen />
        {/* // )} */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
