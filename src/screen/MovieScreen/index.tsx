import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppTheme } from "../../theme/userTheme";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useState } from "react";
import Loading from "../../components/Loading";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { StackNavigation } from "../../navigation/appNavigation";

export interface IMovieScreenProps {}

let { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

type SafeAreaViewStyle = ViewStyle & { marginTop?: number };

// Define the inline style object
const safeAreaViewStyle: SafeAreaViewStyle = {
  position: "absolute",
  zIndex: 20,
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  marginTop: ios ? 0 : 16,
};
interface Genre {
  name: string;
}
interface Movie {
  id: string;
  title: string;
  status: string;
  genres: Genre[];
  overview: string;
}
export default function MovieScreen(props: IMovieScreenProps) {
  const theme = useAppTheme();
  const { params: item } = useRoute();
  const [isFavourite, toggleFavourite] = useState<boolean>(false);
  const [cast, setCast] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [similarMovies, setSimilarMovies] = useState<[]>([]);
  const [movie, setMovie] = useState<Movie | null>({
    id: "1",
    title: "Ant-Man and the Wasp: Quantumania",
    status: "",
    genres: [
      {
        name: "Action",
      },
      {
        name: "Thrill",
      },
      {
        name: "Comedy",
      },
    ],
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ex nec urna euismod interdum ut id eros. Sed sed mauris justo. Nulla in velit in elit tincidunt gravida id eu sem. Quisque nulla elit, pellentesque non ultricies sit amet, posuere at purus. Nam bibendum ipsum eleifend justo finibus posuere. Fusce quis molestie erat. Fusce lectus dolor, tempor in dolor sit amet, accumsan egestas tortor. Sed sollicitudin suscipit elit ut varius. Sed nec turpis scelerisque, ultricies dolor quis, fringilla erat",
  });
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.neutral900 }}>
      <View style={{ width: "100%" }}>
        <SafeAreaView style={safeAreaViewStyle}>
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.honeyGold,
              borderRadius: 12,
              padding: 4,
            }}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={28} strokeWidth={2.5} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon
              size={35}
              color={isFavourite ? theme.colors.honeyGold : theme.colors.white}
            />
          </TouchableOpacity>
        </SafeAreaView>

        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              source={require("../../../assets/images/moviePoster2.png")}
              style={{ width, height: height * 0.55 }}
            />
            <LinearGradient
              colors={[
                "transparent",
                "rgba(23, 23, 23, 0.8)",
                "rgba(23, 23, 23, 1)",
              ]}
              style={{
                width,
                height: height * 0.4,
                position: "absolute",
                bottom: 0,
              }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
          </View>
        )}
        {/* Movie details */}
        <View style={{ marginTop: -(height * 0.09), marginVertical: 12 }}>
          <Text
            style={{
              color: theme.colors.white,
              textAlign: "center",
              fontWeight: "700",
              //   letterSpacing: 0.4,
            }}
            variant="bodyLarge"
          >
            {movie?.title}
          </Text>
          {/* Status, Release , Runtime */}
          {movie?.id ? (
            <Text
              style={{
                color: theme.colors.neutral400,
                fontWeight: "600",
                fontSize: 16,
                lineHeight: 24,
                textAlign: "center",
              }}
            >
              {/* {movie?.status} • {movie?.release_date?.split("-")[0] || "N/A"} •{" "}
              {movie?.runtime} min */}
              Realeased 2020 170 min
            </Text>
          ) : null}

          {/* Genres  */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginHorizontal: 16,
              marginVertical: 8,
            }}
          >
            {movie?.genres?.map((genre: any, index: number) => {
              let showDot = index + 1 != movie.genres.length;
              return (
                <Text
                  key={index}
                  style={{
                    color: theme.colors.neutral400,
                    fontWeight: "600",
                    fontSize: 16,
                    lineHeight: 24,
                    textAlign: "center",
                  }}
                >
                  {genre?.name} {showDot ? "•" : null}
                </Text>
              );
            })}
          </View>

          {/* Description */}
          <Text
            style={{
              color: theme.colors.neutral400,
              marginHorizontal: 16,
              //   letterSpacing: 0.4,
            }}
          >
            {movie?.overview}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
