import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import Login from "./pages/Login";
// import Home from "./pages/Home";

const Stack = createStackNavigator();

import { useUser } from "./context/UserContext";
import OnboardingFirst from "./pages/Onboarding/OnboardingFirst";
import OnboardingSecond from "./pages/Onboarding/OnboardingSecond";
import Login from "./pages/Login";
import Feed from "./pages/Feed";

export default function RootNavigator() {
  const { user } = useUser();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Home" component={Feed} />
      ) : (
        <>
          <Stack.Screen name="OnboardingFirst" component={OnboardingFirst} />
          <Stack.Screen name="OnboardingSecond" component={OnboardingSecond} />
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
}
