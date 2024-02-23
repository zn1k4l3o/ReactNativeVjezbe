import {FlatList, View} from 'react-native';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import Post from './Post';
import {HomePageProps, Item} from '../types';
import styled from 'styled-components/native';

function PostGrid({navigation}: HomePageProps) {
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
  }, []);
  //const [postFavouritedState, setPostFavouritedState] = useState<boolean[]>([]);
  const [posts, setPosts] = useState<Item[]>([]);
  const favouritedArray = useAppSelector(
    state => state.favourite.favouritedArray,
  );

  console.log(favouritedArray);

  /*
  let postFavouritedState = [] as boolean[];
  posts.forEach(post => {
    postFavouritedState.push(favouritedArray.includes(post.id));
  });
  */

  return (
    <StyledView>
      <FlatList
        numColumns={3}
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => (
          <Post
            post={item}
            favourited={favouritedArray.includes(item.id)}
          />
        )}
      />
    </StyledView>
  );
}

const StyledView = styled.View`
  background: #0f163a;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 24px;
`;

export default PostGrid;
