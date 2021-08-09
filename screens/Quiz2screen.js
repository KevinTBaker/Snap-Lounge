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
import { ScreenContainer } from "react-native-screens";

//<Image style={styles.selectApply} source={require('../assets/all_that_apply.png')}></Image>
export const QuizScreen2 = () => {
    return (
        <View style={styles.background}>
            <Fragment>
                <View>
                    <ImageBackground style={styles.backgroundImage} source={require('../assets/background_card.png')}>
                        <Image style={styles.headerText} source={require('../assets/worry_question.png')}></Image>
                        <Text style={styles.selectApply}>Select All That Apply</Text>
                        <TouchableOpacity>
                            <Image style={styles.work_school_Button} source={require('../assets/work_school.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.social_life_Button} source={require('../assets/social_life.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.home_life_Button} source={require('../assets/home_life.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.none_Button} source={require('../assets/none.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {navigation.navigate("Quiz")}}>
                            <Image style={styles.back_Button} source={require('../assets/back_Button.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.gray_continue_Button} source={require('../assets/gray_continue.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.scroll_Circles4} source={require('../assets/scroll_Circles4.png')}></Image>
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
    headerText: {
        position: 'absolute',
        top: 70,
        width: 240,
        height: 60,
        left: 40,
    },
    selectApply: {
        position: 'absolute',
        width: 320,
        height: 30,
        top: 140,
        left: 80,
        fontSize: 16,
        fontWeight: "Bold",
        color: '#FFFFFF',
    },
    work_school_Button: {
        position: 'absolute',
        width: 130,
        height: 180,
        left: 20,
        top: 187,
    },
    social_life_Button: {
        position: 'absolute',
        width: 130,
        height: 173,
        left: 170,
        top: 195,
    },
    home_life_Button: {
        position: 'absolute',
        width: 130,
        height: 170,
        left: 20,
        top: 400,
    },
    none_Button: {
        position: 'absolute',
        width: 130,
        height: 173,
        left: 170,
        top: 400,
    },
    back_Button: {
        position: 'absolute',
        width: 69,
        height: 22,
        left: 0,
        top: 645,
    },
    gray_continue_Button: {
        position: 'center',
        maxWidth: '100%',
        width: 180,
        height: 55,
        top: 630,
        left: 70,
    },
    scroll_Circles4: {
        position: 'absolute',
        top: 594,
        width: 70,
        height: 8,
        left: 270,
    },
});