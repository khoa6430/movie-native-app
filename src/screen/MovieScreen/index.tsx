import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../../components/loading";
import {
  RootRouteProps,
  RootStackParamList,
  StackNavigation,
} from "../../navigation/appNavigation";
import { useAppTheme } from "../../theme/userTheme";
import MovieList from "../shared/MovieList";
import MovieCast from "./MovieCast";
import MovieInfor from "./MovieInfor";
import GoBackButton from "../../components/goback-button";
import FavouriteButton from "../../components/favourite-button";
import { useGetDetailsMovie } from "../../hooks/movies/useGetDetailsMovie";
import generateImageUrlBySize, {
  ImageSize,
} from "../../constants/get-image-url";
import { useGetSimilarMovie } from "../../hooks/movies/useGetSimilarMovie";
import { useGetCasts } from "../../hooks/casts/useGetCasts";
import FallbackImages from "../../constants/fall-back-image";

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
  const route = useRoute<RootRouteProps<"Movie">>();

  const [isFavourite, toggleFavourite] = useState<boolean>(false);

  const { data: dataDetails } = useGetDetailsMovie(route?.params?.movieId);
  const { data: dataSimilar } = useGetSimilarMovie(route?.params?.movieId);
  const { data: dataCasts } = useGetCasts(route?.params?.movieId);

  const [cast, setCast] = useState<any[]>([
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

  // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const navigation = useNavigation<StackNavigation>();
  // const naviagtion = useNavigation<StackNavigation>();

  const handleGoback = () => {
    navigation.goBack();
  };
  const handleClickFavourite = () => {
    toggleFavourite(!isFavourite);
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.neutral900,
      }}
    >
      <View style={{ width: "100%" }}>
        <SafeAreaView style={safeAreaViewStyle}>
          <GoBackButton handleGoBack={handleGoback} />
          <FavouriteButton
            isFavourite={isFavourite}
            handleClickFavourite={handleClickFavourite}
          />
        </SafeAreaView>

        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              source={{
                uri: generateImageUrlBySize(
                  ImageSize.W500,
                  dataDetails?.poster_path || FallbackImages.FallbackMoviePoster
                ),
              }}
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

      <MovieInfor dataDetailsMovie={dataDetails} />
      <MovieCast cast={dataCasts?.cast} />

      {dataSimilar?.results && (
        <MovieList
          data={dataSimilar?.results?.map((item) => {
            return {
              title: item?.title || "",
              url: item?.poster_path,
            };
          })}
          titleList="Similiar Movies"
          hideSeeAll
        />
      )}
    </ScrollView>
  );
}
