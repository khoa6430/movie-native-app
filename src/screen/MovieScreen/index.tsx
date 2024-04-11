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
import MovieInfor from "./MovieInfor";
import MovieCast from "./MovieCast";
import { Cast } from "../../types/cast.type";
import MovieList from "../shared/MovieList";

export interface IMovieScreenProps {}

type SafeAreaViewStyle = ViewStyle & { marginTop?: number };

const ios = Platform.OS == "ios";
let { width, height } = Dimensions.get("window");

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

export default function MovieScreen(props: IMovieScreenProps) {
  const theme = useAppTheme();
  const { params: item } = useRoute();
  const [isFavourite, toggleFavourite] = useState<boolean>(false);
  const [cast, setCast] = useState<Cast[]>([
    {
      character: "Tony Stark",
      original_name: "Robert Downey Jr.",
    },
    {
      character: "Steve Rogers",
      original_name: "Chris Evans",
    },
    {
      character: "Natasha Romanoff",
      original_name: "Scarlett Johansson",
    },
    {
      character: "Bruce Banner",
      original_name: "Mark Ruffalo",
    },
    {
      character: "Thor",
      original_name: "Chris Hemsworth",
    },
    {
      character: "Thor",
      original_name: "Chris Hemsworth",
    },
    {
      character: "Thor",
      original_name: "Chris Hemsworth",
    },
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [similarMovies, setSimilarMovies] = useState<number[]>([1, 2, 3, 4]);

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
      </View>

      <MovieInfor />
      {cast?.length > 0 && <MovieCast cast={cast} />}

      {similarMovies?.length > 0 && (
        <MovieList data={similarMovies} titleList="Similiar Movies" />
      )}
    </ScrollView>
  );
}
