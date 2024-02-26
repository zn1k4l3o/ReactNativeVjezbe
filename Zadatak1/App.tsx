import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import PostGrid from './pages/PostGrid';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostPage from './pages/PostPage';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'rgb(15, 22, 58)'}
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
