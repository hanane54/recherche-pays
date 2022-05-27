/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import type {Node} from 'react';

import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PageDeRecherche from './PageDeRecherche';
import ResultatsDeRecherche from './ResultatsDeRecherche';

const Pile = createStackNavigator();

function Mapile(){
    return(
        <Pile.Navigator>
            <Pile.Screen name="Accueil" component={PageDeRecherche} />
            <Pile.Screen name="Resultats" component={ResultatsDeRecherche} />
        </Pile.Navigator>
    );
   }

export default class App extends Component<Props>{
    render(){
    return (
        <NavigationContainer>
            <Mapile />
        </NavigationContainer>
    );
    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: "#656565",
        marginTop:65,
    },
});