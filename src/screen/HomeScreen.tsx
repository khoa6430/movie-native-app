import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline";
import { useTheme } from "react-native-paper";
import { useAppTheme } from "../theme/userTheme";

const ios = Platform.OS == "ios";
const HomeScreen = () => {
  const theme = useAppTheme();

  return (
    <View>
      <SafeAreaView style={{ backgroundColor: theme.colors.honeyGold }}>
        <StatusBar style="light" />
        <View>
          <Bars3CenterLeftIcon strokeWidth={2} color="white" size={30} />
          <Text>hello</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
