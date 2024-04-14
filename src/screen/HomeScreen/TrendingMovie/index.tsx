import { useNavigation } from "@react-navigation/native";
import { Dimensions, View } from "react-native";
import { Text } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { useGetTrendingMovie } from "../../../hooks/movies/useGetTrendingMovie";
import { StackNavigation } from "../../../navigation/appNavigation";
import { useAppTheme } from "../../../theme/userTheme";
import MovieCard from "../../shared/MovieCard";
import { TrendingMovie } from "../../../types/movie.type";

export interface ITrendingMovieProps {
  // data: number[];
}
let { width, height } = Dimensions.get("window");
export default function TrendingMovieSlide(props: ITrendingMovieProps) {
  // const { data } = props;
  const theme = useAppTheme();
  const { data } = useGetTrendingMovie();

  const { navigate } = useNavigation<StackNavigation>();

  const handleClick = () => {
    navigate("Movie");
  };

  return (
    <>
      <View style={{ marginTop: 32 }}>
        <Text
          variant="bodyMedium"
          style={{
            color: theme.colors.white,
            marginHorizontal: 16,
            marginBottom: 20,
          }}
        >
          Trending
        </Text>
        <Carousel
          data={data?.results || []}
          renderItem={({ item }: { item: TrendingMovie }) => (
            <MovieCard url={item.poster_path} handleClick={handleClick} />
          )}
          firstItem={1}
          inactiveSlideOpacity={0.6}
          sliderWidth={width}
          itemWidth={width * 0.62}
          slideStyle={{ display: "flex", alignItems: "center" }}
          vertical={false}
        />
      </View>
    </>
  );
}
