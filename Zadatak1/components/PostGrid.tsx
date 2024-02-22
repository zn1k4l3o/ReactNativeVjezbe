import {FlatList, View} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import Post from './post';
import {StyleSheet} from 'react-native';

function PostGrid() {
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
    <FlatList
      numColumns={3}
      data={posts}
      keyExtractor={post => post.id.toString()}
      renderItem={({item}) => <Post title={item.title} id={item.id} />}
    />
  );
}
/*
      {posts.map((post, index) => {
        return <Post key={post.id} title={post.title} id={post.id} />;
      })}
      */

const styles = StyleSheet.create({
  gridRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    height: 500,
  },
});

export default PostGrid;
