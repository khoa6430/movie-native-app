import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, ScrollView, TouchableOpacity, View } from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../navigation/appNavigation";
import { useAppTheme } from "../../theme/userTheme";
import MovieList from "../shared/MovieList";
import TrendingMovieSlide from "./TrendingMovie";
import { useGetUpcomingMovie } from "../../hooks/movies/useGetUpcomingMovie";
import { useGetTopRatedMovie } from "../../hooks/movies/useGetTopRatedMovie";

const ios = Platform.OS == "ios";
const HomeScreen = () => {
  const theme = useAppTheme();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { data: dataUpcoming } = useGetUpcomingMovie();
  const { data: dataTopRated } = useGetTopRatedMovie();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.neutral800,
        paddingBottom: 30,
      }}
    >
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
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <TrendingMovieSlide />
          <MovieList
            titleList="Upcoming"
            data={dataUpcoming?.results.map((item) => {
              return {
                title: item?.title,
                url: item?.poster_path,
              };
            })}
          />

          <MovieList
            titleList="Top Rated"
            data={dataTopRated?.results?.map((item) => {
              return {
                title: item?.original_name || "",
                url: item?.poster_path,
              };
            })}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
