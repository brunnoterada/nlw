import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
    Text,

} from 'react-native';

import {styles} from './styles';


/*A propos recebe todas as propriedades que definimos entre chaves
e todas as propriedades do TouchableOpacityProps*/

type Props = RectButtonProps & {
    title: string
}

export function Button({title, ...rest}:Props){
    return(
        <RectButton 
        style={styles.container}
        {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}
