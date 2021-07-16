import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../styles";
import BorderButton from "../components/BorderButton";
import FilledButton from "../components/FilledButton";
import api from "../services/api";
import { useUser } from "../context/UserContext";

export default function SignIn({ navigation }: any) {
  const [trainerName, setTrainerName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const { setUser } = useUser();

  const handleSignIn = () => {
    api
      .get(`users/${trainerName}`)
      .then((response) => setUser(response.data))
      .catch(() => setError(true));
  };
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
          Bem vindo de volta! Seus pokémon estão te esperando, entre com sua
          conta de treinador.
        </Text>
        <TextInput
          style={
            !error
              ? styles.input
              : StyleSheet.compose(styles.input, styles.redBorder)
          }
          placeholder="Nome de treinador"
          onChangeText={(text) => setTrainerName(text)}
          value={trainerName}
        />
        <View style={styles.inputContainer}>
          <FilledButton
            onPress={() => handleSignIn()}
            buttonStyle={{ backgroundColor: Colors.green, width: "100%" }}
            textStyle={{ color: Colors.black }}
          >
            Entrar
          </FilledButton>
          {error && (
            <Text style={styles.warning}>Usuário não encontrado</Text>
          )}
        </View>
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
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 64,
    width: "100%",
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
  redBorder: {
    borderColor: Colors.red,
    borderWidth: 1,
  },
  warning: {
    marginTop: 8,
    color: Colors.red,
    fontSize: 13,
    fontFamily: "Inter_300Light",
  },
});
