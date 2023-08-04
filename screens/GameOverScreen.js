import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const GameOverScreen = props => {
    return(
        <View style ={styles.screen}>
            
            <Image source={require('../assets/gameover.png')}
                    style={styles.image}/>
            <Text style = {styles.result}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number</Text>
            
            <Button title="NEW GAME" onPress={props.onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        //justifyContent: 'center',
        //marginTop : '30',
        alignItems: 'center'
    },
    result: {
        marginVertical: 10,
        fontSize: 15,
        
    },
    highlight: {
        color: 'red',
        fontSize: 16,
    },
    image: {
        width: '100%',
        height:200
    }
});
export default GameOverScreen;
