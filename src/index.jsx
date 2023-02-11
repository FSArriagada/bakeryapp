import { Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from './styles';
import AppNavigator from './navigation';
import { THEME } from './constants/theme';


const App = () => {
  const [loaded] = useFonts({
    'Sarabun-Regular': require('../assets/fonts/Sarabun-Regular.ttf'),
    'Sarabun-Bold': require('../assets/fonts/Sarabun-Bold.ttf'),
    'Sarabun-Light': require('../assets/fonts/Sarabun-Light.ttf'),
    'Sarabun-Medium': require('../assets/fonts/Sarabun-Medium.ttf'),
    'Sarabun-Thin': require('../assets/fonts/Sarabun-Thin.ttf'),
  });
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME.colors.primary}/>
      </View>
    );
  }
  return <AppNavigator />;
};

export default App;
