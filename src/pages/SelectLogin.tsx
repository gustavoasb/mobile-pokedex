import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../styles";
import BorderButton from "../components/BorderButton";

export default function SelectLogin({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={[Colors.purple200, Colors.purple100]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image
          source={require("../../assets/login.png")}
          style={styles.illustration}
        />
        <Text style={styles.heading}>Bem vindo a Pokedéx!</Text>
        <Text style={styles.text}>
          Enciclopédia virtual. As informações de todos os Pokémon na palma da
          sua mão.
        </Text>
        <BorderButton
          onPress={() => navigation.navigate("SignIn")}
          buttonStyle={{ width: "100%", marginBottom: 8 }}
        >
          Já sou um treinador
        </BorderButton>
        <BorderButton
          onPress={() => navigation.navigate("SignUp")}
          buttonStyle={{ borderColor: Colors.orange, width: "100%" }}
          textStyle={{ color: Colors.orange }}
        >
          Quero virar um treinador
        </BorderButton>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  illustration: {
    resizeMode: "contain",
    width: "100%",
    height: "auto",
    aspectRatio: 1.5,
    marginBottom: 16,
  },
  heading: {
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    marginBottom: 16,
    textAlign: "center",
    color: Colors.white,
  },
  text: {
    fontFamily: "Inter_300Light",
    fontSize: 15,
    marginBottom: 32,
    textAlign: "center",
    color: Colors.white100,
  },
});
