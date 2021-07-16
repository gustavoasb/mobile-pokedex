import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors, Sizing } from "../styles"

type CardProps = {
  pokemon: Pokemon;
};

export default function Card({ pokemon }: CardProps) {
  return (
    <View style={styles.container}>
      <Text>{pokemon.name}</Text>
      <Text>#{pokemon.number}</Text>
      <Image source={{ uri: pokemon.image_url }} />
      <View>
        {/* {pokemon.kind.split(";")} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: Sizing.x20,
    paddingHorizontal: Sizing.x20,
    paddingVertical: Sizing.x20,
  },
  name: {
    fontFamily: "Barlow_500Medium",
  },
  image: {
    width: 96,
    height: 96,
  },
  types: {
    flexDirection: "row",
    justifyContent: "center",
  }
})