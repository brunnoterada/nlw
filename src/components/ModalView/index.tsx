import React, { ReactNode } from 'react';
import {
    View,
    Modal,
    ModalProps
} from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

type Props = ModalProps & {
    children: ReactNode;
}
export function ModalView({children,...rest}: Props){
    return(
        <Modal 
        transparent
        animationType="slide"
        {...rest}
        >
            <View style={styles.overlay}>
<<<<<<< HEAD
                <View style={styles.container}>
                    <Background>
                        <View style={styles.bar}/>
                     {children}
                    
                    </Background>
                </View>
=======
                <Background>
                    <View style={styles.bar}/>
                    {children}
                </Background>
>>>>>>> 8e1c11bd76d62e571c27b798db5ef4d45e0415d9
            </View>
        </Modal>
    )
}