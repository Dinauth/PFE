//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { colors } from './src/global/style';
import { Sign } from './src/screen/auth/sign';
import { SignWelcome } from './src/screen/auth/welcome';
import { RootNavigation } from './src/navigation/rootNavigation';
import { SignInContextProvider } from './src/context/authContext';
import { enableScreens } from 'react-native-screens';
export default function App() {
  enableScreens();
  return (
    <SignInContextProvider>
    <View style={styles.container}>
      <StatusBar barStyle="light-content"
          backgroundColor={colors.statusBar}/>

          <RootNavigation/>
      
      
          
    </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex:1},
});
