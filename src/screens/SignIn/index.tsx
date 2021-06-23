import React,{useState} from 'react';

//importação de itens nativos do react
import { View, Text, Image, StatusBar } from 'react-native';

//importação da página de estilo
import { styles } from './style';

//importação da imagem na inicial do aplicativo
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/Buttonicon/index';

export function SingIn(){
  /*Criando uma constante para atualiar o estado */


  return(
    
    <View style={styles.container}>
      
      {/* Status bar é a parte superiror
      onde fica os status do seu telefone
      nesse componente conseguimos ajustar 
      para ficar visualmente mais trativo */}
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      
      {/* Imagem do aplicativo */}
      <Image 
      source={IllustrationImg} 
      style={styles.image}
      resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize{`\n`}
          suas jogatinas{`\n`}
          facilmente{`\n`}
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
          
        </Text>
        <ButtonIcon 
        title={'Entrar com Discoasrd'}
        activeOpacity={0.5}
        />
      </View>
    </View>
  );
}
