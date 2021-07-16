import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Colors, Sizing } from "../styles"

type TypeIconProps = {
  type: string;
}

const types: {[key: string]: any} = {
  bug: require("../../assets/type-icons/$bug-kind-icon.png"),
}

export default function TypeIcon({type} : TypeIconProps){
  return <Image source={require(`../../assets/type-icons/${type}`)}/>
}

const styles = StyleSheet.create({
  icon: {
    height: Sizing.x16,
    width: Sizing.x16,
    marginHorizontal: Sizing.x20,
  }
})