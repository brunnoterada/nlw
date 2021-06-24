import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar/index';

export function Profile(){
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/brunnoterada.png"/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                  
                    <Text style={styles.username}>
                        Brunno
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje vamos destruir!
                </Text>
            </View>
        </View>
    );
}