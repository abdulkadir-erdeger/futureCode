import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import axios from "axios";
import Svg, { Path } from "react-native-svg";
import styles from "./ProductDetail.styles";
import { AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const ProductDetail = ({ route }) => {
  const id = route.params.id;
  const [products, setProducts] = useState([]);
  const [fav, setFav] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    try {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => setProducts(res.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const formattedAmount = (amount) => {
    return new Intl.NumberFormat("tr-TR", {
      currency: "TRY",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Svg
          width={39}
          height={20}
          viewBox="0 0 39 20"
          fill="none"
          onPress={() => navigation.goBack()}
        >
          <Path
            d="M11.0255 19.5945C11.2808 19.3376 11.4241 18.9901 11.4241 18.628C11.4241 18.2658 11.2808 17.9183 11.0255 17.6614L4.7191 11.3688H37.0049C37.3685 11.3688 37.7173 11.2243 37.9744 10.9672C38.2315 10.7101 38.3759 10.3614 38.3759 9.99783C38.3759 9.63423 38.2315 9.28553 37.9744 9.02842C37.7173 8.77132 37.3685 8.62688 37.0049 8.62688H4.76022L11.0255 2.36164C11.2854 2.10349 11.4322 1.75263 11.4335 1.38626C11.4348 1.01989 11.2905 0.668013 11.0323 0.408041C10.7742 0.148068 10.4233 0.00129404 10.0569 8.51562e-06C9.69056 -0.001277 9.33869 0.143031 9.07871 0.401186L0.359478 9.13413C0.129254 9.36537 0 9.67838 0 10.0047C0 10.331 0.129254 10.644 0.359478 10.8752L9.07871 19.5945C9.20616 19.723 9.35779 19.825 9.52485 19.8946C9.69192 19.9642 9.87111 20 10.0521 20C10.2331 20 10.4123 19.9642 10.5793 19.8946C10.7464 19.825 10.898 19.723 11.0255 19.5945Z"
            fill="#484C52"
          />
        </Svg>
        <View style={{ flexDirection: "row" }}>
          <Svg
            width={32}
            height={27}
            viewBox="0 0 32 27"
            fill={fav ? "red" : "none"}
            onPress={() => setFav(!fav)}
            style={{ marginRight: 24 }}
          >
            <Path
              d="M15.9544 27C15.5323 27.001 15.1142 26.919 14.7241 26.7587C14.334 26.5983 13.9796 26.3628 13.6814 26.0657L2.69 15.13C1.82172 14.2567 1.13679 13.2202 0.675104 12.081C0.21342 10.9417 -0.0157846 9.72246 0.000844123 8.4942C0.00921008 7.36861 0.24069 6.25571 0.682024 5.21926C1.12336 4.18282 1.76588 3.24318 2.57277 2.45418C3.37967 1.66517 4.33509 1.04231 5.38431 0.621252C6.43353 0.200198 7.55594 -0.0107691 8.68724 0.000434141C9.83879 -0.0111066 10.9809 0.20755 12.046 0.643437C13.111 1.07932 14.0772 1.72356 14.8872 2.53795L15.9544 3.59967L16.8294 2.72906C18.3404 1.18592 20.3622 0.239866 22.5205 0.0661275C24.6787 -0.107611 26.8271 0.502737 28.5678 1.78412C29.5586 2.54331 30.3755 3.50381 30.9641 4.60168C31.5527 5.69954 31.8994 6.90957 31.9812 8.15118C32.0629 9.39279 31.8779 10.6375 31.4384 11.8024C30.9989 12.9673 30.3149 14.0256 29.4321 14.907L18.2273 26.0657C17.9291 26.3628 17.5747 26.5983 17.1846 26.7587C16.7945 26.919 16.3764 27.001 15.9544 27ZM8.64455 2.11326C6.94838 2.11154 5.31807 2.76645 4.0986 3.93942C3.47689 4.53456 2.98248 5.24857 2.64507 6.03858C2.30765 6.82859 2.13419 7.67829 2.13509 8.53667C2.12574 9.48087 2.30486 10.4175 2.66206 11.2923C3.01926 12.1672 3.54744 12.9627 4.21599 13.6329L15.2074 24.5687C15.3066 24.6682 15.4246 24.7472 15.5546 24.8011C15.6847 24.855 15.8242 24.8827 15.965 24.8827C16.1059 24.8827 16.2454 24.855 16.3754 24.8011C16.5055 24.7472 16.6235 24.6682 16.7227 24.5687L27.9382 13.3994C28.5965 12.7305 29.1051 11.9306 29.4307 11.0523C29.7562 10.174 29.8913 9.23705 29.827 8.30309C29.77 7.35955 29.5088 6.43941 29.0612 5.60563C28.6137 4.77185 27.9903 4.04413 27.2339 3.47226C25.9065 2.49855 24.2686 2.03815 22.6254 2.17683C20.9821 2.31552 19.4456 3.04383 18.302 4.22608L16.712 5.85052C16.6128 5.95003 16.4948 6.02902 16.3647 6.08292C16.2347 6.13682 16.0952 6.16457 15.9544 6.16457C15.8135 6.16457 15.674 6.13682 15.544 6.08292C15.4139 6.02902 15.2959 5.95003 15.1967 5.85052L13.3826 4.04559C12.1331 2.81323 10.4466 2.11917 8.68724 2.11326H8.64455Z"
              fill={fav ? "red" : "#757575"}
            />
          </Svg>

          <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
            <Path
              d="M26.6667 0C25.2522 0 23.8956 0.561903 22.8954 1.5621C21.8952 2.56229 21.3333 3.91885 21.3333 5.33333C21.3357 5.70822 21.3776 6.08181 21.4583 6.44792L9.34896 12.5026C8.84952 11.9276 8.23272 11.4662 7.54006 11.1496C6.8474 10.8329 6.09495 10.6682 5.33333 10.6667C3.91885 10.6667 2.56229 11.2286 1.5621 12.2288C0.561903 13.229 0 14.5855 0 16C0 17.4145 0.561903 18.771 1.5621 19.7712C2.56229 20.7714 3.91885 21.3333 5.33333 21.3333C6.09519 21.3325 6.84802 21.1684 7.54115 20.8522C8.23427 20.5359 8.85159 20.0749 9.35156 19.5L21.4531 25.5521C21.3742 25.9184 21.334 26.292 21.3333 26.6667C21.3333 28.0812 21.8952 29.4377 22.8954 30.4379C23.8956 31.4381 25.2522 32 26.6667 32C28.0812 32 29.4377 31.4381 30.4379 30.4379C31.4381 29.4377 32 28.0812 32 26.6667C32 25.2522 31.4381 23.8956 30.4379 22.8954C29.4377 21.8952 28.0812 21.3333 26.6667 21.3333C25.9048 21.3342 25.152 21.4983 24.4589 21.8145C23.7657 22.1307 23.1484 22.5918 22.6484 23.1667L10.5469 17.1146C10.6258 16.7483 10.666 16.3747 10.6667 16C10.6641 15.626 10.6222 15.2533 10.5417 14.888L22.651 8.83333C23.1507 9.40786 23.7676 9.86873 24.4603 10.185C25.1529 10.5012 25.9052 10.6654 26.6667 10.6667C28.0812 10.6667 29.4377 10.1048 30.4379 9.10457C31.4381 8.10438 32 6.74782 32 5.33333C32 3.91885 31.4381 2.56229 30.4379 1.5621C29.4377 0.561903 28.0812 0 26.6667 0Z"
              fill="#484C52"
            />
          </Svg>
        </View>
      </View>
      <ScrollView style={{ flexGrow: 1 }}>
        {products && (
          <Image
            source={{ uri: products?.images ? products?.images[0] : null }}
            style={{ height: 500 }}
            resizeMode="stretch"
          />
        )}
        <View
          style={{
            flexDirection: "row",
            marginTop: 18,
            justifyContent: "space-evenly",
            marginHorizontal: 100,
          }}
        >
          <View style={{ width: 26, height: 3, backgroundColor: "#676767" }} />
          <View style={{ width: 26, height: 3, backgroundColor: "#B9C0C9" }} />
          <View style={{ width: 26, height: 3, backgroundColor: "#B9C0C9" }} />
          <View style={{ width: 26, height: 3, backgroundColor: "#B9C0C9" }} />
        </View>

        <View style={styles.infoCard}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name}>
              {products.title}
              <Text style={styles.description}> {products.description}</Text>
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AirbnbRating
                style={{ paddingVertical: 5 }}
                count={5}
                defaultRating={products.rating}
                size={17}
                isDisabled
                showRating={false}
                starContainerStyle={{
                  marginTop: 9,
                  marginBottom: 5,
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              />
              <Text style={styles.stock}>{products.stock}</Text>
            </View>

            <Text style={styles.kargoInfo}>2 gün içinde kargoda</Text>
          </View>
        </View>

        <View style={styles.priceCard}>
          <Text style={styles.price}>
            {" "}
            {formattedAmount(products?.price * 27.11)} TL
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Pressable style={[styles.button, { backgroundColor: "#34C231" }]}>
              <Text style={styles.buttonTitle}>Sepete Ekle</Text>
            </Pressable>

            <Pressable style={[styles.button, { backgroundColor: "#EF5F4B" }]}>
              <Text style={styles.buttonTitle}>Sepete Ekle</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Değerlendirme (155)</Text>
        </View>

        <View style={styles.infoCard}>
          <Text
            style={[styles.infoTitle, { fontWeight: "700", marginBottom: 17 }]}
          >
            Ürün Açıklamaları
          </Text>
          <Text style={styles.infoDescription}>
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={[styles.infoTitle, { marginBottom: 17 }]}>
            Ürün Özellikleri
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 13,
            }}
          >
            <Text style={{ color: "#000", flex: 1.5 }}>Renk:</Text>
            <Text style={{ flex: 2, color: "#353535" }}>Koyu Yeşil</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 13,
            }}
          >
            <Text style={{ color: "#000", flex: 1.5 }}>Kapasite:</Text>
            <Text style={{ flex: 2, color: "#353535" }}>3 Kişilik</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 13,
            }}
          >
            <Text style={{ color: "#000", flex: 1.5 }}>Su geçirmez:</Text>
            <Text style={{ flex: 2, color: "#353535" }}>2000mm</Text>
          </View>
        </View>

        <View style={[styles.infoCard, { marginBottom: 140, height: 155 }]}>
          <Text style={styles.infoTitle}>Ürün Değerlendirmeleri</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
