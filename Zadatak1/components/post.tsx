import {View, Text, StyleSheet, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as starIconFull} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as starIconRegular} from '@fortawesome/free-regular-svg-icons/faStar';
import {useReducer} from 'react';

type SectionProps = {
  title: string;
  id: number;
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    flex:1,
    height: 150,
    margin: 1,
  },
  heading: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Oxanium-Regular',
  },
});

function Post({title, id}: SectionProps) {
  function changeFavourite() {
    console.log('Pressed');
  }

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['rgba(182,182,182,0.5)', 'rgba(255, 255, 255, 0)']}
      style={styles.linearGradient}>
      <Text style={styles.heading}>{title}</Text>
      <Button onPress={() => changeFavourite()} title="ddd"></Button>
    </LinearGradient>
  );
}

export default Post;
