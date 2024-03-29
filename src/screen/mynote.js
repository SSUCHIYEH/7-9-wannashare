import React from "react";
import {View, Text} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SigninScreen from "./SigninScreen";
import SignupScreen from "./SignupScreen";
import HomeTabNavigation from "../navigations/MainTab.js";
import HomeScreen from "../screen/HomeScreen.js";
import SearchScreen from "../screen/SearchScreen.js";

export const Stack = createStackNavigator();
export const Tab = createBottomTabNavigator();

export const HomeStackNavigation = ({navigation}) => {
    return(
        <Stack.Navigator>
            
            <Stack.Screen name="Search" component={SearchScreen}/>
        </Stack.Navigator>
    )
}

export const PostStackNavigation = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen></Stack.Screen>
            <Stack.Screen></Stack.Screen>
        </Stack.Navigator>
    )
}

export const OrderTabNavigation = ({navigation}) => {
    return (
        <Tab.Navigator>
            <Tab.Screen></Tab.Screen>
            <Tab.Screen></Tab.Screen>
        </Tab.Navigator>
    )
}
export const UserStackNavigation = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen></Stack.Screen>
            <Stack.Screen></Stack.Screen>
        </Stack.Navigator>
    )
}


/*
firebase.database().ref("Users").child(firebase.auth().currentUser.uid).child("Buyorder").child("unfinish").on('child_added', function(snapshot) {
            snapshot.forEach(function(childSnapshot){
                if(childSnapshot.exists()){
                    setFood(childSnapshot.val().food);
                    setSalername(childSnapshot.val().name);
                    setImg(childSnapshot.val().img);
                    setOrder(true);
                    }else{
                     setOrder(false);
                    }
            });
            
           if(snapshot.exists()){
           setFood(snapshot.val().food);
           setSalername(snapshot.val().name);
           setImg(snapshot.val().img);
           setOrder(true);
           }else{
            setOrder(false);
           }
           
           
            
           
           console.log(`${food}`);
           console.log(`salername=${salername}`);
           console.log(`img=${img}`);
          
          });
*/