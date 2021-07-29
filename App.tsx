import React from 'react';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    SourceSansPro_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    );
  }
}
