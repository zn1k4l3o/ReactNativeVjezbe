import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar as starIconFull} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as starIconRegular} from '@fortawesome/free-regular-svg-icons/faStar';
import { useReducer } from 'react';

type SectionProps = {
  title: string;
  id: number;
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    width: '33%',
    flex: 1,
    //height: 200,
    margin: 1,
  },
  heading: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Oxanium-Regular',
  },
});

function Post({ title, id }: SectionProps) {
  
  

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['rgba(182,182,182,0.5)', 'rgba(255, 255, 255, 0)']}
      style={styles.linearGradient}>
      <Text style={styles.heading}>{title}</Text>
      <FontAwesomeIcon icon={(id!=-1) ? starIconFull : starIconRegular} />
    </LinearGradient>
  );
}

export default Post;
