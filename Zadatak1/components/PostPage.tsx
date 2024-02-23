import {Pressable, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as starIconFull} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as starIconRegular} from '@fortawesome/free-regular-svg-icons/faStar';
import styled from 'styled-components/native';
import {PostPageProps, RootStackParamList} from '../types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from 'react-native';
import {useEffect, useState} from 'react';
import {addFavourite, removeFavourite} from '../redux/store/favouriteSplice';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

function PostPage({route}: PostPageProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const favouritedArray = useAppSelector(
    state => state.favourite.favouritedArray,
  );
  const post = route.params;
  console.log('Id: ' + post.item.id);

  const [isFavourited, setFavourited] = useState(
    favouritedArray.includes(post.item.id),
  );
  const dispatch = useAppDispatch();

  function changeFavourite() {
    if (isFavourited === false) dispatch(addFavourite(post.item.id));
    else dispatch(removeFavourite(post.item.id));
    setFavourited(!isFavourited);
  }
  useEffect(() => {
    console.log('Uspilo: ' + favouritedArray);
  }, [favouritedArray]);
  return (
    <WrapperView>
      <TopView>
        <Heading>{post.item.title}</Heading>
        <Pressable onPress={changeFavourite} style={{flex: 1}}>
          <FontAwesomeIcon
            icon={isFavourited ? starIconFull : starIconRegular}
            color={'#ffffff'}
          />
        </Pressable>
      </TopView>
      <StyledText>{post.item.body}</StyledText>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Nazad"
        color="#dfdfdf"
        accessibilityLabel="Gumb za nazad"
      />
    </WrapperView>
  );
}

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
