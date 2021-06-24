import { StyleSheet} from 'react-native';
//essa importação é para os celulares que tem a bitolinha na parte superior 
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        width:'100%',
        paddingHorizontal:24,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:getStatusBarHeight()+26,
        marginBottom:42,
    },
    content:{
        marginTop:42,
    },
    matches:{
        marginTop:24,
        marginLeft:24,
    },
});