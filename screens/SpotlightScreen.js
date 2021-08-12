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
//import { Quiz } from 'Quiz1Screen.js';


//var date = new Date().getDate();
//const date = new Date().toLocaleDateString();

//var selectedMonthName = months[$("#datepicker").datepicker('getDate').getMonth()];
//let shortMonth = date.toLocaleString('en-us', { month: 'short' });
//<ImageBackground style={{flex: 1}} source={require('../assets/background_img.png')}></ImageBackground>

export default function SpotlightScreen({ navigation }) {
  return (
    <View>
      <Fragment style={styles.home_page}>
        <ImageBackground style={styles.background} source={require('../assets/background_img.png')}>
          <View>
            <TouchableOpacity style={styles.button1}></TouchableOpacity>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
            <Text style={styles.title}>Lounge</Text>
            <TouchableOpacity style={styles.button3}></TouchableOpacity>
            <TouchableOpacity style={styles.button4}></TouchableOpacity>
          </View>
          <View>
            <View style={styles.button_date}>
              <Text style={styles.MonthName}>Aug</Text>
              <Text style={styles.Date_num}>8</Text>
            </View>
            <Text style={styles.latest_mood}>Snap Lounge </Text>
            <Text style={styles.reflect}>Take the time to self reflect!</Text>
          </View>
          <View>
            <TouchableOpacity style={{flex:1}} onPress={() => {navigation.navigate("Quiz")}}>
              <Image style={styles.button_Checkin} source={require('../assets/only_checkin_Button.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.button_Friends} source={require('../assets/friends_button.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.button_Affirmations} source={require('../assets/saved_affirmations_button.png')}></Image>
            </TouchableOpacity>
          </View>
          <View>
              <Image style={styles.bitmoji_inChair} source={require('../assets/Bitmoji_in_chair.png')}></Image>
          </View>
        </ImageBackground>
      </Fragment>
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    paddingTop: StatusBar.currentHeight,
    position: 'absolute',
    width: 35,
    height: 35,
    left: 1,
    borderRadius: 70,
    top: 35,
    backgroundColor: '#8686A7',
  },
  
  background: {
    height: 1000,
    width: 1000,
  },

  button2: {
    position: 'absolute',
    width: 35,
    height: 35,
    left: 50,
    top: 35,
    borderRadius: 70,
    backgroundColor: '#8686A7',
  },
  
  button3: {
    position: 'absolute',
    width: 35,
    height: 35,
    left: 290,
    top: 35,
    borderRadius: 70,
    backgroundColor: '#8686A7',
  },

  button4: {
    position: 'absolute',
    width: 35,
    height: 35,
    left: 334,
    top: 35,
    borderRadius: 70,
    backgroundColor: '#8686A7',
  },

  button_Friends: {
    position: 'absolute',
    width: 35,
    height: 35,
    left: 21,
    top: 284,
  },

  button_Affirmations: {
    position: 'absolute',
    width: 35,
    height: 35,
    left: 348,
    top: 280, 
  },

  bitmoji_inChair: {
    position: 'absolute',
    width: 313,
    height: 288,
    left: 65, 
    top: 325,
  },

  title: {
    position: 'absolute',
    width: 114,
    height: 41,
    left: 131,
    top: 40,
    fontFamily: 'Graphik',
    fontStyle: 'normal',
    fontSize: 35,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000',
  },

  button_Checkin: {
    position: 'absolute',
    width: 231,
    height: 65,
    left: 87,
    top: 267,
  },

  reflect: {
    position: 'absolute',
    width: 102,
    height: 70,
    left: 163,
    top: 123,
    fontFamily: 'Graphik',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
  },

  Date_num: {
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 60,
  },

  MonthName: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 20,
  },

  latest_mood: {
    position: 'absolute',
    width: 102,
    height: 70,
    left: 163,
    top: 200,
    fontFamily: 'Graphik',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 20,
    color: '#2F2F3E',
  },

  text: {
    fontSize: 50,
  },

  button_date: {
    position: 'absolute',
    width: 110,
    height: 110,
    left: 37,
    top: 115,
    borderRadius: 70,
    backgroundColor: '#F3F3F3',
  },

  home_page: {
    height: "100%",
    width: "100%",
  },
});
