import { ThemeProvider } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";

export const styles = StyleSheet.create ({
    container:{
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height:120,
    },
    contentContainer:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 10,
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.84,
       elevation: 5,
    },
    title:{
        fontSize: 18,
        fontFamily:'Sarabun-Bold',
        color: THEME.colors.text,
    },
})