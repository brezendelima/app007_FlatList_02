import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a8c4d4",
  },

  cabecalho: {
    backgroundColor: "#a8c4d4",
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: "center",
  },
  cabecalhoTexto: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginTop: 6,
  },

  logo: {
    width: 120,
    height: 40,
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  card: {
    backgroundColor: "#c8dce8",
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
  },
  cardPais: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 2,
  },
  cardCapital: {
    fontSize: 13,
    color: "#333",
  },

  rodape: {
    backgroundColor: "#a8c4d4",
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#8aaabb",
  },
});