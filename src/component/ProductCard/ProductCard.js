import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";
import { AirbnbRating } from "react-native-ratings";
import styles from "./ProductCard.styles";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ item }) => {
  const [fav, setFav] = useState(false);
  const navigation = useNavigation();

  const formattedAmount = (amount) => {
    return new Intl.NumberFormat("tr-TR", {
      currency: "TRY",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => navigation.navigate("ProductDetail", { id: item.id })}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text style={styles.kargo}>Kargo Bedava</Text>
          <Svg
            width="29"
            height="25"
            viewBox="0 0 29 25"
            fill={fav ? "red" : "none"}
            onPress={() => setFav(!fav)}
          >
            <Path
              d="M14.089 24.0845C13.7163 24.0854 13.3471 24.0122 13.0026 23.8692C12.6581 23.7261 12.3452 23.5161 12.0818 23.251L2.3755 13.4962C1.60873 12.7172 1.00388 11.7927 0.596174 10.7764C0.188468 9.76021 -0.0139391 8.6726 0.000745432 7.57697C0.00813328 6.57292 0.212549 5.5802 0.602285 4.65567C0.99202 3.73114 1.55942 2.89297 2.27198 2.18917C2.98453 1.48536 3.82825 0.929755 4.7548 0.554168C5.68135 0.17858 6.67253 -0.00960621 7.67157 0.000387261C8.68848 -0.00990726 9.6971 0.185138 10.6376 0.573957C11.5781 0.962775 12.4313 1.53745 13.1467 2.26389L14.089 3.21096L14.8618 2.43437C16.1961 1.05786 17.9815 0.213964 19.8875 0.0589868C21.7934 -0.0959906 23.6906 0.44845 25.2278 1.59147C26.1028 2.26867 26.8242 3.12546 27.3439 4.10477C27.8637 5.08409 28.1698 6.16345 28.2421 7.27099C28.3143 8.37853 28.1509 9.48882 27.7628 10.5279C27.3746 11.567 26.7706 12.5111 25.9911 13.2973L16.0963 23.251C15.8329 23.5161 15.5199 23.7261 15.1755 23.8692C14.831 24.0122 14.4618 24.0854 14.089 24.0845ZM7.63387 1.88506C6.13601 1.88353 4.69631 2.46772 3.61941 3.51403C3.07039 4.0449 2.63379 4.68182 2.33582 5.38652C2.03785 6.09122 1.88467 6.84917 1.88547 7.61485C1.87721 8.4571 2.03538 9.29261 2.35082 10.073C2.66626 10.8533 3.13269 11.563 3.72307 12.1608L13.4294 21.9157C13.517 22.0044 13.6212 22.0749 13.7361 22.123C13.8509 22.171 13.9741 22.1958 14.0985 22.1958C14.2229 22.1958 14.346 22.171 14.4609 22.123C14.5757 22.0749 14.6799 22.0044 14.7675 21.9157L24.6718 11.9524C25.2531 11.3558 25.7023 10.6423 25.9898 9.85885C26.2772 9.07536 26.3965 8.23961 26.3397 7.4065C26.2894 6.56485 26.0587 5.74406 25.6635 5.00032C25.2683 4.25657 24.7178 3.60743 24.0498 3.09732C22.8776 2.22875 21.4312 1.81806 19.9801 1.94177C18.529 2.06548 17.1721 2.71515 16.1622 3.76974L14.7581 5.21876C14.6705 5.30753 14.5663 5.37798 14.4515 5.42607C14.3366 5.47415 14.2134 5.4989 14.089 5.4989C13.9646 5.4989 13.8415 5.47415 13.7266 5.42607C13.6118 5.37798 13.5076 5.30753 13.42 5.21876L11.818 3.60874C10.7145 2.50945 9.22525 1.89034 7.67157 1.88506H7.63387Z"
              fill={fav ? "red" : "#757575"}
            />
          </Svg>
        </View>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <AirbnbRating
          style={{ paddingVertical: 5 }}
          count={5}
          defaultRating={item.rating}
          size={12}
          isDisabled
          showRating={false}
          starContainerStyle={{
            marginTop: 9,
            marginBottom: 5,
            width: "100%",
            justifyContent: "flex-start",
          }}
        />
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {item.description}
        </Text>
        <Text style={styles.price}>
          {formattedAmount(item.price * 27.11)} TL
        </Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonTitle}>Sepete Ekle</Text>
      </View>
    </View>
  );
};

export default ProductCard;
