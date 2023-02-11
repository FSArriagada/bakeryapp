import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
    },
    button: {
        borderRadius:10,
    },
    title: {
        fontSize:20,
        fontFamily:'Sarabun-Bold',
        color:THEME.colors.title,
        padding: 10,
    },
    contentList: {
        flex: 1,
    }
});
