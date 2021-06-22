import React,{useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './style';
export function SingIn(){
  /*Criando uma constante para atualiar o estado */
  const[text,setText] =useState('');

  return(
    <View style={styles.container}>
      <Text>
       olá
      </Text>

      <TextInput 
      style={styles.input}
      onChangeText={setText}
      />
      <Text>
        Você digitou: {text}

      </Text>
    </View>


  );
}
