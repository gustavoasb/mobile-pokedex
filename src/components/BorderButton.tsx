import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../styles";

type ButtonProps = {
  buttonStyle?: Object,
  children?: string,
  textStyle?: Object,
  onPress?: ((event: GestureResponderEvent) => void) | undefined,
};

export default function BorderButton({
  buttonStyle,
  children,
  textStyle,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={StyleSheet.compose(styles.button, buttonStyle)}>
      <Text style={StyleSheet.compose(styles.text, textStyle)}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderColor: Colors.white,
    borderWidth: 1,
    backgroundColor: "transparent",
    padding: 16,
  },
  text: {
    fontFamily: "Inter_500Medium",
    color: Colors.white,
    fontSize: 15,
    textAlign: "center",
  },
});
