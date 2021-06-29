import React from "react";
import {
  ImageBackground, 
  Text, 
  View,
  FlatList
} from 'react-native';
import { Fontisto } from "@expo/vector-icons";
import { Background } from '../../components/Background/index';
import { Header } from "../../components/Header";
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png';
import { styles } from './styles';
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
<<<<<<< HEAD
import { ButtonIcon } from "../../components/Buttonicon";
=======
import { ButtonIcon } from "../../components/ButtonIcon";
>>>>>>> 8e1c11bd76d62e571c27b798db5ef4d45e0415d9


export function AppointmentDetails(){
  const members=[
    {
      id:'1',
      username:'Brunno terada',
      avatar_url: 'https://github.com/brunnoterada.png',
      status:'Online',
    },
    {
      id:'2',
      username:'Brunnin Trem Bala',
      avatar_url: 'https://github.com/brunnoterada.png',
      status:'Online',
    },
    {
      id:'3',
      username:'Teradinha',
      avatar_url: 'https://github.com/brunnoterada.png',
      status:'Offline',
    },
  ]
  return(
    <Background>
      <Header
        title="Details"
        action={
          <BorderlessButton>
            <Fontisto
            name="share"
            size={24}
            color={theme.colors.primary}
            />

          </BorderlessButton>
        }
      />
      <ImageBackground 
      source={BannerImg}
      style={styles.banner}
      >
        <View style={styles.bannerContent}>
        <Text style={styles.title}>
          League Of Legends
        </Text>
        <Text style={styles.subtitle}>
          Hoje vamos ganhar todos os jogos

        </Text>
        </View>
      </ImageBackground>
      <ListHeader
        title="Jogadores"
        subtitle="3"
      />
      <FlatList
      data={members}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <Member data={item}/>
      )}
        ItemSeparatorComponent={()=> <ListDivider/>}
        style={styles.members}

      />
      <View style={styles.footer}>
      <ButtonIcon title="Entrar na partida"/>
      </View>
      


    </Background>

  )
}