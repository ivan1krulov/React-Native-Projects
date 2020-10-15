import React from 'react';
import {StyleSheet, Text, View} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default TodoList = ({list}) => {
    return ( 
        <View style={[styles.listContainer, {backgroundColor: list.color}]}>
          <Text style={styles.listTitle} numberOfLines={1}>{list.name}</Text>
            
            <View>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.count}>0</Text>
                    <Text style={styles.subtitle}>Remaining</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.completed}>0</Text>
                    <Text style={styles.remaining}>Completed</Text>
                </View>
            </View>
            </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200
    },

    listTitle: {
fontSize: 24,
fontWeight: "700",
color: Colors.white,
marginBottom: 18,
    },
});