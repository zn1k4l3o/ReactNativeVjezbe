import { View, Text} from "react-native";

type SectionProps = {
    title: string;
    favourite: boolean;
}

function Post({ title, favourite } : SectionProps) {
    return (
        <>
            <View>
                <Text>{ title}</Text>
            </View>
        </>
    );
}

export default Post;