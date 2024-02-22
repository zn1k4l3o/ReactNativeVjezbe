import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as starIconFull} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as starIconRegular} from '@fortawesome/free-regular-svg-icons/faStar';
import {RootStackParamList} from '../types';
import {useNavigation} from '@react-navigation/native';
import {PostProps} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
  },
  star: {
    color: '#ffffff',
    flex: 1,
  },
});

const StyledPressable = styled.Pressable`
  flex: 1;
  height: 110px;
  margin: 0px 8px 48px 8px;
`;

const Heading = styled.Text`
  color: #ffffff;
  font-family: 'Oxanium-Regular';
  flex: 3;
`;

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
    <StyledPressable onPress={switchToPostPage}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['rgba(182,182,182,0.5)', 'rgba(255, 255, 255, 0)']}
        style={styles.gradient}>
        <Heading>{props.post.title}</Heading>
        <Pressable style={styles.star} onPress={changeFavourite}>
          <FontAwesomeIcon icon={starIconFull} />
        </Pressable>
      </LinearGradient>
    </StyledPressable>
  );
}

export default Post;
