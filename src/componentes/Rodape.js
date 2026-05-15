import React from "react";
import { View, Image } from "react-native";
import { estilos } from "../styleSheet/estilos";

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
      <Image
        source={require("../img/logo01.png")}
        style={estilos.logo}
        resizeMode="contain"
      />
    </View>
  );
}