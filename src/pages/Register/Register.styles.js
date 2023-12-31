import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  image: {
    width: 430,
    height: 229,
    flexShrink: 0,
    justifyContent: "center",
    paddingHorizontal: 41,
  },
  headerTitle1: {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 36,
    marginRight: 17,
  },
  headerTitle2: {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    marginTop: 13,
  },
  body: {
    flex: 1,
    paddingLeft: 45,
    paddingRight: 45,
  },
  title: {
    color: "#939393",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Roboto",
    marginTop: 30,
    lineHeight: 21.6,
    marginBottom: 30,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    height: 50,
    paddingStart: 11,
    paddingVertical: 14,
    color: "#7C7C7C",
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 21.6,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  forgotPassword: {
    marginTop: 35,
    color: "#4F4F4F",
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 21.6,
    marginStart: 21,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#383838",

    height: 46,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonTitle: {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 21.6,
  },
  error: {
    color: "#FF3D00",
    fontFamily: "Roboto",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 15.6,
    marginTop: 7,
  },
  feature: {
    marginTop: 31,
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 46,
    justifyContent: "space-between",
  },
  featureTitle1: {
    color: "#939393",
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 21.6,
  },
  featureTitle2: {
    color: "#FF3D00",
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 21.6,
  },
});
