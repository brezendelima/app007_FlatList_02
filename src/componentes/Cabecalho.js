import React from "react";
import { View, Text, Image } from "react-native";
import { estilos } from "../styleSheet/estilos";

export default function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <Image
        source={require("../img/logo01.png")}
        style={estilos.logo}
        resizeMode="contain"
      />
      <Text style={estilos.cabecalhoTexto}>Países</Text>
    </View>
  );
}