import React,{useState} from 'react';

//importação de itens nativos do react
import { View, Text, Image } from 'react-native';

//importação da página de estilo
import { styles } from './style';

//importação da navegação 
import{useNavigation} from '@react-navigation/native';

//importação da imagem na inicial do aplicativo
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon/index';

import {Background} from '../../components/Background/index'



export function SignIn(){
  const navigation = useNavigation();


  function handleSignIn(){
    navigation.navigate('Home');
  }
  /*Criando uma constante para atualiar o estado */


  return(
    <Background>
    <View style={styles.container}>
      
     
      
      {/* Imagem do aplicativo */}
      <Image 
      source={IllustrationImg} 
      style={styles.image}
      resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{`\n`}
          e organize suas{`\n`}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
          
        </Text>
        <ButtonIcon 
        title={'Entrar com Discord'}
        onPress={handleSignIn}
        />
      </View>
    </View>
    </Background>
  );
}
