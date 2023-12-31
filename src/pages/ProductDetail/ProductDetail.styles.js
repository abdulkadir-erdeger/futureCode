import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  infoCard: {
    marginTop: 11,
    backgroundColor: "#fff",
    padding: 15,
  },
  infoTitle: {
    color: "#353535",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
  },
  infoDescription: {
    color: "#353535",
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
  },
  name: {
    color: "#FF6923",
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 20,
  },
  description: {
    color: "#353535",
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
  },
  stock: {
    marginStart: 13,
    color: "#353535",
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: 20,
  },
  kargoInfo: {
    color: "#34C231",
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 16,
  },
  priceCard: {
    marginTop: 8,
    backgroundColor: "#fff",
    padding: 11,
  },
  price: {
    color: "#4A4A4A",
    fontFamily: "Roboto",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: 40,
  },
  button: {
    height: 50,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 187,
  },
  buttonTitle: {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 16,
  },
  propertiesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 13,
  },
  propertiesTitle: {
    color: "#000",
    flex: 1.5,
    fontWeight: "700",
  },
  propertiesDescription: {
    flex: 2,
    color: "#353535",
  },
});
