import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, StatusBar, View, Text } from "react-native";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

import Svg, { Path } from "react-native-svg";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconColor;

          if (route.name === "ProductDetail1") {
            iconColor = focused ? "#FF5714" : "#595959";
            return (
              <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
                <Path
                  d="M9.92002 2.84004L4.53002 7.04004C3.63002 7.74004 2.90002 9.23004 2.90002 10.36V17.77C2.90002 20.09 4.79002 21.99 7.11002 21.99H18.69C21.01 21.99 22.9 20.09 22.9 17.78V10.5C22.9 9.29004 22.09 7.74004 21.1 7.05004L14.92 2.72004C13.52 1.74004 11.27 1.79004 9.92002 2.84004Z"
                  stroke={iconColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M12.9 17.99V14.99"
                  stroke={iconColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            );
          } else if (route.name === "ProductDetail2") {
            iconColor = focused ? "#FF5714" : "#595959";
            return (
              <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
                <Path
                  d="M21 19.7258L14.8039 13.5242C15.9414 12.1023 16.625 10.2922 16.625 8.32344C16.625 3.72422 12.9008 0 8.3125 0C3.71875 0 0 3.72969 0 8.32344C0 12.9172 3.72422 16.6469 8.3125 16.6469C10.2922 16.6469 12.1078 15.9523 13.5352 14.7984L19.7258 21L21 19.7258ZM3.05156 13.5953C1.64609 12.1898 0.875 10.3195 0.875 8.32891C0.875 6.33828 1.65156 4.46797 3.05156 3.0625C4.45156 1.65703 6.32734 0.875 8.3125 0.875C10.2977 0.875 12.168 1.65156 13.5734 3.05703C14.9789 4.4625 15.75 6.33281 15.75 8.32344C15.75 10.3141 14.9734 12.1844 13.5734 13.5898C12.168 14.9953 10.2977 15.7719 8.3125 15.7719C6.32734 15.7773 4.45703 15.0008 3.05156 13.5953Z"
                  fill={iconColor}
                />
              </Svg>
            );
          } else if (route.name === "ProductDetail3") {
            iconColor = focused ? "#FF5714" : "#595959";
            return (
              <Svg width={25} height={22} viewBox="0 0 25 22" fill="none">
                <Path
                  d="M12.4643 21.25C12.1346 21.2508 11.808 21.1863 11.5032 21.0601C11.1984 20.9339 10.9216 20.7485 10.6886 20.5147L2.10156 11.9078C1.42322 11.2205 0.888115 10.4048 0.527425 9.50818C0.166734 8.61155 -0.0123317 7.65193 0.000659471 6.68525C0.00719537 5.79937 0.188039 4.92348 0.532831 4.10775C0.877623 3.29203 1.37959 2.5525 2.00998 1.93153C2.64037 1.31055 3.38679 0.820334 4.20649 0.488949C5.0262 0.157564 5.90308 -0.00847567 6.7869 0.000341685C7.68655 -0.00874129 8.57886 0.16335 9.4109 0.506409C10.2429 0.849467 10.9978 1.35651 11.6306 1.99746L12.4643 2.83307L13.148 2.14787C14.3284 0.933361 15.908 0.188783 17.5941 0.0520448C19.2802 -0.0846936 20.9587 0.395673 22.3186 1.40417C23.0927 2.00168 23.7309 2.75763 24.1907 3.62169C24.6505 4.48575 24.9214 5.43809 24.9853 6.41528C25.0492 7.39247 24.9046 8.3721 24.5612 9.28891C24.2179 10.2057 23.6835 11.0387 22.9939 11.7324L14.2401 20.5147C14.0071 20.7485 13.7302 20.9339 13.4255 21.0601C13.1207 21.1863 12.7941 21.2508 12.4643 21.25ZM6.75356 1.66321C5.42842 1.66186 4.15474 2.1773 3.20203 3.10047C2.71632 3.56887 2.33007 4.13082 2.06646 4.75259C1.80285 5.37435 1.66733 6.0431 1.66804 6.71867C1.66073 7.4618 1.80067 8.19898 2.07973 8.88749C2.3588 9.576 2.77144 10.2021 3.29374 10.7296L11.8808 19.3364C11.9583 19.4148 12.0505 19.4769 12.1521 19.5193C12.2537 19.5618 12.3626 19.5836 12.4727 19.5836C12.5827 19.5836 12.6917 19.5618 12.7933 19.5193C12.8949 19.4769 12.9871 19.4148 13.0646 19.3364L21.8267 10.5458C22.341 10.0194 22.7384 9.38986 22.9927 8.69858C23.247 8.00729 23.3525 7.2699 23.3023 6.53484C23.2578 5.79224 23.0537 5.06805 22.7041 4.41184C22.3544 3.75562 21.8674 3.18288 21.2765 2.7328C20.2394 1.96645 18.9599 1.6041 17.6761 1.71325C16.3923 1.8224 15.1919 2.39561 14.2985 3.32608L13.0563 4.60457C12.9788 4.68289 12.8866 4.74506 12.785 4.78748C12.6834 4.8299 12.5744 4.85175 12.4643 4.85175C12.3543 4.85175 12.2453 4.8299 12.1437 4.78748C12.0421 4.74506 11.9499 4.68289 11.8724 4.60457L10.4551 3.18403C9.47898 2.21411 8.16142 1.66787 6.7869 1.66321H6.75356Z"
                  fill={iconColor}
                />
              </Svg>
            );
          } else if (route.name === "ProductDetail4") {
            iconColor = focused ? "#FF5714" : "#595959";
            return (
              <Svg width={18} height={22} viewBox="0 0 18 22" fill="none">
                <Path
                  d="M15.9402 21H1.44444C1.20513 21 1 20.7984 1 20.5632V6.82141C1 6.58622 1.20513 6.38463 1.44444 6.38463H15.9402C16.1795 6.38463 16.3846 6.58622 16.3846 6.82141V20.5632C16.3846 20.7984 16.1795 21 15.9402 21Z"
                  stroke={iconColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M4.07678 6.38461C4.07678 1 8.69216 1 8.69216 1C8.69216 1 13.3075 1 13.3075 6.38461"
                  stroke={iconColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            );
          } else if (route.name === "ProductDetail5") {
            iconColor = focused ? "#FF5714" : "#595959";
            return (
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke={iconColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22"
                  stroke={iconColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            );
          }
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="ProductDetail1"
        component={ProductList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProductDetail2"
        component={Empty}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProductDetail3"
        component={Empty}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProductDetail4"
        component={Empty}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProductDetail5"
        component={User}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function Empty() {
  return <View></View>;
}

function User({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: "red" }}>Çıkış Yap</Text>
      </Pressable>
    </View>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductList"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
