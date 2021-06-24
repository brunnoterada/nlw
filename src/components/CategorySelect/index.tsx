import React from 'react';
import {ScrollView} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import{styles} from './styles';
import {categories} from '../../utils/categories';
import { Category } from '../Category';
import { createNavigatorFactory } from '@react-navigation/core';


type Props ={
  categorySelected : string;
  setCategory: (caregoryId:string) => void;
  

}

export function CategorySelect({categorySelected,setCategory }: Props){
  return(
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight:40}}
    >
      {
        categories.map(category => (
          <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          
          
          />


        ))

      }



    </ScrollView>
    );
}