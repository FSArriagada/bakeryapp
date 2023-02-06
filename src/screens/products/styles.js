import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    button: {
        borderRadius:10,
    },
    title: {
        fontSize:20,
        fontFamily:'Sarabun-Bold',
        color:theme.colors.title,
        padding: 10,
    }
});
