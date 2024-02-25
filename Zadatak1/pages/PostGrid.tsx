import {Dimensions, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import Post from '../components/Post';
import {Item} from '../types';
import styled from 'styled-components/native';
import {useAppSelector} from '../redux/hooks';

const maxPostWidth = (Dimensions.get('window').width - 4 * 2 * 3 - 10) / 3;

/*
Wrapper komponenta koja sadrži Post
*/
function PostGrid() {
  const favouritedArray = useAppSelector(
    state => state.favourite.favouritedArray,
  );
  const [posts, setPosts] = useState<Item[]>([]);

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
            postWidth={maxPostWidth}
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
