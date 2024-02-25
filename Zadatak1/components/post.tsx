import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as starIconFull} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as starIconRegular} from '@fortawesome/free-regular-svg-icons/faStar';
import {RootStackParamList} from '../types';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {PostProps} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {useAppDispatch} from '../redux/hooks';
import {useState} from 'react';
import {
  addFavourite,
  removeFavourite,
  selectIsFavouritedArray,
} from '../redux/store/favouriteSplice';
import {useSelector} from 'react-redux';
import {Dimensions} from 'react-native';

const maxPostWidth = (Dimensions.get('window').width - 4 * 2 * 3 - 10) / 3;
function Post(props: PostProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const favouritedArray = useSelector(selectIsFavouritedArray);
  const [isFavourited, setFavourited] = useState(props.favourited);
  const dispatch = useAppDispatch();

  function changeFavourite() {
    if (isFavourited === false) dispatch(addFavourite(props.post.id));
    else dispatch(removeFavourite(props.post.id));
    setFavourited(!isFavourited);
  }

  function switchToPostPage() {
    navigation.navigate('Post', {item: props.post});
  }

  useFocusEffect(() => {
    setFavourited(favouritedArray.includes(props.post.id));
  });

  return (
    <StyledPressable onPress={switchToPostPage}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['rgba(182,182,182,0.5)', 'rgba(255, 255, 255, 0)']}
        style={styles.gradient}>
        <Heading>{props.post.title}</Heading>
        <Star onPress={changeFavourite}>
          <FontAwesomeIcon
            icon={isFavourited ? starIconFull : starIconRegular}
            style={{color: '#ffffff'}}
          />
        </Star>
      </LinearGradient>
    </StyledPressable>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
  },
});

const StyledPressable = styled.Pressable`
  height: 110px;
  width: ${maxPostWidth}px;
  margin: 0px 4px 48px 4px;
`;

const Heading = styled.Text`
  color: #ffffff;
  font-family: 'Oxanium-Regular';
  flex: 3;
`;

const Star = styled.Pressable`
  height: 12px;
  width: 12px;
  margin-right: 8px;
  margin-left: 8px;
`;

export default Post;
