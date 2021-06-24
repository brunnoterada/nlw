import React, {useState} from 'react';
import {View,FlatList,Text} from 'react-native';
import {styles} from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

export function Home(){
    const [category, setCategory] = useState('');
    const appoinments = [
        {
            id:'1',
            guild:{
                id:'1',
                name:'Lendários',
                icon:null,
                owner:true
            },
            category:'1',
            date:'22/06 ás 20:40',
            description:'É hoje que vamos chegar no challenger sem perder uma partida',
        },
        {
            id:'2',
            guild:{
                id:'2',
                name:'Rainbow Six',
                icon:null,
                owner:true
            },
            category:'1',
            date:'22/06 ás 20:40',
            description:'É hoje que vamos chegar no challenger sem perder uma partida',
        },
    
       

    ]
    function handleCaregorySelect(categoryId: string){
        
        
         /*if(categoryId === category){
            setCategory('')
        }else{
            setCategory(categoryId)
        }
        
        Esse código de if e else se resume 
        a esse pequeno código na parte inferior
        */
        categoryId === category? setCategory('') : setCategory(categoryId);
        
        
       
    }
    return(
        <View>
            <View style={styles.header}>
            
            <Profile/>
            <ButtonAdd/>
            </View>
        <View>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCaregorySelect}
            />
            <View style={styles.content}>
                <ListHeader
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />
                <FlatList
                    data={appoinments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Appointment data={item}/>
                    )}
                    ItemSeparatorComponent={() =><ListDivider/>}
                    style={styles.matches}
                    showsHorizontalScrollIndicator={false}
                    />
            </View>
        </View>
        </View>
    );
}