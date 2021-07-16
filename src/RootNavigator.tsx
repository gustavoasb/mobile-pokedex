import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import Home from "./pages/Home";

const Stack = createStackNavigator();

import { useUser } from "./context/UserContext";
import OnboardingFirst from "./pages/Onboarding/OnboardingFirst";
import OnboardingSecond from "./pages/Onboarding/OnboardingSecond";
import SelectLogin from "./pages/SelectLogin";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

export default function RootNavigator() {
  const { user } = useUser();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <>
          <Stack.Screen name="OnboardingFirst" component={OnboardingFirst} />
          <Stack.Screen name="OnboardingSecond" component={OnboardingSecond} />
          <Stack.Screen name="Login" component={SelectLogin} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </>
      )}
    </Stack.Navigator>
  );
}
