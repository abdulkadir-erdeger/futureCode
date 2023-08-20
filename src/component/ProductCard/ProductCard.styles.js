import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { backgroundColor: "#F3F3F3", margin: 7, flex: 1 },
  infoContainer: {
    backgroundColor: "#FFF",
    padding: 10,
  },
  kargo: {
    color: "#34C231",
    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 16,
  },
  image: {
    marginHorizontal: 40,
    width: "auto",
    height: undefined,
    aspectRatio: 1,
  },
  name: {
    color: "#353535",
    fontFamily: "Roboto",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 16,
    marginBottom: 5,
  },
  description: {
    color: "#9E9E9E",
    fontFamily: "Roboto",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 16,
    marginBottom: 10,
  },
  price: {
    color: "#4A4A4A",
    fontFamily: "Roboto",
    fontSize: 19,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 19,
  },
  button: {
    marginTop: 6,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "rgba(0, 0, 0, 0.10)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonTitle: {
    color: "#6D6D6D",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 16,
  },
});
