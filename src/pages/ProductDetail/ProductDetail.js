import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
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
          <TouchableOpacity
            onPress={() => setFav(!fav)}
            style={{
              width: 31.9998,
              height: 27.0004,
              marginRight: 24,
            }}
          >
            {fav ? (
              <Svg
                width={31.9998}
                height={27.0004}
                viewBox="196 319 31.9997 29"
              >
                <Path
                  d="M218.941 347.452C218.518 347.453 218.1 347.371 217.71 347.211C217.32 347.05 216.966 346.815 216.668 346.518L205.676 335.582C204.808 334.709 204.123 333.672 203.661 332.533C203.2 331.394 202.97 330.174 202.987 328.946C202.995 327.821 203.227 326.708 203.668 325.671C204.109 324.635 204.752 323.695 205.559 322.906C206.366 322.117 207.321 321.494 208.37 321.073C209.42 320.652 210.542 320.441 211.673 320.452C212.825 320.441 213.967 320.659 215.032 321.095C216.097 321.531 217.063 322.175 217.873 322.99L218.941 324.052L219.816 323.181C221.327 321.638 223.348 320.692 225.507 320.518C227.665 320.344 229.813 320.955 231.554 322.236C232.545 322.995 233.362 323.956 233.95 325.054C234.539 326.151 234.886 327.361 234.967 328.603C235.049 329.845 234.864 331.089 234.425 332.254C233.985 333.419 233.301 334.477 232.418 335.359L221.213 346.518C220.915 346.815 220.561 347.05 220.171 347.211C219.781 347.371 219.363 347.453 218.941 347.452Z"
                  fill="#FF0000"
                />
              </Svg>
            ) : (
              <Svg
                width={31.9998}
                height={27.0004}
                viewBox="253 378 31.9998 29"
              >
                <Path
                  d="M276.91 406.505C276.488 406.506 276.07 406.424 275.68 406.264C275.29 406.103 274.935 405.868 274.637 405.571L263.646 394.635C262.777 393.762 262.093 392.725 261.631 391.586C261.169 390.447 260.94 389.228 260.957 387.999C260.965 386.874 261.196 385.761 261.638 384.724C262.079 383.688 262.722 382.748 263.529 381.959C264.335 381.17 265.291 380.547 266.34 380.126C267.389 379.705 268.512 379.494 269.643 379.505C270.795 379.494 271.937 379.713 273.002 380.148C274.067 380.584 275.033 381.229 275.843 382.043L276.91 383.105L277.785 382.234C279.296 380.691 281.318 379.745 283.476 379.571C285.634 379.397 287.783 380.008 289.524 381.289C290.514 382.048 291.331 383.009 291.92 384.107C292.508 385.205 292.855 386.415 292.937 387.656C293.019 388.898 292.834 390.143 292.394 391.307C291.955 392.472 291.271 393.531 290.388 394.412L279.183 405.571C278.885 405.868 278.53 406.103 278.14 406.264C277.75 406.424 277.332 406.506 276.91 406.505ZM269.6 381.618C267.904 381.617 266.274 382.272 265.054 383.444C264.433 384.04 263.938 384.754 263.601 385.544C263.263 386.334 263.09 387.183 263.091 388.042C263.081 388.986 263.261 389.923 263.618 390.797C263.975 391.672 264.503 392.468 265.172 393.138L276.163 404.074C276.262 404.173 276.38 404.252 276.51 404.306C276.64 404.36 276.78 404.388 276.921 404.388C277.062 404.388 277.201 404.36 277.331 404.306C277.461 404.252 277.579 404.173 277.678 404.074L288.894 392.904C289.552 392.236 290.061 391.436 290.386 390.557C290.712 389.679 290.847 388.742 290.783 387.808C290.726 386.865 290.465 385.944 290.017 385.111C289.569 384.277 288.946 383.549 288.19 382.977C286.862 382.004 285.224 381.543 283.581 381.682C281.938 381.821 280.401 382.549 279.258 383.731L277.668 385.356C277.569 385.455 277.451 385.534 277.32 385.588C277.19 385.642 277.051 385.67 276.91 385.67C276.769 385.67 276.63 385.642 276.5 385.588C276.37 385.534 276.252 385.455 276.152 385.356L274.338 383.551C273.089 382.318 271.402 381.624 269.643 381.618Z"
                  fill="#484C52"
                />
              </Svg>
            )}
          </TouchableOpacity>

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
              <Text style={styles.buttonTitle}>Hemen Al</Text>
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
          <View style={styles.propertiesRow}>
            <Text style={styles.propertiesTitle}>Renk:</Text>
            <Text style={styles.propertiesDescription}>Koyu Yeşil</Text>
          </View>
          <View style={styles.propertiesRow}>
            <Text style={styles.propertiesTitle}>Kapasite:</Text>
            <Text style={styles.propertiesDescription}>3 Kişilik</Text>
          </View>
          <View style={styles.propertiesRow}>
            <Text style={styles.propertiesTitle}>Su geçirmez:</Text>
            <Text style={styles.propertiesDescription}>2000mm</Text>
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
