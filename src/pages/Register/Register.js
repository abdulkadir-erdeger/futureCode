import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Register.styles";

const LoginSchema = Yup.object().shape({
  ad: Yup.string().required("Bu alanın girilmesi zorunludur."),
  soyad: Yup.string().required("Bu alanın girilmesi zorunludur."),
  telefon: Yup.string().required("Bu alanın girilmesi zorunludur."),
  eposta: Yup.string()
    .email("Geçerli bir e-posta girin")
    .required("Bu alanın girilmesi zorunludur."),
  sifre: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalı")
    .required("Bu alanın girilmesi zorunludur."),
  reSifre: Yup.string().oneOf([Yup.ref("sifre"), null], "Şifreler uyuşmuyor."),
});

const Register = () => {
  const [passwordSecurity, setPasswordSecurity] = useState(true);
  const initialValues = {
    ad: "",
    soyad: "",
    telefon: "",
    eposta: "",
    sifre: "",
    reSifre: "",
  };
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        // const { data } = await login(values.email, values.password, token);
      } catch (err) {
        console.error(err);
      }
    },
  });
  return (
    <View style={styles.container}>
      {/* Header */}
      <ImageBackground
        source={require("./../../../assets/login-img.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.headerTitle1}>Kayıt Ol</Text>
          <Svg width="24.242" height="25" viewBox="0 0 28 29" fill="none">
            <Path
              d="M2 27C2 27 5.4957 19.4243 14.1211 19.4243C22.7466 19.4243 26.2424 27 26.2424 27"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M13.7424 14.8788C17.2989 14.8788 20.1818 11.9959 20.1818 8.43939C20.1818 4.88302 17.2989 2 13.7424 2C10.1859 2 7.30303 4.88302 7.30303 8.43939C7.30303 11.9959 10.1859 14.8788 13.7424 14.8788Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
        <Text style={styles.headerTitle2}>Hoşgeldiniz</Text>
      </ImageBackground>
      {/* Header */}
      {/*Body */}
      <ScrollView style={styles.body}>
        <Text style={styles.title}>Alışverişe başlamak için kayıt olunuz.</Text>

        <TextInput
          value={formik.values.ad}
          onChangeText={formik.handleChange("ad")}
          placeholder={"Ad *"}
          style={styles.input}
        />
        {formik.errors.ad && formik.touched.ad && (
          <Text style={styles.error}>{formik.errors.ad}</Text>
        )}

        <TextInput
          value={formik.values.soyad}
          onChangeText={formik.handleChange("soyad")}
          placeholder={"Soyad *"}
          style={[styles.input, { marginTop: 26 }]}
        />
        {formik.errors.soyad && formik.touched.soyad && (
          <Text style={styles.error}>{formik.errors.soyad}</Text>
        )}

        <TextInput
          value={formik.values.eposta}
          onChangeText={formik.handleChange("eposta")}
          placeholder={"E-Posta *"}
          style={[styles.input, { marginTop: 26 }]}
        />
        {formik.errors.eposta && formik.touched.eposta && (
          <Text style={styles.error}>{formik.errors.eposta}</Text>
        )}

        <TextInput
          value={formik.values.telefon}
          onChangeText={formik.handleChange("telefon")}
          placeholder={"Telefon *"}
          style={[styles.input, { marginTop: 26 }]}
        />
        {formik.errors.telefon && formik.touched.telefon && (
          <Text style={styles.error}>{formik.errors.telefon}</Text>
        )}

        <View style={styles.passwordContainer}>
          <TextInput
            value={formik.values.sifre}
            onChangeText={formik.handleChange("sifre")}
            placeholder={"Şifre *"}
            style={[styles.input, { flex: 1 }]}
            secureTextEntry={passwordSecurity}
          />

          <Svg
            width="25"
            height="17"
            viewBox="0 0 25 17"
            fill="none"
            style={{ position: "absolute", right: 16, top: 16 }}
            onPress={() => setPasswordSecurity(!passwordSecurity)}
          >
            <Path
              d="M24.849 7.85365C22.4952 3.16935 17.8355 0 12.5 0C7.16449 0 2.50345 3.17156 0.151018 7.85409C0.0517307 8.05442 0 8.27575 0 8.50022C0 8.72469 0.0517307 8.94602 0.151018 9.14635C2.50476 13.8307 7.16449 17 12.5 17C17.8355 17 22.4965 13.8284 24.849 9.14591C24.9483 8.94558 25 8.72425 25 8.49978C25 8.2753 24.9483 8.05398 24.849 7.85365ZM12.5 14.875C11.2639 14.875 10.0555 14.5011 9.02768 13.8006C7.99987 13.1001 7.19879 12.1045 6.72574 10.9396C6.25269 9.77473 6.12892 8.49293 6.37008 7.2563C6.61124 6.01967 7.20649 4.88375 8.08057 3.99219C8.95465 3.10063 10.0683 2.49347 11.2807 2.24749C12.4931 2.00151 13.7497 2.12776 14.8918 2.61027C16.0338 3.09278 17.0099 3.90988 17.6967 4.95824C18.3835 6.0066 18.75 7.23914 18.75 8.5C18.7504 9.33729 18.589 10.1665 18.2751 10.9401C17.9611 11.7137 17.5008 12.4167 16.9203 13.0087C16.3399 13.6008 15.6507 14.0703 14.8922 14.3906C14.1338 14.7108 13.3209 14.8754 12.5 14.875ZM12.5 4.25C12.1281 4.2553 11.7586 4.31174 11.4015 4.41779C11.6958 4.82582 11.8371 5.32794 11.7996 5.8331C11.7622 6.33826 11.5485 6.81299 11.1973 7.17121C10.8461 7.52943 10.3806 7.74741 9.88539 7.78563C9.39014 7.82384 8.89785 7.67976 8.49782 7.37951C8.27003 8.23552 8.31115 9.14285 8.61539 9.97378C8.91964 10.8047 9.47169 11.5174 10.1938 12.0115C10.916 12.5057 11.7719 12.7564 12.641 12.7284C13.5102 12.7004 14.3489 12.3951 15.039 11.8554C15.7291 11.3158 16.236 10.569 16.4882 9.7201C16.7404 8.87124 16.7253 7.96307 16.445 7.12343C16.1647 6.28379 15.6333 5.55494 14.9256 5.03949C14.2179 4.52403 13.3696 4.24791 12.5 4.25Z"
              fill="#939393"
            />
          </Svg>
        </View>
        {formik.errors.sifre && formik.touched.sifre && (
          <Text style={styles.error}>{formik.errors.sifre}</Text>
        )}

        <View style={styles.passwordContainer}>
          <TextInput
            value={formik.values.reSifre}
            onChangeText={formik.handleChange("reSifre")}
            placeholder={"Şifre Tekrar *"}
            style={[styles.input, { flex: 1 }]}
            secureTextEntry={passwordSecurity}
          />

          <Svg
            width="25"
            height="17"
            viewBox="0 0 25 17"
            fill="none"
            style={{ position: "absolute", right: 16, top: 16 }}
            onPress={() => setPasswordSecurity(!passwordSecurity)}
          >
            <Path
              d="M24.849 7.85365C22.4952 3.16935 17.8355 0 12.5 0C7.16449 0 2.50345 3.17156 0.151018 7.85409C0.0517307 8.05442 0 8.27575 0 8.50022C0 8.72469 0.0517307 8.94602 0.151018 9.14635C2.50476 13.8307 7.16449 17 12.5 17C17.8355 17 22.4965 13.8284 24.849 9.14591C24.9483 8.94558 25 8.72425 25 8.49978C25 8.2753 24.9483 8.05398 24.849 7.85365ZM12.5 14.875C11.2639 14.875 10.0555 14.5011 9.02768 13.8006C7.99987 13.1001 7.19879 12.1045 6.72574 10.9396C6.25269 9.77473 6.12892 8.49293 6.37008 7.2563C6.61124 6.01967 7.20649 4.88375 8.08057 3.99219C8.95465 3.10063 10.0683 2.49347 11.2807 2.24749C12.4931 2.00151 13.7497 2.12776 14.8918 2.61027C16.0338 3.09278 17.0099 3.90988 17.6967 4.95824C18.3835 6.0066 18.75 7.23914 18.75 8.5C18.7504 9.33729 18.589 10.1665 18.2751 10.9401C17.9611 11.7137 17.5008 12.4167 16.9203 13.0087C16.3399 13.6008 15.6507 14.0703 14.8922 14.3906C14.1338 14.7108 13.3209 14.8754 12.5 14.875ZM12.5 4.25C12.1281 4.2553 11.7586 4.31174 11.4015 4.41779C11.6958 4.82582 11.8371 5.32794 11.7996 5.8331C11.7622 6.33826 11.5485 6.81299 11.1973 7.17121C10.8461 7.52943 10.3806 7.74741 9.88539 7.78563C9.39014 7.82384 8.89785 7.67976 8.49782 7.37951C8.27003 8.23552 8.31115 9.14285 8.61539 9.97378C8.91964 10.8047 9.47169 11.5174 10.1938 12.0115C10.916 12.5057 11.7719 12.7564 12.641 12.7284C13.5102 12.7004 14.3489 12.3951 15.039 11.8554C15.7291 11.3158 16.236 10.569 16.4882 9.7201C16.7404 8.87124 16.7253 7.96307 16.445 7.12343C16.1647 6.28379 15.6333 5.55494 14.9256 5.03949C14.2179 4.52403 13.3696 4.24791 12.5 4.25Z"
              fill="#939393"
            />
          </Svg>
        </View>
        {formik.errors.reSifre && formik.touched.reSifre && (
          <Text style={styles.error}>{formik.errors.reSifre}</Text>
        )}

        <TouchableOpacity
          style={[styles.button, { marginTop: 25 }]}
          onPress={formik.handleSubmit}
        >
          <Text style={styles.buttonTitle}>Kayıt Ol</Text>
        </TouchableOpacity>
        <View style={styles.feature}>
          <Text style={styles.featureTitle1}>Zaten bir hesabın mı var?</Text>
          <Text
            style={styles.featureTitle2}
            onPress={() => navigation.navigate("Login")}
          >
            Giriş Yap
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
