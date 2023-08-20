import { View, Text, Modal } from "react-native";
import styles from "./RegisterEmailCheck.styles";
import Svg, { Path } from "react-native-svg";
import React from "react";

const RegisterEmailCheck = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 18,
            }}
          >
            <Svg
              width={28}
              height={15}
              viewBox="0 0 28 15"
              fill="none"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Path
                d="M8.04221 14.2926C8.22846 14.1053 8.333 13.8518 8.333 13.5876C8.333 13.3234 8.22846 13.07 8.04221 12.8826L3.44221 8.29263H26.9922C27.2574 8.29263 27.5118 8.18728 27.6993 7.99974C27.8869 7.8122 27.9922 7.55785 27.9922 7.29263C27.9922 7.02742 27.8869 6.77306 27.6993 6.58553C27.5118 6.39799 27.2574 6.29263 26.9922 6.29263H3.47221L8.04221 1.72263C8.23184 1.53433 8.3389 1.27841 8.33984 1.01117C8.34078 0.74393 8.23551 0.487263 8.04721 0.297634C7.85891 0.108004 7.60299 0.000943897 7.33575 6.21148e-06C7.06851 -0.000931474 6.81184 0.10433 6.62221 0.292634L0.262211 6.66263C0.0942805 6.8313 0 7.05962 0 7.29763C0 7.53564 0.0942805 7.76397 0.262211 7.93263L6.62221 14.2926C6.71517 14.3864 6.82578 14.4608 6.94763 14.5115C7.06949 14.5623 7.2002 14.5884 7.33221 14.5884C7.46422 14.5884 7.59493 14.5623 7.71679 14.5115C7.83865 14.4608 7.94925 14.3864 8.04221 14.2926Z"
                fill="#4F4F4F"
              />
            </Svg>
            <Text style={styles.headerTitle}>Kayıt Ol</Text>
          </View>

          <>
            <View style={{ alignItems: "center" }}>
              <Svg width={96} height={96} viewBox="0 0 96 96" fill="none">
                <Path
                  d="M48 4C39.2976 4 30.7907 6.58055 23.5549 11.4153C16.3191 16.2501 10.6795 23.122 7.34929 31.1619C4.01903 39.2019 3.14769 48.0488 4.84544 56.584C6.54319 65.1191 10.7338 72.9592 16.8873 79.1127C23.0408 85.2662 30.8809 89.4568 39.416 91.1545C47.9512 92.8523 56.7981 91.9809 64.8381 88.6507C72.878 85.3204 79.7499 79.6809 84.5847 72.4451C89.4194 65.2093 92 56.7024 92 48C92 36.3305 87.3643 25.1389 79.1127 16.8873C70.8611 8.6357 59.6695 4 48 4ZM70.828 38.828L42.828 66.828C42.0779 67.5779 41.0606 67.9991 40 67.9991C38.9393 67.9991 37.9221 67.5779 37.172 66.828L25.172 54.828C24.4434 54.0736 24.0402 53.0632 24.0493 52.0144C24.0584 50.9656 24.4791 49.9624 25.2207 49.2207C25.9623 48.4791 26.9656 48.0584 28.0144 48.0493C29.0632 48.0402 30.0736 48.4434 30.828 49.172L40 58.344L65.172 33.172C65.9264 32.4434 66.9368 32.0402 67.9856 32.0493C69.0344 32.0584 70.0376 32.4791 70.7793 33.2207C71.5209 33.9624 71.9416 34.9656 71.9507 36.0144C71.9598 37.0632 71.5566 38.0736 70.828 38.828Z"
                  fill="#28C072"
                />
              </Svg>
            </View>
            <Text style={[styles.title, { textAlign: "center" }]}>
              Size bir e-posta gönderdik, e-posta onayından sonra giriş
              yapabilirsiniz.
            </Text>
            <View style={[styles.button, { marginTop: 25 }]}>
              <Text style={styles.buttonTitle}>
                Lütfen, e-posta adresinizi onaylayın.
              </Text>
            </View>
          </>
        </View>
      </View>
    </Modal>
  );
};

export default RegisterEmailCheck;
