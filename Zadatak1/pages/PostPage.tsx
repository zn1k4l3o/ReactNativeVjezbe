import {Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as starIconFull} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as starIconRegular} from '@fortawesome/free-regular-svg-icons/faStar';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import styled from 'styled-components/native';
import {PostPageProps, RootStackParamList} from '../types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {addFavourite, removeFavourite} from '../redux/store/favouriteSplice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

/*
Stranica za pojedinu objavu s title i body.
*/
function PostPage({route}: PostPageProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const favouritedArray = useAppSelector(
    state => state.favourite.favouritedArray,
  );
  const post = route.params;

  const [isFavourited, setFavourited] = useState(
    favouritedArray.includes(post.item.id),
  );
  const dispatch = useAppDispatch();

  function changeFavourite() {
    if (isFavourited === false) dispatch(addFavourite(post.item.id));
    else dispatch(removeFavourite(post.item.id));
    setFavourited(!isFavourited);
  }

  return (
    <WrapperView>
      <BackArrow
        onPress={() => navigation.navigate('Home')}
        accessibilityLabel="Gumb za nazad">
        <FontAwesomeIcon icon={faArrowLeft} color={'#ffffff'} size={32} />
      </BackArrow>
      <TopView>
        <Heading>{post.item.title}</Heading>
        <Pressable onPress={changeFavourite} style={{flex: 1, padding: 2}}>
          <FontAwesomeIcon
            icon={isFavourited ? starIconFull : starIconRegular}
            color={'#ffffff'}
          />
        </Pressable>
      </TopView>
      <StyledText>{post.item.body}</StyledText>
    </WrapperView>
  );
}

const BackArrow = styled.Pressable`
  width: auto;
  padding: 2px;
  margin-right: auto;
`;

const Heading = styled.Text`
  font-family: 'Oxanium-Regular';
  color: #ffffff;
  font-size: 32px;
  flex: 5;
`;

const StyledText = styled.Text`
  font-family: 'Oxanium-Regular';
  color: #ffffff;
  font-size: 14px;
  margin-top: 16px;
  line-height: 18px;
`;

const WrapperView = styled.View`
  background-color: #0f163a;
  flex: 1;
  padding: 27px 20px 0px 27px;
`;

const TopView = styled.View`
  flex-direction: row;
`;

export default PostPage;
