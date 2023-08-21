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
          <TouchableOpacity
            onPress={() => setFav(!fav)}
            style={{ height: 24.0834, width: 28.257 }}
          >
            {fav ? (
              <Svg
                width={28.257}
                height={24.0834}
                viewBox="352.7615 326.7856 28.257 24.0834"
              >
                <Path
                  d="M366.861 350.869C367.229 350.865 367.576 350.803 367.941 350.652C368.287 350.503 368.605 350.29 368.882 350.01L378.752 340.083C379.539 339.288 380.129 338.343 380.524 337.313C380.9 336.276 381.074 335.173 381.003 334.054C380.929 332.946 380.624 331.872 380.105 330.889C379.584 329.911 378.879 329.067 378 328.386C376.447 327.237 374.548 326.719 372.648 326.844C370.753 327.027 368.959 327.846 367.61 329.233L366.85 329.996L365.908 329.049C365.189 328.32 364.341 327.75 363.398 327.359C362.456 326.972 361.465 326.776 360.444 326.786C359.448 326.778 358.448 326.962 357.515 327.341C356.588 327.717 355.75 328.27 355.035 328.974C354.321 329.679 353.755 330.516 353.364 331.441C352.974 332.368 352.769 333.35 352.762 334.359C352.75 335.459 352.959 336.547 353.357 337.561C353.771 338.57 354.371 339.502 355.143 340.289L364.843 350.036C365.117 350.314 365.415 350.505 365.768 350.655C366.116 350.795 366.467 350.871 366.861 350.869Z"
                  fill="#FF0000"
                />
              </Svg>
            ) : (
              <Svg
                width={28.257}
                height={24.0834}
                viewBox="342.4685 284.5286 28.257 24.0834"
              >
                <Path
                  d="M356.568 308.612C356.174 308.614 355.823 308.538 355.475 308.398C355.122 308.248 354.824 308.057 354.55 307.779L344.85 298.032C344.078 297.245 343.478 296.313 343.064 295.304C342.666 294.29 342.457 293.202 342.469 292.102C342.476 291.093 342.681 290.111 343.071 289.184C343.462 288.259 344.028 287.422 344.742 286.717C345.457 286.013 346.295 285.46 347.222 285.084C348.155 284.705 349.155 284.521 350.151 284.529C351.172 284.519 352.163 284.715 353.105 285.102C354.048 285.493 354.896 286.063 355.615 286.792L356.557 287.739L357.317 286.976C358.666 285.589 360.46 284.77 362.355 284.587C364.255 284.462 366.154 284.98 367.707 286.129C368.586 286.81 369.291 287.654 369.812 288.632C370.331 289.615 370.636 290.689 370.71 291.797C370.781 292.916 370.607 294.019 370.231 295.056C369.836 296.086 369.246 297.031 368.459 297.826L358.589 307.753C358.312 308.033 357.994 308.246 357.648 308.395C357.283 308.546 356.936 308.608 356.568 308.612ZM350.102 286.413C348.593 286.412 347.156 287.004 346.072 288.056C345.516 288.596 345.09 289.21 344.804 289.915C344.498 290.61 344.355 291.369 344.353 292.144C344.346 292.989 344.504 293.82 344.82 294.603C345.136 295.384 345.605 296.094 346.198 296.696L355.897 306.444C356.01 306.555 356.096 306.619 356.204 306.651C356.315 306.708 356.442 306.724 356.566 306.724C356.691 306.724 356.817 306.708 356.929 306.651C357.035 306.621 357.134 306.54 357.242 306.437L367.138 296.482C367.717 295.884 368.167 295.172 368.458 294.388C368.744 293.602 368.864 292.773 368.808 291.936C368.755 291.092 368.527 290.275 368.131 289.529C367.734 288.784 367.189 288.141 366.523 287.629C365.338 286.763 363.89 286.347 362.448 286.47C361.005 286.594 359.64 287.247 358.616 288.312L357.274 289.697L356.565 290.428L354.286 288.137C353.174 287.03 351.682 286.418 350.119 286.413Z"
                  fill="#757575"
                />
              </Svg>
            )}
          </TouchableOpacity>
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
        <Text style={styles.name} numberOfLines={1}>
          {item.title}
        </Text>
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
