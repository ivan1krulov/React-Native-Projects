import React, { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({ navigation}) => {
    const {state} = useContext(Context);

 const blogPost = state.find((blogPost)=> blogPost.id ===
 navigation.getParam('id'));

    return (
        <View>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
   textAlign: 'center',
   fontSize: 22,
   paddingVertical: 4,
    },

    content: {
    textAlign: 'center',
    flexDirection: 'row',
justifyContent: 'space-between',
paddingVertical: 2,
borderTopWidth: 1,
borderColor: 'gray',
fontSize: 17,
    },
});

export default ShowScreen;