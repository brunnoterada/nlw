import React from 'react';
import {useFonts} from 'expo-font';
import {Inter_400Regular,Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium,Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import { Routes } from './src/routes';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import {Background} from './src/components/Background/index'
export default function App(){

  //passou para uma const para realizar a validação do carregamento 
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  //segura a tela de splash até terminar de carregar todas as fontes
  if(!fontsLoaded){
    return<AppLoading/>
  }
  // só retorna quando todas as fontes forem carregadas
  return(
    <Background>
     {/* Status bar é a parte superiror
      onde fica os status do seu telefone
      nesse componente conseguimos ajustar 
      para ficar visualmente mais trativo */}
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
    <Routes/>
    </Background>
  

  );
}