import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../styles";
import BorderButton from "../components/BorderButton";
import FilledButton from "../components/FilledButton";

export default function SignIn({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={[Colors.purple100, Colors.purple200, Colors.white]}
        style={styles.container}
        locations={[0, 0.32, 0.32]}
      >
        <Image
          source={require("../../assets/squirtle.png")}
          style={styles.illustration}
        />
        <Text style={styles.text}>
        Bem vindo de volta! Seus pokémon estão te esperando, entre com sua conta de treinador.
        </Text>
        <TextInput style={styles.input} placeholder="Nome de treinador" />
        <FilledButton
          onPress={() => navigation.navigate("Home")}
          buttonStyle={{ backgroundColor: Colors.green, width: "100%", marginBottom: 64 }}
          textStyle={{ color: Colors.black }}
        >
          Entrar
        </FilledButton>
        <BorderButton
          buttonStyle={{ width: "75%", borderColor: Colors.purple200 }}
          textStyle={{ color: Colors.purple200, fontFamily: "Inter_300Light" }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Ainda não é um treinador?
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
  text: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    marginBottom: 16,
    textAlign: "center",
    color: Colors.black,
  },
  input: {
    fontSize: 15,
    padding: 16,
    margin: 12,
    color: Colors.black,
    textAlign: "center",
    backgroundColor: Colors.grey200,
    width: "100%",
    borderRadius: 10,
  },
});
