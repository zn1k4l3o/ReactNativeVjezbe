import {Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as starIconFull} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as starIconRegular} from '@fortawesome/free-regular-svg-icons/faStar';
import styled from 'styled-components/native';
import {PostPageProps, RootStackParamList} from '../types';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
/*
const StyledView = styled.ScrollView`
  background: #0f163a;
`;
*/

//type PostPageProps = NativeStackScreenProps<RootStackParamList, "Post">

function PostPage({route}: PostPageProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const post = route.params;
  return (
    <View>
      <View>
        <Text>{post.item.title}</Text>
        <FontAwesomeIcon icon={starIconFull} />
      </View>
      <Text>{post.item.body}</Text>
    </View>
  );
}

export default PostPage;
