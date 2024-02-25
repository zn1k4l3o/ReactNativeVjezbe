import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import PostGrid from './pages/PostGrid';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostPage from './pages/PostPage';
import {RootStackParamList} from './types';

const styles = StyleSheet.create({
  backgroundStyle: {
    paddingTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'rgb(15, 22, 58)',
  },
});

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={styles.backgroundStyle.backgroundColor}
        />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={PostGrid}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Post"
            component={PostPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
