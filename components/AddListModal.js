import React from "react";
import {View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native';
import {AntDesign} from "@expo/vector-icons"
import colors  from "../Colors";

export default class AddListModal extends React.Component {
   backgroundColor = ["#5CD859"] //Тут закончил
    state = {
        name: ""
    };
    render () {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
           <TouchableOpacity style={{position: "absolute", top: 30, right: 32}} onPress={this.props.closeModal}>
            <AntDesign name="close" size={24} color={colors.black} />
           </TouchableOpacity>

           <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
              <Text style={styles.title}>Create Todo List</Text>
              
              <TextInput 
              style={styles.input} 
              placeholder="List Name" 
              onChange={text => this.setState({name: text})}
                />
              
              <TouchableOpacity style={[styles.create, { backgroundColor: "blue" }]}>
             <Text style={{color: "white", fontWeight: "600"}}>Create</Text>
              </TouchableOpacity>
               </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
   fontSize: 30,
   fontWeight: "800",
   color: colors.black,
   alignSelf: "center",
   marginBottom: 16
    },

    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        borderRadius: 6,
        height:50,
        marginTop: 7,
        paddingHorizontal: 16,
        fontSize: 18,
    },

    create: {
marginTop: 24,
height:50,
borderRadius:6,
alignItems: "center",
justifyContent: "center"
    },
});