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
//import { lastScreen } from "./lastScreen";
//import { QuizScreen2 } from "./Quiz2screen";

export const GrattitudeScreen = ({navigation}) => {
    return (
        <View style={styles.background}>
            <Fragment>
                <View>
                    <ImageBackground style={styles.backgroundImage} source={require('../assets/background_card.png')}>
                        <Image style={styles.gratefulText} source={require('../assets/grateful_question.png')}></Image>
                        <Image style={styles.grateful_Question} source={require('../assets/input_box.png')}></Image>
                        <Image style={styles.gratitude_ghost} source={require('../assets/Gratitude_advice.png')}></Image>
                        <TouchableOpacity onPress={() => {navigation.navigate("Quiz2")}}>
                            <Image style={styles.back_Button} source={require('../assets/back_Button.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate("Last")}}>
                            <Image style={styles.gray_continue_Button} source={require('../assets/gray_continue.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.last_Circles} source={require('../assets/last_Circles.png')}></Image>
                        </TouchableOpacity>
                    </ImageBackground> 
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
    gratefulText: {
        width: 280,
        height: 65,
        top: 90,
        left: 25,
    },
    grateful_Question: {
        width: 251,
        height: 258,
        top: 90,
        left: 40,
    },
    gratitude_ghost: {
        width: 250,
        height: 148,
        left: 40,
        top: 110,
    },
    back_Button: {
        position: 'absolute',
        width: 69,
        height: 22,
        left: 0,
        top: 174,
    },
    last_Circles: {
        position: 'absolute',
        top: 178,
        width: 70,
        height: 8,
        left: 270,
    },
    gray_continue_Button: {
        position: 'absolute',
        top: 159,
        //width: 70,
        maxWidth: '100%',
        width: 180,
        height: 55,
        left: 70,
    },
});