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

//<Text style={styles.headerText}>Which meme best represents your mood?</Text>

export const QuizScreen = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Fragment>
                <View>
                    <ImageBackground style={styles.backgroundImage} source={require('../assets/background_card.png')}>
                        <Image style={styles.headerText} source={require('../assets/meme_question.png')}></Image>
                        <TouchableOpacity>
                            <Image style={styles.bored_Button} source={require('../assets/Bored.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.sad_Button} source={require('../assets/Sad.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.delighted_Button} source={require('../assets/Delighted.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.overwhelmed_Button} source={require('../assets/Overwhelmed.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.back_Button} source={require('../assets/back_Button.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate("Quiz2")}}>
                            <Image style={styles.gray_continue_Button} source={require('../assets/gray_continue.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.scroll_Circles} source={require('../assets/scroll_circles2.png')}></Image>
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
        width: 324,
        height: 600,
        left: 25,
        top: 40,
    },
    headerText: {
        top: 70,
        width: 240,
        height: 100,
        left: 40,
    },
    bored_Button: {
        position: 'absolute',
        width: 130,
        height: 170,
        left: 20,
        top: 100,
    },
    sad_Button: {
        position: 'absolute',
        width: 130,
        height: 170,
        left: 170,
        top: 100,
    },
    delighted_Button: {
        position: 'absolute',
        width: 130,
        height: 170,
        left: 20,
        top: 295,
    },
    overwhelmed_Button: {
        position: 'absolute',
        width: 130,
        height: 170,
        top: 295,
        left: 170,
    },
    gray_continue_Button: {
        //position: 'center',
        maxWidth: '100%',
        width: 180,
        height: 55,
        top: 530,
        left: 70,
    },
    back_Button: {
        position: 'absolute',
        width: 69,
        height: 22,
        left: 0,
        top: 545,
    },
    scroll_Circles: {
        position: 'absolute',
        top: 494,
        width: 70,
        height: 8,
        left: 270,
    },
});