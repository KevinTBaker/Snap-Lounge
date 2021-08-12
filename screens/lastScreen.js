import React, { useState, useEffect, Fragment } from "react";
import Colors from "../constants/Colors";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native";

export const lastScreen = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Fragment>
                <View>
                    <ImageBackground style={styles.backgroundImage} source={require('../assets/background_card.png')}>
                        <Image style={styles.todo_Text} source={require('../assets/things_todo_text.png')}></Image>
                        <Image style={styles.first_Todo} source={require('../assets/first_todo.png')}></Image>
                        <Image style={styles.second_Todo} source={require('../assets/second_todo.png')}></Image>
                        <Image style={styles.third_Todo} source={require('../assets/third_todo.png')}></Image>
                        <TouchableOpacity>
                            <Image style={styles.resource_button} source={require('../assets/resource_button.png')}></Image>
                        </TouchableOpacity>
                    </ImageBackground>
                    <TouchableOpacity onPress={() => {navigation.navigate("Tabs")}}>
                        <Image style={styles.done_Button} source={require('../assets/done_Button.png')}></Image>
                    </TouchableOpacity>
                </View>
            </Fragment>
        </View>       
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#0C0F60',
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        //position: 'absolute',
        width: 324,
        height: 600,
        left: 25,
        //top: 80,
        top: 40,
    },
    todo_Text: {
        position: 'absolute',
        top: 70,
        width: 260,
        height: 60,
        left: 40,
    },
    first_Todo: {
        position: 'absolute',
        top: 180,
        width: 290,
        height: 100,
        left: 27,
    },
    second_Todo: {
        position: 'absolute',
        top: 300,
        width: 293,
        height: 95,
        left: 23,
    },
    third_Todo: {
        position: 'absolute',
        top: 410,
        width: 300,
        height: 104,
        left: 23,
    },
    resource_button: {
        position: 'absolute',
        top: 540,
        width: 220,
        height: 40,
        left: 50,
    },
    done_Button: {
        position: 'absolute',
        maxWidth: '100%',
        width: 180,
        height: 55,
        top: 70,
        left: 90,
    },
    /*
    second_Todo: {
        position: 'absolute',

    }
    */
});
