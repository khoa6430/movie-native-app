import { StatusBar } from "expo-status-bar";
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { Text, useTheme } from "react-native-paper";
import { useAppTheme } from "../../theme/userTheme";
import TrendingMovie from "./TrendingMovie";
import { useState } from "react";

const ios = Platform.OS == "ios";
const HomeScreen = () => {
  const theme = useAppTheme();

  const [trending, setTrending] = useState([1, 2, 3]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.neutral800 }}>
      <SafeAreaView style={{ marginTop: ios ? -2 : 15 }}>
        <StatusBar style="light" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 16,
          }}
        >
          <Bars3CenterLeftIcon strokeWidth={2} color="white" size={30} />
          <Text style={{ color: theme.colors.white }} variant="bodyLarge">
            <Text style={{ color: theme.colors.honeyGold }}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <TrendingMovie data={trending} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
