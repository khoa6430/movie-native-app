import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../../components/loading";
import FallbackImages from "../../constants/fall-back-image";
import generateImageUrlBySize, {
  ImageSize,
} from "../../constants/get-image-url";
import { useGetCasts } from "../../hooks/casts/useGetCasts";
import { useGetDetailsMovie } from "../../hooks/movies/useGetDetailsMovie";
import { useGetSimilarMovie } from "../../hooks/movies/useGetSimilarMovie";
import {
  RootRouteProps,
  StackNavigation,
} from "../../navigation/appNavigation";
import { useAppTheme } from "../../theme/userTheme";
import MovieList from "../shared/MovieList";
import MovieCast from "./MovieCast";
import MovieInfor from "./MovieInfor";
import GoBackButton from "../../components/goback-button";
import FavouriteButton from "../../components/favourite-button";

export interface IMovieScreenProps {}

type SafeAreaViewStyle = ViewStyle & { marginTop?: number };

const ios = Platform.OS == "ios";
let { width, height } = Dimensions.get("window");

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

  const { data: dataDetailsMovie, isLoading: isLoadingDetailsMovie } =
    useGetDetailsMovie(route?.params?.movieId);
  const { data: dataSimilarMovie } = useGetSimilarMovie(route?.params?.movieId);
  const { data: dataCasts } = useGetCasts(route?.params?.movieId);
  console.log("isLoadingDetailsMovie:", isLoadingDetailsMovie);

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
      {isLoadingDetailsMovie ? (
        <Loading />
      ) : (
        <>
          <View style={{ width: "100%" }}>
            <SafeAreaView style={safeAreaViewStyle}>
              <GoBackButton handleGoBack={handleGoback} />
              <FavouriteButton
                isFavourite={isFavourite}
                handleClickFavourite={handleClickFavourite}
              />
            </SafeAreaView>

            <View>
              <Image
                source={{
                  uri: generateImageUrlBySize(
                    ImageSize.W500,
                    dataDetailsMovie?.poster_path,
                    FallbackImages.FallbackMoviePoster
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
            {/* )} */}
          </View>

          <MovieInfor
            dataDetailsMovie={dataDetailsMovie}
            isLoading={isLoadingDetailsMovie}
          />
          <MovieCast cast={dataCasts?.cast} />
          <MovieList
            data={dataSimilarMovie?.results?.map((item) => {
              return {
                title: item?.title || "",
                url: item?.poster_path,
              };
            })}
            titleList="Similiar Movies"
            hideSeeAll
          />
        </>
      )}
    </ScrollView>
  );
}
