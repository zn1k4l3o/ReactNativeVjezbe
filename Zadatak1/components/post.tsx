import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as starIconFull} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as starIconRegular} from '@fortawesome/free-regular-svg-icons/faStar';
import {useReducer} from 'react';
import {Item, RootStackParamList} from '../types';
import {useNavigation} from '@react-navigation/native';
import {PostProps} from '../types';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 10,
    flex: 1,
    height: 150,
    margin: 1,
  },
  heading: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Oxanium-Regular',
  },
  gradient: {
    flex:1,
  }
});

/*
const StyledView = styled.Pressable`
  backgroundcolor: #0f163a;
`;
*/

function Post(props: PostProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function changeFavourite() {
    console.log('Pressed');
  }

  function switchToPostPage() {
    navigation.navigate('Post', {item: props.post});
  }

  return (
    <Pressable onPress={switchToPostPage} style={styles.pressable}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['rgba(182,182,182,0.5)', 'rgba(255, 255, 255, 0)']} style={styles.gradient}>
        <Text style={styles.heading}>{props.post.title}</Text>
        <Button onPress={() => changeFavourite()} title="ddd"></Button>
      </LinearGradient>
    </Pressable>
  );
}

export default Post;
