import React,{useState} from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {
  KeyboardAvoidingView, 
  Text, 
  View,
  Platform,
  ScrollView,
} from 'react-native';
import { Header } from "../../components/Header";
import { CategorySelect } from '../../components/CategorySelect';

import { theme } from "../../global/styles/theme";
import { SmallInput } from "../../components/SmallInput";

import { styles } from './styles';
import { GuildIcon } from "../../components/GuildIcon";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";



export function AppointmentCreate(){
  const [category, setCategory] = useState('');

  return(
    <KeyboardAvoidingView 
    behavior={Platform.OS=== 'ios' ? 'padding': 'height'}
    style={styles.container}>
    <ScrollView>
      <Header
        title="Agendar partida"
      />
      <Text style={[styles.label, { marginLeft:24, marginTop:36, marginBottom:18 }]}>
        Categoria
      </Text>
      <CategorySelect
      hasCheckbox={true}
      setCategory={setCategory}
      categorySelected={category}
      />
      <View style={styles.form}>
        <RectButton>
          <View style ={styles.select}>
            {/*<View style={styles.image}/>*/}
            <GuildIcon/>
            <View style={styles.selectBody}>
              <Text style={styles.label}>
                Selecione um servidor
              </Text>
            </View>

            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}

            />

          </View>

        </RectButton>
        <View style={styles.field}>
          <View>
            <Text style={styles.label}>
              Dia e mês
            </Text>
            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>
                /
              </Text>   
              <SmallInput maxLength={2} />
            </View>
          </View>
          <View>
            <Text style={styles.label}>
              Hora e minuto
            </Text>
          <View style={styles.column}>
            <SmallInput maxLength={2} />
            <Text style={styles.divider}>
              :</Text>   
            <SmallInput maxLength={2} />
          </View>
          </View>
        
        </View>
        <View style={[styles.field, {marginBottom: 12}]}>
          <Text style={styles.label}>
            Descrição
          </Text>
          <Text style={styles.caracteresLimit}>
            Max 100 caracteres
          </Text>
        </View>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
          <View style={styles.footer}>
            <Button title="Agendar"/>
      </View>
      </View>
      
    </ScrollView>
    <ModalView>
      <Guilds/>
    </ModalView>
    </KeyboardAvoidingView>

  )
}