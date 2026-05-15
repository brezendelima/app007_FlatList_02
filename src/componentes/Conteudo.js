import React from "react";
import { View, Text, FlatList } from "react-native";
import { estilos } from "../styleSheet/estilos";
import paises from "../dados/paises.json";

export default function Conteudo() {
  function renderItem({ item }) {
    return (
      <View style={estilos.card}>
        <Text style={estilos.cardPais}>{item.pais}</Text>
        <Text style={estilos.cardCapital}>Capital: {item.capital}</Text>
      </View>
    );
  }

  return (
    <View style={estilos.conteudo}>
      <FlatList
        data={paises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}