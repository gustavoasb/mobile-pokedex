import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/RootNavigator";
import { UserProvider } from "./src/context/UserContext";
import AppLoading from "expo-app-loading";

export default function App() {
  let [loaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!loaded) return <AppLoading />;

  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar style="auto" translucent={false} backgroundColor="white" />
        <RootNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
