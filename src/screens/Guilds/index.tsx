<<<<<<< HEAD
import React from 'react';

import { View, FlatList } from 'react-native';
import{ GuildProps } from '../../components/Guild';
=======
import React from 'react-native';

import { View, FlatList } from 'react-native';
>>>>>>> 8e1c11bd76d62e571c27b798db5ef4d45e0415d9
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles} from './styles';
<<<<<<< HEAD
type Props={
    handleGuildsSelect: (guild: GuildProps) => void;

}
export function Guilds({handleGuildsSelect}: Props){
=======
export function Guilds(){
>>>>>>> 8e1c11bd76d62e571c27b798db5ef4d45e0415d9
    const guilds =[
        {
            id:'1',
            name:'Lendários',
<<<<<<< HEAD
            icon: 'image.png',
            owner: true
        }
    ];
=======
            icon: null,
            owner: true,
        }
    ]
>>>>>>> 8e1c11bd76d62e571c27b798db5ef4d45e0415d9
    return(
         <View style={styles.container}>
            <FlatList
            data={guilds}
            keyExtractor={item=> item.id}
            renderItem={({item})=>(
                 <Guild
                 data={item}
<<<<<<< HEAD
                 onPress={() => handleGuildsSelect(item)}
=======
>>>>>>> 8e1c11bd76d62e571c27b798db5ef4d45e0415d9
                 />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider/>}
            style={styles.guilds}
            />


         </View>
    );
}