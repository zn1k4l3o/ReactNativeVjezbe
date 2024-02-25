import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Item = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type RootStackParamList = {

 Home: undefined;
 
 Post: { item: Item};

};

export type HomePageProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type PostPageProps = NativeStackScreenProps<
  RootStackParamList,
  'Post'
>;

export type PostProps = {
  post: Item;
  favourited: boolean;
  postWidth: number;
};