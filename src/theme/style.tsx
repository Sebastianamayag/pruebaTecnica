import { StyleSheet , Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
export const styles=StyleSheet.create({
    contenido:{
        width:(windowWidth/7) *2.8
    },
    title:{
        marginLeft:windowWidth/14,
    },
    headerTitle:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        color:'darkblue'
    }
})