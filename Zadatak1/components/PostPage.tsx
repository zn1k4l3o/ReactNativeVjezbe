import {Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as starIconFull} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as starIconRegular} from '@fortawesome/free-regular-svg-icons/faStar';
import styled from 'styled-components/native';
import {PostPageProps, RootStackParamList} from '../types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native';

const StyledText = styled.Text`
  font-family: 'Oxanium-Regular';
  color: #ffffff;
`;

const WrapperView = styled.View`
  background-color: #0f163a;
  flex: 1;
`;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0f163a',
  },
  top: {
    flexDirection: 'row',
  },
});

function PostPage({route}: PostPageProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const post = route.params;
  return (
    <WrapperView>
      <View style={styles.top}>
        <StyledText>{post.item.title}</StyledText>
        <FontAwesomeIcon icon={starIconFull} color={'#ffffff'} />
      </View>
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

export default PostPage;
