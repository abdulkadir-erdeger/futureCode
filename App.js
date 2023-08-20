import "react-native-gesture-handler";
import Router from "./src/Router";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <Router onLayout={onLayoutRootView} />;
}
