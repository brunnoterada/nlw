<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> 8e1c11bd76d62e571c27b798db5ef4d45e0415d9
import { TouchableOpacity, 
    TouchableOpacityProps, 
    View, 
    Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { GuildIcon } from "../GuildIcon";
import { theme } from "../../global/styles/theme";
export type GuildProps={
<<<<<<< HEAD
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
=======
    id:string;
    name: string;
    icon:string | null;
    owner:boolean;
>>>>>>> 8e1c11bd76d62e571c27b798db5ef4d45e0415d9
}
type Props= TouchableOpacityProps & {
    data: GuildProps;
}
export function Guild ({data,...rest}: Props){
    return(
        <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        {...rest}
        >
            <GuildIcon/>
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}> 
                        {data.name}
                    </Text>
                    <Text style={styles.type}>
                        {data.owner ? 'Administrador' :'Convidado'}
                    </Text>
                </View>
            </View>
            <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={24}

            />

        </TouchableOpacity>
    );
}