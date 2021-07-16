import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../styles";

export default function OnboardingFirst({navigation}: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../../assets/pana.png")} style={styles.illustration} />
      <Text style={styles.heading}>
        Descubra mais sobre todas as criaturas do universo Pokémon
      </Text>
      <Text style={styles.text}>
        Existem 890 pokémon diferentes. Pela sua alta quantidade é difícil
        conhecer todos eles. Explore-os aplicativo de forma fácil e interativa.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("OnboardingSecond")} style={styles.iconContainer}>
        <Feather
          name="arrow-right"
          size={24}
          color={Colors.purple300}
          iconStyle={{ alignItems: "center" }}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.pageText}>1 de 2</Text>
      </View>
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
    aspectRatio: 1,
  },
  heading: {
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    marginBottom: 16,
  },
  text: {
    fontFamily: "Inter_300Light",
    fontSize: 15,
    marginBottom: 32,
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  pageText: {
    color: Colors.grey100,
    fontSize: 13,
    textAlign: "center",
  },
});
