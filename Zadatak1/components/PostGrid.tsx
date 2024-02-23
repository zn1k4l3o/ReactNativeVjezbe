import {FlatList, View} from 'react-native';
import {useEffect, useLayoutEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import Post from './Post';
import {HomePageProps, Item} from '../types';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {selectIsFavouritedArray} from '../redux/store/favouriteSplice';

function PostGrid() {
  const [posts, setPosts] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data: Item[] = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        ).then(response => response.json());
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error('Problem s apiem: ', error);
      }
    };
    fetchItems();
  }, []);

  const newArray = useSelector(selectIsFavouritedArray);
  const [favouritedArray, setFavoritedArray] = useState<number[]>(newArray);

  useEffect(() => {
    setFavoritedArray(newArray);
    console.log('Uspilo: ' + favouritedArray);
    console.log('novi' + newArray);
    console.log('++');
  }, [newArray]);

  return (
    <StyledView>
      <FlatList
        numColumns={3}
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => (
          <Post post={item} favourited={favouritedArray.includes(item.id)} />
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
