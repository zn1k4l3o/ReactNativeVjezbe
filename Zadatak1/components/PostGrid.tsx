import {FlatList, View} from 'react-native';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import Post from './Post';
import {HomePageProps, Item} from '../types';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

function PostGrid({navigation}: HomePageProps) {
  console.log('in');
  const [posts, setPosts] = useState<Item[]>([]);
  const favouritedArray = useAppSelector(
    state => state.favourite.favouritedArray,
  );
  const dispatch = useAppDispatch();
  //const dispatch = useDispatch();
  //TODO implementirat na klik zvjezdice

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data: Item[] = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        ).then(response => response.json());
        setPosts(data);
      } catch (error) {
        console.error('Problem s apiem: ', error);
      }
    };
    fetchItems();
    console.log(posts);
  }, []);

  return (
    <StyledView>
      <FlatList
        numColumns={3}
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} />}
      />
    </StyledView>
  );
}

const StyledView = styled.View`
  background: #0f163a;
  padding-left: 8px;
  padding-right: 8px;
  padding-top:24px;
`;


export default PostGrid;
