import { StatusBar, StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:THEME.colors.lightgray,
        marginTop: StatusBar.currentHeight,
    },
    title: {
        fontSize:20,
        fontFamily:'Sarabun-Bold',
        color:THEME.colors.title,
        padding: 10,
    },
    containerList:{
        flex: 1,
        paddingBottom:10,
    }
});
