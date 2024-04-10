import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline";
import { Box, Text } from "native-base";

const ios = Platform.OS == "ios";
const HomeScreen = () => {
  return (
    <View>
      {/* Search bar and Logo */}
      <SafeAreaView>
        <StatusBar style="light" />
        <View>
          <Bars3CenterLeftIcon strokeWidth={2} color="white" size={30} />
          {/* <Text className="text-white text-3xl font-bold"></Text> */}
          <Text>
            <Text>M</Text>ovies
          </Text>
          <Box bg="primary.100" height={50} width={150} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
